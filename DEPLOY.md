# Déploiement — Karriere Fähre (VPS / Cloud Server IONOS)

Ce site est une application **Next.js 16** avec rendu serveur, server actions et middleware : elle
a besoin d'un **runtime Node.js** qui tourne en permanence. IONOS **Deploy Now ne convient pas**
(statique uniquement). On déploie donc sur un **VPS / Cloud Server IONOS** (Linux) avec Node 20,
un process manager (PM2), un reverse proxy (nginx) et un certificat SSL (Let's Encrypt).

Node version : voir `.nvmrc` → **Node 20 (LTS)**.

---

## 0. Prérequis

- Un **VPS / Cloud Server IONOS** sous **Ubuntu 22.04 ou 24.04**, avec son **adresse IP publique**.
- L'accès **SSH** au serveur (utilisateur `root` ou un sudoer).
- Le **domaine** (karrierefaehre.com) — DNS gérable chez IONOS.
- Le projet Supabase : **URL**, **anon key**, **service-role key**.
- Le dépôt GitHub : `https://github.com/Karriere-F/karriere-F-hre.git` (le code doit y être poussé).

---

## 1. Supabase (à faire avant la mise en ligne)

Applique toutes les migrations, **y compris le correctif de sécurité 0011** (sinon n'importe qui
peut devenir admin). Depuis ta machine (ou le SQL Editor du dashboard Supabase) :

```bash
supabase db push
```

Puis vérifie qu'aucun compte admin pirate n'existe :

```sql
select p.id, p.full_name, u.email, u.created_at
from public.profiles p join auth.users u on u.id = p.id
where p.role = 'admin' order by u.created_at;
```

Dans le dashboard Supabase → **Authentication → Providers → Email** : active la
**confirmation d'e-mail** avant accès.

---

## 2. Préparer le serveur (une seule fois)

Connecte-toi en SSH, puis :

```bash
# Mise à jour du système
sudo apt update && sudo apt upgrade -y

# Node.js 20 (LTS) via NodeSource
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs git build-essential nginx

# Process manager
sudo npm install -g pm2

# Pare-feu : n'ouvrir que SSH + web
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

---

## 3. Récupérer le code + variables d'environnement

```bash
# Dossier de l'app
sudo mkdir -p /var/www && cd /var/www

# Cloner le dépôt (dépôt privé → voir note GitHub plus bas)
git clone https://github.com/Karriere-F/karriere-F-hre.git karriere-fahre
cd karriere-fahre

# Fichier d'environnement de production (NE PAS committer)
nano .env.local
```

Contenu de `.env.local` (remplace par tes vraies valeurs) :

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxxxx
SUPABASE_SERVICE_ROLE_KEY=xxxxx
```

> **Dépôt privé GitHub :** si le clone demande un mot de passe, crée un *Personal Access Token*
> (GitHub → Settings → Developer settings → Tokens) et utilise-le comme mot de passe, ou
> configure une *deploy key* SSH. Pour les mises à jour, un token en lecture seule suffit.

---

## 4. Build + lancement

```bash
npm ci            # installe exactement les dépendances
npm run build     # build de production
pm2 start "npm run start" --name karriere-fahre   # lance next start (port 3000)
pm2 save                                           # mémorise le process
pm2 startup                                        # relance au reboot (suivre la ligne affichée)
```

Le site tourne maintenant en local sur le serveur (http://127.0.0.1:3000). Il reste à l'exposer.

---

## 5. Reverse proxy nginx

```bash
sudo nano /etc/nginx/sites-available/karriere-fahre
```

Colle (remplace le domaine si besoin) :

```nginx
server {
    listen 80;
    server_name karrierefaehre.com www.karrierefaehre.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Laisse passer les uploads (logo, CV) ; l'app limite déjà à ~5–6 Mo.
    client_max_body_size 10M;
}
```

```bash
sudo ln -s /etc/nginx/sites-available/karriere-fahre /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

---

## 6. DNS chez IONOS

Dans l'espace IONOS → **Domaines → karrierefaehre.com → DNS** :

- Enregistrement **A** : `@` → **l'IP publique du VPS**
- Enregistrement **A** (ou CNAME) : `www` → **l'IP publique du VPS** (ou `karrierefaehre.com`)

Attends la propagation (quelques minutes à quelques heures).

---

## 7. HTTPS (Let's Encrypt, gratuit, renouvellement auto)

Une fois le DNS pointé sur le serveur :

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d karrierefaehre.com -d www.karrierefaehre.com
```

Certbot configure le HTTPS, la redirection HTTP→HTTPS, et renouvelle automatiquement.
Les en-têtes de sécurité (HSTS, etc.) sont déjà gérés par l'app (`next.config.ts`).

---

## 8. Mettre à jour le site plus tard

```bash
cd /var/www/karriere-fahre
git pull
npm ci
npm run build
pm2 restart karriere-fahre
```

---

## 9. Durcissement recommandé (après la première mise en ligne)

- **Connexion SSH par clé** uniquement ; désactiver le login root par mot de passe.
- Sauvegardes régulières (snapshots IONOS + exports Supabase).
- Surveiller `pm2 logs karriere-fahre` en cas de souci.
- Ajouter le **CAPTCHA** (Turnstile) sur les formulaires — étape déjà préparée, il ne manque que tes clés.

---

### Récapitulatif des commandes « site en marche »
`pm2 status` · `pm2 logs karriere-fahre` · `pm2 restart karriere-fahre` · `sudo systemctl status nginx`
