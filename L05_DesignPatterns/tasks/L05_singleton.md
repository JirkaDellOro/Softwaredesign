Hallo zusammen,

anbei findet Ihr die E-Mail von einem guten Freund von euch, der eure Hilfe braucht bei einem Projekt, was ein Freund und er zusammen verfolgen.

Als Grundlage dient das Klassendiagramm von letzter Übung:

Bild:
![Assoziation](../../L04_CleanCode/tasks/img/classdiagramm_solution_chapter03.png)

DrawIO-Datei:
[DrawIO-Datei](../../L04_CleanCode/tasks/img/classdiagramm_solution_chapter03.drawio)

Es soll jetzt zusätzlich noch ein VideoPlayer mit eingebaut werden, der VideoPlayer hat lediglich eine Instanz. Das bedeutet der VideoPlayer existiert ein einziges Mal und in diesem werden dann die Videos abgespielt mit PlayVideo().
Hierbei wird euch das SingletonPattern helfen:
[SingletonPattern](https://www.tutorialspoint.com/design_pattern/singleton_pattern.htm)

Bitte entsprechend das Klassendiagramm erweitern und den Programmcode für die Klassen erstellen, so dass das Singleton Pattern enthalten ist.

VG Chris

________________________________________________________________

Hey,

danke für die tolle Arbeit, die du bereits geleistet hast.
Der SourceCode sieht schon sehr gut aus.

Wir haben bei der ganzen Plattform natürlich eins der wichtigsten Elemente vergessen und zwar den VideoPlayer ansich, welcher dann die Videos abspielt. Dieser VideoPlayer soll lediglich einmal existieren und in diesem werden dann die Videos abgespielt mit PlayVideo().

Könntest du das bitte mal beispielhaft darstellen im aktuellen Klassendiagramm und den Programmcode dafür schreiben?

Danke schon mal im Voraus für deine Hilfe.

Viele Grüße 
Steve Hurley und Chad Chen

PS: Ich habe hier diesen Link dazu gefunden, vielleicht hilft der ja: https://www.tutorialspoint.com/design_pattern/singleton_pattern.htm