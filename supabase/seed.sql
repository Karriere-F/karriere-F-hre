-- Starter list of common German skilled-labor shortage occupations (Mangelberufe).
-- Admin can edit/add more via /admin/occupations once the site is live.

insert into shortage_occupations (slug, category, title_fr, title_de, title_en, display_order) values
  ('soins-infirmiers', 'healthcare', 'Soins infirmiers', 'Pflegefachkraft', 'Nursing', 10),
  ('aide-personnes-agees', 'healthcare', 'Aide aux personnes âgées', 'Altenpflege', 'Elderly care', 20),
  ('developpeur-informatique', 'it', 'Développeur informatique', 'Softwareentwickler', 'Software developer', 30),
  ('electricien', 'skilled_trades', 'Électricien', 'Elektriker', 'Electrician', 40),
  ('plombier', 'skilled_trades', 'Plombier', 'Klempner', 'Plumber', 50),
  ('mecatronicien', 'skilled_trades', 'Mécatronicien', 'Mechatroniker', 'Mechatronics technician', 60),
  ('ingenieur-genie-civil', 'engineering', 'Ingénieur génie civil', 'Bauingenieur', 'Civil engineer', 70),
  ('chauffeur-poids-lourd', 'drivers', 'Chauffeur poids lourd', 'Berufskraftfahrer', 'Truck driver', 80);
