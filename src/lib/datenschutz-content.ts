// German privacy policy (Datenschutzerklärung). Rendered only on the DE locale
// (/datenschutz); FR (/confidentialite) and EN (/privacy) keep the placeholder until the
// founder provides official translations. Contact details filled from the imprint.

export type Block =
  | { p: string }
  | { ul: string[] }
  | { h4: string }
  | { lines: string[] };

export const DATENSCHUTZ = {
  title: "Datenschutzerklärung von Karriere Fähre",
  updated: "Stand: 16. Oktober 2026",
  sections: [
    {
      num: "1",
      title: "Verantwortlicher",
      blocks: [
        { p: "Verantwortlicher für die Verarbeitung personenbezogener Daten im Zusammenhang mit dieser Website ist:" },
        {
          lines: [
            "KARRIERE FÄHRE SARL",
            "Sitz: Bonamoussadi, Gebäude gegenüber Super U, 3. Etage, Douala, Kamerun",
            "Handelsregister (RCCM): CM-DLA-01-2025-B13-00504",
            "E-Mail: Datenschutz@karrierefaehre.com",
            "Telefon: +237 673 71 98 16 / +237 695 94 78 88",
          ],
        },
        { p: "Im Folgenden wird das Unternehmen als „Karriere Fähre“, „wir“ oder „uns“ bezeichnet." },
        { p: "Sofern nach den anwendbaren Datenschutzvorschriften erforderlich, werden die Kontaktdaten eines Datenschutzbeauftragten oder eines Vertreters in der Europäischen Union hier ergänzt." },
      ] as Block[],
    },
    {
      num: "2",
      title: "Allgemeine Hinweise zur Datenverarbeitung",
      blocks: [
        { p: "Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Wir verarbeiten personenbezogene Daten vertraulich und ausschließlich im Rahmen der geltenden datenschutzrechtlichen Vorschriften, insbesondere der Datenschutz-Grundverordnung (DSGVO), soweit diese auf die jeweilige Verarbeitung Anwendung findet." },
        { p: "Diese Datenschutzerklärung informiert Sie darüber, welche personenbezogenen Daten wir beim Besuch unserer Website, bei Kontaktanfragen und im Rahmen unserer Dienstleistungen verarbeiten, zu welchen Zwecken dies geschieht und welche Rechte Ihnen zustehen." },
        { p: "Unsere Dienstleistungen richten sich insbesondere an Personen, die sich über Deutschkurse, eine Berufsausbildung (Ausbildung), qualifizierte Beschäftigung oder berufliche Perspektiven in Deutschland informieren und begleiten lassen möchten." },
      ] as Block[],
    },
    {
      num: "3",
      title: "Welche personenbezogenen Daten verarbeiten wir?",
      blocks: [
        { h4: "3.1. Beim Besuch unserer Website" },
        { p: "Beim Aufruf unserer Website können technisch erforderliche Daten verarbeitet werden, insbesondere:" },
        {
          ul: [
            "IP-Adresse;",
            "Datum und Uhrzeit des Zugriffs;",
            "aufgerufene Seiten und Dateien;",
            "Browsertyp und Browserversion;",
            "verwendetes Betriebssystem;",
            "Referrer-URL, sofern übermittelt;",
            "technische Status- und Verbindungsdaten.",
          ],
        },
        { p: "Die Verarbeitung kann erforderlich sein, um die Website technisch bereitzustellen, ihre Stabilität und Sicherheit zu gewährleisten und Missbrauch zu verhindern." },
        { p: "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO, soweit anwendbar. Unser berechtigtes Interesse liegt in der sicheren und funktionsfähigen Bereitstellung unserer Website." },

        { h4: "3.2. Bei Kontaktanfragen" },
        { p: "Wenn Sie uns per E-Mail, Telefon oder über ein Kontaktformular kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten. Dazu können insbesondere gehören:" },
        {
          ul: [
            "Vor- und Nachname;",
            "E-Mail-Adresse;",
            "Telefonnummer;",
            "Wohnort oder Aufenthaltsland;",
            "Inhalt Ihrer Nachricht;",
            "weitere Angaben, die Sie freiwillig übermitteln.",
          ],
        },
        { p: "Wir verwenden diese Daten, um Ihre Anfrage zu bearbeiten und gegebenenfalls weitere Schritte mit Ihnen abzustimmen." },
        { p: "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO, sofern die Anfrage der Durchführung vorvertraglicher Maßnahmen dient, andernfalls Art. 6 Abs. 1 lit. f DSGVO, soweit anwendbar." },

        { h4: "3.3. Bei Bewerbungen und beruflicher Beratung" },
        { p: "Wenn Sie unsere Unterstützung bei Ihrem beruflichen Vorhaben in Deutschland in Anspruch nehmen, können wir folgende Daten verarbeiten:" },
        {
          ul: [
            "Lebenslauf und beruflicher Werdegang;",
            "Schul- und Berufsabschlüsse;",
            "Zeugnisse und Notenübersichten;",
            "Berufserfahrung und Praktika;",
            "Sprachkenntnisse und Sprachzertifikate;",
            "gewünschter Ausbildungsberuf oder angestrebte Beschäftigung;",
            "Angaben zu Qualifikationen und beruflichen Zielen;",
            "Informationen zum Stand Ihrer Bewerbung;",
            "weitere Unterlagen, soweit sie für die konkrete Beratung oder Bewerbung erforderlich sind.",
          ],
        },
        { p: "Wir verarbeiten diese Daten, um Ihr Profil einzuschätzen, geeignete Möglichkeiten zu identifizieren, Ihre Bewerbung vorzubereiten und Sie im Rahmen unserer vereinbarten Leistungen zu begleiten." },
        { p: "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO, soweit die Verarbeitung zur Durchführung vorvertraglicher Maßnahmen oder eines Vertrags erforderlich ist. In anderen Fällen kommt eine weitere einschlägige Rechtsgrundlage in Betracht, die im jeweiligen Fall zu bestimmen ist." },
        { p: "Bitte übermitteln Sie nur die Unterlagen und Informationen, die für Ihre Anfrage oder Bewerbung erforderlich sind." },

        { h4: "3.4. Besondere Kategorien personenbezogener Daten" },
        { p: "Bitte übermitteln Sie uns keine Gesundheitsdaten oder sonstigen besonderen Kategorien personenbezogener Daten im Sinne von Art. 9 DSGVO, sofern dies nicht ausdrücklich erforderlich und rechtlich zulässig ist." },
        { p: "Sollte eine solche Verarbeitung ausnahmsweise erforderlich sein, erfolgt sie nur bei Vorliegen einer einschlägigen Rechtsgrundlage und gegebenenfalls einer zusätzlichen Voraussetzung nach Art. 9 DSGVO." },

        { h4: "3.5. Geschäftliche Kontakte" },
        { p: "Bei der Zusammenarbeit mit Arbeitgebern, Bildungseinrichtungen und sonstigen Partnern können wir geschäftliche Kontaktdaten verarbeiten, beispielsweise Namen, geschäftliche E-Mail-Adressen, Telefonnummern und Informationen zur Zusammenarbeit." },
        { p: "Die Verarbeitung erfolgt zur Anbahnung, Durchführung und Verwaltung der jeweiligen Geschäftsbeziehung." },
      ] as Block[],
    },
    {
      num: "4",
      title: "Zwecke und Rechtsgrundlagen der Verarbeitung",
      blocks: [
        { p: "Wir verarbeiten personenbezogene Daten insbesondere zu folgenden Zwecken:" },
        {
          ul: [
            "Bereitstellung und technische Absicherung unserer Website;",
            "Bearbeitung von Kontaktanfragen;",
            "Information über unsere Dienstleistungen;",
            "Beratung zu beruflichen Möglichkeiten in Deutschland;",
            "Prüfung und Vorbereitung von Bewerbungsunterlagen;",
            "Organisation von Gesprächen und Beratungsterminen;",
            "Begleitung von Bewerbungs- und Vermittlungsprozessen;",
            "Kommunikation mit Arbeitgebern und Bildungseinrichtungen;",
            "Erfüllung gesetzlicher Pflichten;",
            "Geltendmachung, Ausübung oder Verteidigung rechtlicher Ansprüche.",
          ],
        },
        { p: "Je nach Verarbeitung stützen wir uns auf Art. 6 Abs. 1 lit. a, b, c oder f DSGVO, soweit die DSGVO anwendbar ist." },
        { p: "Wenn wir eine Verarbeitung auf Ihre Einwilligung stützen, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen." },
      ] as Block[],
    },
    {
      num: "5",
      title: "Weitergabe personenbezogener Daten",
      blocks: [
        { p: "Wir geben personenbezogene Daten nur weiter, wenn dies für den jeweiligen Zweck erforderlich und rechtlich zulässig ist." },
        { p: "Mögliche Empfänger sind:" },
        {
          ul: [
            "hierzu befugte Mitarbeitende von Karriere Fähre;",
            "Arbeitgeber und Personalverantwortliche, bei denen Sie sich bewerben möchten;",
            "Berufsbildungs- und Ausbildungseinrichtungen;",
            "technische Dienstleister, beispielsweise für Website-Hosting, E-Mail oder Formulare;",
            "sonstige Dienstleister, die uns bei der Erbringung unserer Leistungen unterstützen;",
            "zuständige Behörden, sofern eine gesetzliche Verpflichtung besteht.",
          ],
        },
        { p: "Bewerbungsunterlagen werden an Arbeitgeber oder Bildungseinrichtungen nur weitergegeben, wenn dies für den jeweiligen Bewerbungsprozess vorgesehen und rechtlich zulässig ist. Eine erforderliche Einwilligung holen wir vor der Weitergabe ein." },
        { p: "Wir verkaufen keine personenbezogenen Daten." },
      ] as Block[],
    },
    {
      num: "6",
      title: "Übermittlung in Drittländer",
      blocks: [
        { p: "Karriere Fähre hat seinen Sitz in Kamerun und unterstützt berufliche Vorhaben mit Bezug zu Deutschland. Daher kann es erforderlich sein, personenbezogene Daten zwischen Kamerun, Deutschland und weiteren Ländern zu verarbeiten oder zu übermitteln." },
        { p: "Soweit die DSGVO auf eine Übermittlung Anwendung findet, die ein Drittland betrifft, beachten wir die Voraussetzungen der Art. 44 ff. DSGVO. Dazu gehört gegebenenfalls die Prüfung geeigneter Garantien, beispielsweise Standardvertragsklauseln, sowie der sonstigen gesetzlichen Voraussetzungen." },
        { p: "Welche Länder und Dienstleister tatsächlich betroffen sind, hängt von unserer technischen Infrastruktur und den jeweiligen Empfängern ab." },
      ] as Block[],
    },
    {
      num: "7",
      title: "Speicherdauer",
      blocks: [
        { p: "Wir speichern personenbezogene Daten nur so lange, wie es für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen." },
        { p: "Dabei unterscheiden wir insbesondere zwischen:" },
        {
          ul: [
            "Daten aus allgemeinen Kontaktanfragen;",
            "Daten von Interessenten ohne anschließenden Bewerbungsprozess;",
            "Unterlagen zu laufenden Bewerbungen und Beratungsmandaten;",
            "Vertrags- und Abrechnungsunterlagen;",
            "technischen Protokolldaten.",
          ],
        },
        { p: "Nach Wegfall des jeweiligen Zwecks werden die Daten gelöscht oder, sofern eine Löschung nicht möglich oder nicht zulässig ist, entsprechend den gesetzlichen Anforderungen eingeschränkt." },
        { p: "Die konkreten Speicherfristen werden anhand der jeweiligen Datenkategorie, des Bearbeitungsstands und der anwendbaren gesetzlichen Pflichten festgelegt." },
      ] as Block[],
    },
    {
      num: "8",
      title: "Cookies und vergleichbare Technologien",
      blocks: [
        { p: "Unsere Website kann Cookies und vergleichbare Technologien verwenden." },
        { p: "Technisch notwendige Technologien können eingesetzt werden, soweit sie erforderlich sind, um einen von Ihnen ausdrücklich gewünschten digitalen Dienst bereitzustellen oder eine Nachricht über ein öffentliches Telekommunikationsnetz zu übertragen." },
        { p: "Für nicht notwendige Cookies und Zugriffe auf Informationen in Ihrem Endgerät holen wir eine Einwilligung ein, sofern diese nach § 25 TDDDG erforderlich ist. Die datenschutzrechtlichen Anforderungen der DSGVO bleiben unberührt." },
        { p: "Sie können Ihre Einwilligung über die Cookie-Einstellungen verwalten und mit Wirkung für die Zukunft widerrufen." },
        { p: "Die tatsächlich eingesetzten Cookies und Dienste sowie deren Zwecke und Speicherdauern müssen in der endgültigen Website-Version konkret aufgeführt werden." },
      ] as Block[],
    },
    {
      num: "9",
      title: "Empfänger und externe Dienste",
      blocks: [
        { p: "Zur Bereitstellung unserer Website und zur Kommunikation können externe Dienstleister eingesetzt werden, beispielsweise Hosting-, E-Mail- oder Formularanbieter." },
        { p: "Soweit solche Dienstleister personenbezogene Daten in unserem Auftrag verarbeiten, schließen wir – sofern gesetzlich erforderlich – Vereinbarungen zur Auftragsverarbeitung nach Art. 28 DSGVO ab." },
        { p: "Die konkreten Dienstleister werden entsprechend den tatsächlich eingesetzten Systemen ergänzt." },
      ] as Block[],
    },
    {
      num: "10",
      title: "Datensicherheit",
      blocks: [
        { p: "Wir treffen angemessene technische und organisatorische Maßnahmen, um personenbezogene Daten vor Verlust, Manipulation, unberechtigtem Zugriff und unbefugter Offenlegung zu schützen." },
        { p: "Hierzu können insbesondere gehören:" },
        {
          ul: [
            "beschränkte Zugriffsrechte;",
            "sichere Konten und Authentifizierungsverfahren;",
            "geeignete Übertragungs- und Speicherverfahren;",
            "regelmäßige Überprüfung der Zugriffsberechtigungen;",
            "organisatorische Vorgaben zum Umgang mit Bewerbungsunterlagen.",
          ],
        },
        { p: "Die Maßnahmen werden entsprechend der Art der verarbeiteten Daten und dem jeweiligen Risiko festgelegt." },
      ] as Block[],
    },
    {
      num: "11",
      title: "Ihre Rechte",
      blocks: [
        { p: "Soweit die DSGVO auf die Verarbeitung Ihrer personenbezogenen Daten Anwendung findet, stehen Ihnen insbesondere folgende Rechte zu:" },
        { h4: "Auskunft (Art. 15 DSGVO)" },
        { p: "Sie können Auskunft darüber verlangen, ob wir personenbezogene Daten über Sie verarbeiten und welche Daten dies betrifft." },
        { h4: "Berichtigung (Art. 16 DSGVO)" },
        { p: "Sie können die Berichtigung unrichtiger oder die Vervollständigung unvollständiger Daten verlangen." },
        { h4: "Löschung (Art. 17 DSGVO)" },
        { p: "Sie können unter den gesetzlichen Voraussetzungen die Löschung Ihrer personenbezogenen Daten verlangen." },
        { h4: "Einschränkung der Verarbeitung (Art. 18 DSGVO)" },
        { p: "Sie können unter bestimmten Voraussetzungen verlangen, dass die Verarbeitung eingeschränkt wird." },
        { h4: "Datenübertragbarkeit (Art. 20 DSGVO)" },
        { p: "Sie können unter den gesetzlichen Voraussetzungen bestimmte Daten in einem strukturierten, gängigen und maschinenlesbaren Format erhalten oder deren Übermittlung an einen anderen Verantwortlichen verlangen." },
        { h4: "Widerspruch (Art. 21 DSGVO)" },
        { p: "Sie können aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen eine Verarbeitung Widerspruch einlegen, sofern diese auf Art. 6 Abs. 1 lit. e oder f DSGVO beruht. Bei Direktwerbung können Sie unter den gesetzlichen Voraussetzungen jederzeit Widerspruch einlegen." },
        { h4: "Widerruf einer Einwilligung" },
        { p: "Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen." },
        { p: "Zur Ausübung Ihrer Rechte kontaktieren Sie uns bitte unter:" },
        { lines: ["E-Mail: Datenschutz@karrierefaehre.com"] },
        { p: "Sie haben außerdem das Recht, sich bei einer zuständigen Datenschutzaufsichtsbehörde zu beschweren, sofern die gesetzlichen Voraussetzungen erfüllt sind." },
      ] as Block[],
    },
    {
      num: "12",
      title: "Pflicht zur Bereitstellung von Daten",
      blocks: [
        { p: "Die Bereitstellung personenbezogener Daten ist grundsätzlich freiwillig. Bestimmte Angaben können jedoch erforderlich sein, um eine Anfrage zu beantworten, einen Vertrag vorzubereiten oder eine Bewerbung zu bearbeiten." },
        { p: "Wenn erforderliche Angaben fehlen, können wir die betreffende Leistung möglicherweise nicht oder nur eingeschränkt erbringen." },
      ] as Block[],
    },
    {
      num: "13",
      title: "Automatisierte Entscheidungen",
      blocks: [
        { p: "Wir treffen keine ausschließlich auf einer automatisierten Verarbeitung beruhenden Entscheidungen, die Ihnen gegenüber rechtliche Wirkung entfalten oder Sie in ähnlicher Weise erheblich beeinträchtigen, sofern die gesetzlichen Voraussetzungen und erforderlichen Schutzmaßnahmen nicht erfüllt sind." },
        { p: "Sollten wir künftig entsprechende Verfahren einsetzen, werden die betroffenen Personen nach Maßgabe der anwendbaren Datenschutzvorschriften informiert." },
      ] as Block[],
    },
    {
      num: "14",
      title: "Externe Links",
      blocks: [
        { p: "Unsere Website kann Links zu externen Websites und Angeboten enthalten. Für die Verarbeitung personenbezogener Daten durch die Betreiber dieser externen Angebote sind deren jeweilige Datenschutzinformationen maßgeblich." },
      ] as Block[],
    },
    {
      num: "15",
      title: "Änderungen dieser Datenschutzerklärung",
      blocks: [
        { p: "Wir können diese Datenschutzerklärung anpassen, wenn sich unsere Dienstleistungen, die eingesetzten Technologien oder die rechtlichen Anforderungen ändern." },
        { p: "Es gilt die jeweils auf unserer Website veröffentlichte Fassung. Das Datum der letzten Aktualisierung ist am Anfang dieser Erklärung angegeben." },
      ] as Block[],
    },
    {
      num: "16",
      title: "Kontakt zum Datenschutz",
      blocks: [
        { p: "Wenn Sie Fragen zur Verarbeitung Ihrer personenbezogenen Daten haben oder Ihre Rechte geltend machen möchten, kontaktieren Sie uns bitte:" },
        {
          lines: [
            "KARRIERE FÄHRE SARL",
            "Douala, Kamerun",
            "E-Mail: Datenschutz@karrierefaehre.com",
            "Telefon: +237 673 71 98 16 / +237 695 94 78 88",
          ],
        },
      ] as Block[],
    },
  ],
  signature: "Karriere Fähre – Die Fähre zu deinem Ziel.",
};

