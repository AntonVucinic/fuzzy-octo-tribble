# fuzzy-octo-tribble

Izazov:
Državna tijela objavljuju važne podatke na službenim portalima, poput onih dostupnih na Općem poreznom zakonu. Međutim, ti podaci često su nestrukturirani i teško pretraživi, što otežava njihovu primjenu.

Hackathon izazov je osmisliti način kako ove nestrukturirane informacije pretvoriti u strukturirani, pregledni format, inspiriran primjerima poput Fonoa: e-invoicing and digital reporting za Kanadu.

Cilj:
Razviti prototip rješenja koje olakšava pristup i korištenje javno dostupnih podataka putem strukturiranja i jasne prezentacije.
Input example  https://www.zakon.hr/z/100/Opći-porezni-zakon
Desired output https://www.fonoa.com/countries/canada/e-invoicing-and-digital-reporting


GPT output za izazov: 

1. Identifikacija i Analiza Podataka
Pregled i razumijevanje izvora podataka: Prvo, potrebno je analizirati postojeće izvore podataka (npr. tekstualni dokumenti, PDF-ovi, web stranice s tekstualnim informacijama) kako bi se identificirali ključni dijelovi koji bi trebali biti strukturirani.
Razumijevanje zakonskih okvira i pravila: Razumijevanje strukture Općeg poreznog zakona i drugih relevantnih zakonskih dokumenata bitno je kako bi se identificirale varijante podataka koji se trebaju obraditi (npr. različite vrste poreza, stope, rokovi).
2. Prepoznavanje Nestrukturiranih Podataka
Prikupljanje podataka: Povezivanje sa službenim portalima i automatsko preuzimanje dokumenata u različitim formatima.
Tehnike obrade prirodnog jezika (NLP): Korištenje algoritama za obradu prirodnog jezika kako bi se analizirali tekstualni podaci i prepoznali ključni podaci (kao što su porezne stope, uvjeti plačanja, datum rokova i drugi važni podaci).
Prepoznavanje entiteta (Named Entity Recognition - NER): Primjena NER modela za prepoznavanje specifičnih entiteta poput imena institucija, brojeva zakona, datuma, iznosa i sličnih podataka.
3. Transformacija u Strukturirani Format
Kreiranje modela podataka: Razviti model podataka (npr. XML, JSON, CSV) u kojem će podaci biti pohranjeni u strukturiranom formatu. Ovaj model treba biti fleksibilan za različite tipove podataka koji se mogu pojaviti u budućnosti.
Razvoj API-ja za pristup podacima: Razviti API koji omogućava pristup strukturiranim podacima. API bi omogućio korisnicima, tvrtkama i programerima da integriraju podatke u svoje sustave ili aplikacije.
Automatizacija unosa novih podataka: Korištenje algoritama za prepoznavanje novih verzija zakona ili ažuriranja podataka i automatsko unos u strukturirani format.
4. Izrada Korisničkog Sučelja
Prikaz podataka na web sučelju: Razviti intuitivno korisničko sučelje koje omogućava pregled i pretraživanje strukturiranih podataka na temelju različitih filtera (npr. tip poreza, datum, porezna stopa).
Pretraga i filtriranje podataka: Implementirati napredne mogućnosti pretrage i filtriranja za jednostavan pristup specifičnim podacima, uz mogućnost izvoza u razne formate (CSV, Excel).
5. Sigurnost i Privatnost
Sigurnost podataka: Osigurati da svi podaci budu pohranjeni u skladu s najboljim praksama zaštite podataka i sigurnosti, osobito kada je riječ o osjetljivim informacijama.
Pridržavanje zakonskih okvira: Provoditi provjere usklađenosti s zakonima o zaštiti podataka (npr. GDPR) i drugim relevantnim zakonodavstvima.
6. Testiranje i Validacija
Testiranje točnosti obrade podataka: Provoditi testove kako bi se osiguralo da su podaci točno ekstraktirani i strukturirani. Ovo uključuje testiranje na različitim tipovima dokumenata i provjeru svih izvora podataka.
Feedback od korisnika: Provedba korisničkog testiranja s ciljanim korisnicima (npr. tvrtkama, poreznim savjetnicima) kako bi se osigurala upotrebljivost i funkcionalnost rješenja.
7. Primjena u Realnom Svijetu
Pristup e-invoicingu i digitalnom izvještavanju: Rješenje može biti povezano s platformama za e-fakturiranje i digitalno izvještavanje, kao što je Fonoa, kako bi se omogućila automatizacija izvještavanja prema poreznim tijelima, smanjujući administrativnu opterećenost i povećavajući točnost podataka.
Usklađivanje sa zakonodavstvom drugih zemalja: Ako se rješenje uspješno implementira, može se prilagoditi i za primjenu u drugim državama, poput Kanade, stvaranjem globalne platforme za strukturiranje zakonskih podataka.