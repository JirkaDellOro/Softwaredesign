Hallo zusammen,

anbei findet Ihr die E-Mail von einem guten Freund von euch, der eure Hilfe braucht bei einem Projekt, was ein Freund und er zusammen verfolgen.

Als Grundlage dient das Klassendiagramm von letzter Übung:

Bild:
![Assoziation](../../L04_CleanCode/tasks/img/classdiagramm_solution_chapter03.png)

DrawIO-Datei:
[DrawIO-Datei](../../L04_CleanCode/tasks/img/classdiagramm_solution_chapter03.drawio)

Die Klassen User, RegisteredUser und Uploader sollen nun nicht mehr voneinander erben, sondern durch eine UserFactory erzeugt.
Dazu dient euch folgender Link als Unterstützung:
[Factory Implementierung](https://www.tutorialspoint.com/design_pattern/factory_pattern.htm)

Bitte entsprechend das Klassendiagramm erweitern und den Programmcode für die Klassen erstellen, so dass diese von der UserFactory erzeugt werden.

VG Chris

________________________________________________________________

Hey,

danke für die tolle Arbeit, die du bereits geleistet hast.
Der SourceCode sieht schon sehr gut aus.

Allerdings ist das mit den Usern und der Vererbung der Werte irgendwie nicht so schön gelöst.

Zukünftig wird es so sein, dass der User bereits eingeloggt ist in der Oberfläche und über Cookies dann der Usertyp bestimmt werden kann.

Außerdem würden wir die drei Usertypen User, Uploader und den RegisteredUser gerne mehr voneinander trennen.
Alle können zwar Videos anschauen, aber die anderen Funktionen sollen mehr voneinander getrennt werden.
Für die Funktion PlayVideo() würde sich ja die Benutzung eines Interfaces anbieten, welches sicherstellt, dass die Funktion überall implementiert ist.

Ich hab in einer Vorlesung mal was vom Factory Design Pattern gehört, was sich für den Fall anbieten könnte.

Könntest du das bitte mal beispielhaft mit einer UserFactory, welche die Objekte für die einzelnen Usertypen erzeugt, darstellen im aktuellen Klassendiagramm und den Programmcode dafür schreiben?

Danke schon mal im Voraus für deine Hilfe.

Viele Grüße 
Steve Hurley und Chad Chen

PS: Ich habe hier diesen Link dazu gefunden, vielleicht hilft der ja: https://www.tutorialspoint.com/design_pattern/factory_pattern.htm