// French version, rendered on /confidentialite. Faithful translation of the German
// policy (DSGVO -> RGPD); to be reviewed legally. Contact: Datenschutz@karrierefaehre.com.
export const CONFIDENTIALITE = {
  title: "Politique de confidentialité de Karriere Fähre",
  updated: "Dernière mise à jour : 16 octobre 2026",
  sections: [
    {
      num: "1",
      title: "Responsable du traitement",
      blocks: [
        { p: "Le responsable du traitement des données à caractère personnel dans le cadre de ce site web est :" },
        {
          lines: [
            "KARRIERE FÄHRE SARL",
            "Siège : Bonamoussadi, immeuble en face de Super U, 3e étage, Douala, Cameroun",
            "Registre du commerce (RCCM) : CM-DLA-01-2025-B13-00504",
            "E-mail : Datenschutz@karrierefaehre.com",
            "Téléphone : +237 673 71 98 16 / +237 695 94 78 88",
          ],
        },
        { p: "Ci-après, l'entreprise est désignée par « Karriere Fähre », « nous » ou « notre »." },
        { p: "Lorsque la réglementation applicable en matière de protection des données l'exige, les coordonnées d'un délégué à la protection des données ou d'un représentant dans l'Union européenne seront ajoutées ici." },
      ] as Block[],
    },
    {
      num: "2",
      title: "Informations générales sur le traitement des données",
      blocks: [
        { p: "La protection de vos données à caractère personnel nous tient à cœur. Nous traitons les données à caractère personnel de manière confidentielle et exclusivement dans le cadre des dispositions applicables en matière de protection des données, notamment le Règlement général sur la protection des données (RGPD), dans la mesure où celui-ci s'applique au traitement concerné." },
        { p: "La présente politique de confidentialité vous informe des données à caractère personnel que nous traitons lors de la visite de notre site web, lors de demandes de contact et dans le cadre de nos services, des finalités de ce traitement et des droits dont vous disposez." },
        { p: "Nos services s'adressent en particulier aux personnes souhaitant s'informer et être accompagnées au sujet de cours d'allemand, d'une formation professionnelle (Ausbildung), d'un emploi qualifié ou de perspectives professionnelles en Allemagne." },
      ] as Block[],
    },
    {
      num: "3",
      title: "Quelles données à caractère personnel traitons-nous ?",
      blocks: [
        { h4: "3.1. Lors de la visite de notre site web" },
        { p: "Lors de la consultation de notre site web, des données techniquement nécessaires peuvent être traitées, notamment :" },
        {
          ul: [
            "l'adresse IP ;",
            "la date et l'heure de l'accès ;",
            "les pages et fichiers consultés ;",
            "le type et la version du navigateur ;",
            "le système d'exploitation utilisé ;",
            "l'URL de provenance (referrer), si elle est transmise ;",
            "des données techniques de statut et de connexion.",
          ],
        },
        { p: "Le traitement peut être nécessaire pour fournir techniquement le site web, garantir sa stabilité et sa sécurité et prévenir les abus." },
        { p: "Base juridique : art. 6, par. 1, point f) du RGPD, dans la mesure où il est applicable. Notre intérêt légitime réside dans la fourniture sûre et fonctionnelle de notre site web." },

        { h4: "3.2. Lors de demandes de contact" },
        { p: "Lorsque vous nous contactez par e-mail, par téléphone ou via un formulaire de contact, nous traitons les données que vous nous communiquez. Il peut notamment s'agir de :" },
        {
          ul: [
            "nom et prénom ;",
            "adresse e-mail ;",
            "numéro de téléphone ;",
            "lieu de résidence ou pays de séjour ;",
            "contenu de votre message ;",
            "autres informations que vous transmettez volontairement.",
          ],
        },
        { p: "Nous utilisons ces données pour traiter votre demande et, le cas échéant, convenir avec vous des étapes suivantes." },
        { p: "Base juridique : art. 6, par. 1, point b) du RGPD lorsque la demande vise l'exécution de mesures précontractuelles, sinon art. 6, par. 1, point f) du RGPD, dans la mesure où il est applicable." },

        { h4: "3.3. Lors de candidatures et d'un accompagnement professionnel" },
        { p: "Lorsque vous faites appel à notre accompagnement pour votre projet professionnel en Allemagne, nous pouvons traiter les données suivantes :" },
        {
          ul: [
            "curriculum vitae et parcours professionnel ;",
            "diplômes scolaires et professionnels ;",
            "attestations et relevés de notes ;",
            "expérience professionnelle et stages ;",
            "connaissances linguistiques et certificats de langue ;",
            "métier d'Ausbildung souhaité ou emploi visé ;",
            "informations sur les qualifications et les objectifs professionnels ;",
            "informations sur l'état d'avancement de votre candidature ;",
            "autres documents, dans la mesure où ils sont nécessaires au conseil ou à la candidature concernés.",
          ],
        },
        { p: "Nous traitons ces données afin d'évaluer votre profil, d'identifier des possibilités appropriées, de préparer votre candidature et de vous accompagner dans le cadre des prestations convenues." },
        { p: "Base juridique : art. 6, par. 1, point b) du RGPD, dans la mesure où le traitement est nécessaire à l'exécution de mesures précontractuelles ou d'un contrat. Dans d'autres cas, une autre base juridique pertinente peut s'appliquer, à déterminer au cas par cas." },
        { p: "Veuillez ne transmettre que les documents et informations nécessaires à votre demande ou à votre candidature." },

        { h4: "3.4. Catégories particulières de données à caractère personnel" },
        { p: "Veuillez ne pas nous transmettre de données de santé ni d'autres catégories particulières de données à caractère personnel au sens de l'art. 9 du RGPD, sauf si cela est expressément nécessaire et juridiquement autorisé." },
        { p: "Si un tel traitement devait exceptionnellement s'avérer nécessaire, il n'aura lieu qu'en présence d'une base juridique pertinente et, le cas échéant, d'une condition supplémentaire au titre de l'art. 9 du RGPD." },

        { h4: "3.5. Contacts professionnels" },
        { p: "Dans le cadre de la collaboration avec des employeurs, des établissements de formation et d'autres partenaires, nous pouvons traiter des coordonnées professionnelles, par exemple des noms, des adresses e-mail professionnelles, des numéros de téléphone et des informations relatives à la collaboration." },
        { p: "Le traitement a lieu en vue de l'établissement, de l'exécution et de la gestion de la relation commerciale concernée." },
      ] as Block[],
    },
    {
      num: "4",
      title: "Finalités et bases juridiques du traitement",
      blocks: [
        { p: "Nous traitons les données à caractère personnel notamment aux finalités suivantes :" },
        {
          ul: [
            "fourniture et sécurisation technique de notre site web ;",
            "traitement des demandes de contact ;",
            "information sur nos services ;",
            "conseil sur les possibilités professionnelles en Allemagne ;",
            "examen et préparation des dossiers de candidature ;",
            "organisation d'entretiens et de rendez-vous de conseil ;",
            "accompagnement des processus de candidature et de placement ;",
            "communication avec les employeurs et les établissements de formation ;",
            "respect des obligations légales ;",
            "constatation, exercice ou défense de droits en justice.",
          ],
        },
        { p: "Selon le traitement, nous nous appuyons sur l'art. 6, par. 1, points a), b), c) ou f) du RGPD, dans la mesure où le RGPD est applicable." },
        { p: "Lorsque nous fondons un traitement sur votre consentement, vous pouvez le retirer à tout moment avec effet pour l'avenir." },
      ] as Block[],
    },
    {
      num: "5",
      title: "Communication des données à caractère personnel",
      blocks: [
        { p: "Nous ne communiquons des données à caractère personnel que lorsque cela est nécessaire à la finalité concernée et juridiquement autorisé." },
        { p: "Les destinataires possibles sont :" },
        {
          ul: [
            "les collaborateurs de Karriere Fähre habilités à cet effet ;",
            "les employeurs et responsables du personnel auprès desquels vous souhaitez candidater ;",
            "les établissements de formation professionnelle et d'Ausbildung ;",
            "les prestataires techniques, par exemple pour l'hébergement du site web, l'e-mail ou les formulaires ;",
            "d'autres prestataires qui nous assistent dans la fourniture de nos services ;",
            "les autorités compétentes, en cas d'obligation légale.",
          ],
        },
        { p: "Les dossiers de candidature ne sont transmis à des employeurs ou à des établissements de formation que lorsque cela est prévu pour le processus de candidature concerné et juridiquement autorisé. Lorsqu'un consentement est requis, nous le recueillons avant la transmission." },
        { p: "Nous ne vendons pas de données à caractère personnel." },
      ] as Block[],
    },
    {
      num: "6",
      title: "Transfert vers des pays tiers",
      blocks: [
        { p: "Karriere Fähre a son siège au Cameroun et accompagne des projets professionnels en lien avec l'Allemagne. Il peut donc être nécessaire de traiter ou de transférer des données à caractère personnel entre le Cameroun, l'Allemagne et d'autres pays." },
        { p: "Dans la mesure où le RGPD s'applique à un transfert concernant un pays tiers, nous respectons les conditions des art. 44 et suivants du RGPD. Cela inclut, le cas échéant, l'examen de garanties appropriées, par exemple des clauses contractuelles types, ainsi que des autres conditions légales." },
        { p: "Les pays et prestataires effectivement concernés dépendent de notre infrastructure technique et des destinataires concernés." },
      ] as Block[],
    },
    {
      num: "7",
      title: "Durée de conservation",
      blocks: [
        { p: "Nous ne conservons les données à caractère personnel que le temps nécessaire aux finalités concernées ou tant que des obligations légales de conservation existent." },
        { p: "Nous distinguons notamment :" },
        {
          ul: [
            "les données issues de demandes de contact générales ;",
            "les données de personnes intéressées sans processus de candidature ultérieur ;",
            "les documents relatifs aux candidatures et mandats de conseil en cours ;",
            "les documents contractuels et de facturation ;",
            "les données techniques de journalisation (logs).",
          ],
        },
        { p: "Une fois la finalité concernée disparue, les données sont supprimées ou, lorsqu'une suppression n'est pas possible ou autorisée, limitées conformément aux exigences légales." },
        { p: "Les durées de conservation concrètes sont déterminées en fonction de la catégorie de données concernée, de l'état d'avancement du traitement et des obligations légales applicables." },
      ] as Block[],
    },
    {
      num: "8",
      title: "Cookies et technologies comparables",
      blocks: [
        { p: "Notre site web peut utiliser des cookies et des technologies comparables." },
        { p: "Des technologies techniquement nécessaires peuvent être utilisées lorsqu'elles sont indispensables pour fournir un service numérique que vous avez expressément demandé ou pour transmettre un message sur un réseau de communication public." },
        { p: "Pour les cookies non nécessaires et les accès à des informations présentes sur votre terminal, nous recueillons un consentement lorsque celui-ci est requis au titre du § 25 de la loi allemande TDDDG. Les exigences du RGPD en matière de protection des données demeurent applicables." },
        { p: "Vous pouvez gérer votre consentement via les paramètres de cookies et le retirer avec effet pour l'avenir." },
        { p: "Les cookies et services effectivement utilisés, ainsi que leurs finalités et durées de conservation, devront être précisément indiqués dans la version définitive du site web." },
      ] as Block[],
    },
    {
      num: "9",
      title: "Destinataires et services externes",
      blocks: [
        { p: "Pour la mise à disposition de notre site web et la communication, des prestataires externes peuvent être utilisés, par exemple des fournisseurs d'hébergement, d'e-mail ou de formulaires." },
        { p: "Dans la mesure où de tels prestataires traitent des données à caractère personnel pour notre compte, nous concluons – lorsque la loi l'exige – des accords de sous-traitance au titre de l'art. 28 du RGPD." },
        { p: "Les prestataires concrets seront complétés en fonction des systèmes effectivement utilisés." },
      ] as Block[],
    },
    {
      num: "10",
      title: "Sécurité des données",
      blocks: [
        { p: "Nous prenons des mesures techniques et organisationnelles appropriées afin de protéger les données à caractère personnel contre la perte, la manipulation, l'accès non autorisé et la divulgation non autorisée." },
        { p: "Cela peut notamment inclure :" },
        {
          ul: [
            "des droits d'accès restreints ;",
            "des comptes sécurisés et des procédures d'authentification ;",
            "des procédures appropriées de transmission et de conservation ;",
            "une vérification régulière des autorisations d'accès ;",
            "des règles organisationnelles relatives au traitement des dossiers de candidature.",
          ],
        },
        { p: "Les mesures sont définies en fonction de la nature des données traitées et du risque concerné." },
      ] as Block[],
    },
    {
      num: "11",
      title: "Vos droits",
      blocks: [
        { p: "Dans la mesure où le RGPD s'applique au traitement de vos données à caractère personnel, vous disposez notamment des droits suivants :" },
        { h4: "Droit d'accès (art. 15 du RGPD)" },
        { p: "Vous pouvez demander à savoir si nous traitons des données à caractère personnel vous concernant et quelles sont ces données." },
        { h4: "Droit de rectification (art. 16 du RGPD)" },
        { p: "Vous pouvez demander la rectification de données inexactes ou le complètement de données incomplètes." },
        { h4: "Droit à l'effacement (art. 17 du RGPD)" },
        { p: "Vous pouvez, dans les conditions légales, demander l'effacement de vos données à caractère personnel." },
        { h4: "Limitation du traitement (art. 18 du RGPD)" },
        { p: "Vous pouvez, sous certaines conditions, demander que le traitement soit limité." },
        { h4: "Portabilité des données (art. 20 du RGPD)" },
        { p: "Vous pouvez, dans les conditions légales, recevoir certaines données dans un format structuré, couramment utilisé et lisible par machine, ou en demander la transmission à un autre responsable du traitement." },
        { h4: "Droit d'opposition (art. 21 du RGPD)" },
        { p: "Vous pouvez, pour des raisons tenant à votre situation particulière, vous opposer à un traitement fondé sur l'art. 6, par. 1, point e) ou f) du RGPD. En cas de prospection commerciale, vous pouvez vous y opposer à tout moment dans les conditions légales." },
        { h4: "Retrait d'un consentement" },
        { p: "Vous pouvez retirer à tout moment un consentement donné, avec effet pour l'avenir." },
        { p: "Pour exercer vos droits, veuillez nous contacter à :" },
        { lines: ["E-mail : Datenschutz@karrierefaehre.com"] },
        { p: "Vous avez en outre le droit d'introduire une réclamation auprès d'une autorité de contrôle compétente en matière de protection des données, lorsque les conditions légales sont réunies." },
      ] as Block[],
    },
    {
      num: "12",
      title: "Obligation de fournir des données",
      blocks: [
        { p: "La fourniture de données à caractère personnel est en principe facultative. Certaines informations peuvent toutefois être nécessaires pour répondre à une demande, préparer un contrat ou traiter une candidature." },
        { p: "Si des informations nécessaires font défaut, il se peut que nous ne puissions pas fournir la prestation concernée, ou seulement de manière limitée." },
      ] as Block[],
    },
    {
      num: "13",
      title: "Décisions automatisées",
      blocks: [
        { p: "Nous ne prenons pas de décisions fondées exclusivement sur un traitement automatisé produisant des effets juridiques vous concernant ou vous affectant de manière significative de façon similaire, lorsque les conditions légales et les mesures de protection requises ne sont pas réunies." },
        { p: "Si nous devions à l'avenir recourir à de tels procédés, les personnes concernées en seront informées conformément aux dispositions applicables en matière de protection des données." },
      ] as Block[],
    },
    {
      num: "14",
      title: "Liens externes",
      blocks: [
        { p: "Notre site web peut contenir des liens vers des sites web et offres externes. Pour le traitement des données à caractère personnel par les exploitants de ces offres externes, ce sont leurs informations respectives en matière de protection des données qui font foi." },
      ] as Block[],
    },
    {
      num: "15",
      title: "Modifications de la présente politique de confidentialité",
      blocks: [
        { p: "Nous pouvons adapter la présente politique de confidentialité lorsque nos services, les technologies utilisées ou les exigences légales évoluent." },
        { p: "La version publiée à un moment donné sur notre site web fait foi. La date de la dernière mise à jour est indiquée au début de la présente déclaration." },
      ] as Block[],
    },
    {
      num: "16",
      title: "Contact en matière de protection des données",
      blocks: [
        { p: "Si vous avez des questions concernant le traitement de vos données à caractère personnel ou si vous souhaitez exercer vos droits, veuillez nous contacter :" },
        {
          lines: [
            "KARRIERE FÄHRE SARL",
            "Douala, Cameroun",
            "E-mail : Datenschutz@karrierefaehre.com",
            "Téléphone : +237 673 71 98 16 / +237 695 94 78 88",
          ],
        },
      ] as Block[],
    },
  ],
  signature: "Karriere Fähre – Die Fähre zu deinem Ziel.",
};
