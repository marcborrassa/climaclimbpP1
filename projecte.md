# ClimaClimb

## Introducció

La present pàgina web s'ha desenvolupat en el marc de l'assignautra *PRODUCCIÓ I DISSENY CARTOGRÀFIC. EINES WEB*
del grau de Geografia, Anàlisi territorial i Sostenbilitat impartit a 
la Universitat Rovira i Virgili.

Aquest treball és la contiuitat de l'assignatura de projecte 5, en el que es desenvolupava la creació d'un procés
validat per la creació d'un índex de valoració climàtica per l'escalada esportiva. Si segueixes llegint s'exposen els objectius i part de la
metodologia utilitzada per fer aquesta pàgina web.

El contingut de la pàgina web prové 100% del projecte realitzat en l'assignatura de projete 5.

En el projecte final s'hi inclouen els continguts que s'han creat per dur a terme la pràctica 1 i 2, en els que es 
reutilitzen tant la pàgina web, el contingut i els respectius estils i les 2 funcions de JS, com la integració de l'API.

S'hi afegeixen els continguts que s'han treballat en la darrera part de l'assignatura.

## Objectius
Els objectius que es plantejen en aquest projecte és formalitzar la part de comunicació del servei climàtic en una fase 
inical.

A banda dels objectius que planteja l'assignatura, el servei climàtic ha de donar resposta a les condicions climàtiques
que hi pugui haber en un lloc determinat i unes condicions determinades, per tant, 
aquesta pàgina web és l'inici del que podria arribar a ser el servei climàtic.

##Què podem trobar a la pàgina?

- La pàgina compta amb un visor de le zones d'escalada i els sectors.
- Compta també amb el que podria ser un servei colaboratiu, on els usuaris podrien comunicar noves zones o sectors.
- Un formulari de contacte on els usuaris poden fer-nos arribar propostes.
- Hi ha incorporada informació climàtica real, tant amb el giny del meteocat per les plujes, com amb les consultes a la
API de AEMET, la qual et dona informació general per cada un dels sectors desenvolupats i proporciona informació de l'estat del cel, provabilitat de pluja,
  provailitat de tempesta, temperatura i ràfegues de vent. És a dir, condicions que cal saber per poder practicar l'esport.
  
- Incorpora un banner, un navegador i un flooter amb enllaç a les XXSS.

##Metodologia emprada

El projecte s'ha dut a terme utilitzant el software següent:
- **IntellIJ**: Un IDE (Entorn de Desenvolupament Integrat) que permet treballar el codi amb control de versions de git, en aquest cas amb una connexió a GitHub.
- **[GitHub](github.io)**: Repositori de git amb servei de hosting, amb control d'accés, interfície gràfica i capacitat per publicar pàgines.
- **[Qgis](https://qgis.org/ca/site/)**: Sistema d'informació geogràfica a partir del qual s'ha generat el visor i mtijançant el plúgin qgis2web s'ha pogut exportar el mapa a un HTML mitjançant la llibreria de JavaScript Leaflet.
- **[Qgis2web](https://plugins.qgis.org/plugins/qgis2web/)**: Plugin de Qgis que permet exportar el mapa generat al SIG a HTML mitjançant, en aquest cas Leaflet.
- **[Llibreria Leaflet](https://leafletjs.com/)**: Llibreria de JavaScript que s'utlita per fer mapes web interactius.

La creació de la pàgina es pot dividir en 3 fases:

    Fase 1
1. Generar el codi HTML
2. Generar el codi CSS
3. Fer la pàgina web responsive 
   

    Fase 2
1. Cerca d'una API compatible amb la temàtica utilitzada
2. Arendre com funciona la API
3. Generar i integrar la API a la pàgina web. En aquest cas s'han provat dos APIs, una del Meteocat i una altre de AEMET.


    Fase 3
1. Generar una cartografia apte per fer un mapa interactiu mitjançant Leaflet utlitzant el Qgis2web.
2. Exportar la cartografia en format HTML, CSS i JavaScript.
3. Integrar el mapa a la pàgina web.


## Conclusions

- L'aprenentage en HTML i CSS ha estat positiu.
- El JavaScript és un llenguatge molt més complex que m'ha resultat difícil d'integrar a la pàgina web. Tot i així reconec el seu gran potencial.
- L'eina utilitzada per exportar el mapa (qgis2wb) ha estat molt útil tot i algunes limitacions i bugs existents. S'hauria de continuar desenvolupant per facilitar aquesta tasca, encara que s'ha d'agrair la feina feta sense ànim de lucre per part dels desenvolupadors.
- Una vegada feta tota la feina encara queden possibles millores. Des d'aquest punt de vista es podria dir que sempre hi ha marge de millora encara que s'hi dediqui molt de temps.
- La facilitat que et dona el plugin qgis2web és verdaderament important, ara bé, dificultaria fer un mapa interactiu automatitzat i amb funcions que permetin actualitzar al mateix moment la informació.
- He complert els objectius que s'em demanava amb satisfacció.

