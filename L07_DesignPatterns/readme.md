# Design Patterns

## Über Design Patterns

Wer eine Weile in der Software-Entwicklung beschäftigt war und viele verschiedene Aufgaben lösen musste,
wird irgendwann feststellen, dass sich bestimmte Aufgabenstellungen in ihren strukturellen Anforderungen 
ähneln und sich daher Lösungsansätze wiederverwenden lassen. Das, obwohl möglicherweise die Inhalte der
Aufgabenstellung ganz unterschiedlich sein können. 

Zum Beispiel kann eine bestimmte Teil-Aufgabe, die im Rahmen einer Finanzbuchhaltungssoftware gelöst wurde,
in ganz ähnlicher Weise bei der Entwicklung eines Computer-Game verwendet werden. Allerdings sind die 
inhaltlichen Aufgaben und die zum Einsatz kommenden Umgebungen häufig doch so unterschiedlich, dass es 
schwer ist, den Lösungsansatz in Form einer Library so weit zu abstrahieren, dass hier im klassischen 
Sinne eine Code-Wiederverwendung zum Einsatz kommt. Oft sind es einfach konzeptionelle Ansätze,
die sehr ähnlich sind. 

Um beim Design von Software zumindest solche Konzepte wiederverwenden zu können, wurden die
***Design Patterns*** (deutsch: Entwurfsmuster) ersonnen. Dabei handelt es sich um eine Reihe von
Implementierungsansätzen für häufig in der Software-Entwicklung vorkommende Aufgabenstellungen.
Design Patterns sind somit ein Ideen-Baukasten von vorgefertigten Lösungsansätzen, aus denen sich
im Software-Design passende Teile auswählen lassen.

### Geschichte

Der Begriff "Design Pattern", wurde durch das von der so genannten "Gang of Four" im Jahre 1994
veröffentlichte
Buch _Design Patterns - Elements of Reusable Object-Oriented Software" geprägt. In diesem Buch
sind die 23 ursprünglichen Design Patterns mit Anwendungsbeispielen beschrieben. 

Zur Gang of Four zählt der Schweizer Erich Gamma, der maßgeblich an der Entwicklung der 
Java-Entwicklungsumbgebung _Eclipse_ beteiligt war und inzwischen für Microsoft von der Schweiz 
aus die Entwicklung von _Visual Studio Code_ unterstützt.

### Kategorisierung 

> #### TODO
> - Lest Euch auf der Wikipedia-Seite zu Entwurfmsustern den Abschnitt zu den "Arten von Entwurfsmustern"
>   durch. 
>   - Wieviele Kategorien gab es ursprünglich?


## Umgang mit Design Patterns

Design Patterns versuchen, ähnlich wie die UML, Dinge, die Software-Designer und -Entwickler
intuitiv lösen, in eine austauschbare und standardisierte Form zu bringen. UML versucht dabei,
die Bildsprache, die Programmierer in Skizzen zu Klassenstrukturen, erzeugten Objekten und 
Programmabläufen verwenden, zu vereinheitlichen. Design Patterns sind bereits vorgefertigte
Strukturen (die sich hervorragend mit UML, aber auch mit Beispiel-Code abbilden lassen), 
die für bestimmte Aufgabenstellungen passen. Im Austausch unter Software-Designern hilft es 
meistens schon, dass man den Dingen einen Namen geben kann. Wichtig im Umgang mit Design
Patterns, wie bei UML, ist es, die Namen und die dahinter stehenden Inhalte gut abrufbar
miteinander verknüpfen zu können. Wie es bei einer Sprache wichtig ist, Vokabeln und deren
Bedeutung möglichst ohne Nachdenken abrufen zu können, hilft es beim Gedankenaustausch unter Software-
Entwicklern nur, wenn alle Beteiligten unter der gleichen Bild- und Wortsprache dasselbe 
verstehen. Das geht aber nur durch häufige und lange Übung.

In dieser Lektion können nicht alle 23 oder noch mehr Design Patterns so intensiv besprochen werden,
dass diese danach in der vorgesehenen Weise angewendet werden können. Dieses Wissen muss man 
sich als Programmierer über einen längeren Zeitraum an Erfahrung aneignen.

Im Folgenden werden daher beispielhaft ein paar einfachere Entwurfsmuster sowohl als 
UML-Diagramm als auch in Form von Code mit jeweils einer Beispiel-Anwendung vorgeführt. 


## Einfache Design Pattern Beispiele

### Singleton

Der Singleton ist das einfachste Design Pattern. Es kommt immer dann zum Einsatz, 
wenn in einem Programm zur Laufzeit maximal nur eine einzige Instanz einer Klasse
erzeugt werden soll. 

#### Beispiel 
Ein Beispiel ist ein ID-Generator, der von allen möglichen Stellen
in der Software angefragt werden kann, um eine systemweit eindeutige ID zu erzeugen. Dazu
muss eine Zustandsinformation hinterlegt werden, die zur Generierung einer neuen ID
benötigt wird (z.B. ein Zähler). Das könnte auch mit globalen Variablen implementiert werden.
Allerdings ist möglicherweise nicht klar, wann der ID-Generator zum ersten Mal von welcher
Stelle aus aufgerufen wird, oder ob er überhaupt jemals benötigt wird. 

#### Das Pattern

> #### TODO
> 
> - Lest Euch den Wikipedia-Artikel zum Singleton Pattern durch
> - Versucht, mit Hilfe des UML-Diagramms eine Beispielimplementierung für o.g. `IdGenerator` zu erzeugen:
>   - Nennt die Klasse, die UML-Diagramm `Singleton` heißt, `IdGenerator`
>   - Verwendet statt der im UML-Diagramm vorgeschlagenen _Methode_ `getInstance()` ein
>     C#-Property namens `Instance`, das nur einen _getter_ und keinen _setter_ besitzt.
>   - Stellt die eigentliche Funktionalität, _neue ID generieren_ in einer Methode namens
>     `int GenerateNewID()` zur Verfügung, die die neue ID als `int`-Wert zurückgibt.
>   - Implementiert die Funktionaliät über ein `int`-Feld der Klasse, das beim Erzeugen der
>     Singleton-Instanz mit einem Startwert initialisiert wird und bei jedem Aufruf
>     von `GenerateNewID` um eins erhöht wird.



### Decorator

Das Decorator Pattern kommt in folgenden Situationen zum Einsatz: Angenommen, es gibt konkrete bestehende Klassen, deren Funktionalität über ein Interface festgeschrieben ist. Verwender von Instanzen dieser Klassen
greifen über das bestehende Interface auf die Funktionalität zu. Nun soll die Möglichkeit erzeugt werden, 
die ursprüngliche Funktionalität der konkreten Klassen zu erweitern. Dabei soll die ursprüngliche Implementierung
nicht ersetzt werden, sondern als Teil einer erweiterten Funktionalität zum Einsatz kommen. Gleichzeitig sollen
Verwender über das selbe ursprüngliche Interface auf die erweiterte Funktionalität zugreifen können.

#### Beispiel
Das hier verwendete C#-Beispiel ist direkt dem Wikipedia-Artikel zum Decorator Pattern entnommen.

> #### TODO
> 
> - Implementiert das "Monster"-Beispiel aus dem 
>   [deutschen Wikipedia-Artikel zum Decorator Pattern](https://de.wikipedia.org/wiki/Decorator)
>   nach.
> - Identifiziert Klassen, Methoden und Beziehungen (Vererbung, Implementierung) im UML-Diagramm
>   und findet die Pendants dazu in der Monster-Implementierung
> - Fügt neue Decorator hinzu, die neue `Drohe`-Funktionalität aus bestehender Funktionalität 
>   erzeugen.


## In C# eingebaute Patterns

Grundsätzlich lassen sich alle Patterns in allen (zumindest Objekt-orientierten) Programmiersprachen
implementieren. Einige Programmiersprachen bieten jedoch für besonders Häufig zum Einsatz kommende
Patterns spezielle Unterstützung in der Syntax der Sprache selbst. In C# werden das Iterator-Pattern
und das Observer-Pattern durch spezielle Sprachkonstrukte unterstützt.

### Observer (mit C#-`event`s)

Das Observer-Pattern kommt zum Einsatz, wenn beim Eintreten eines bestimmten Ereignisses in einem
Teil (einer Methode) der Software, beliebige andere Teile der Software "informiert" werden sollen.
Informiert heißt dabei, dass diese anderen Teile (die _Observer_ oder auch die _Event LOistener_)
ausführbare Code-Fragmente hinterlegen können, 
die beim Eintreten des Ereignisses ausgeführt werden sollen. Dabei soll der Code-Teil, in dem 
das Ereignis ausgelöst werden soll, so entwickelt werden können, dass zum Zeitpunkt der Entwicklung
nicht bekannt ist, welche anderen Teile informiert werden sollen. 

Ein Code-Teil, der es anderen Teilen (Observern) erlaubt, sich für ein Ereignis zu "registrieren"
muss einen erheblichen Aufwand implementieren. Neben Methoden zum Registrieren und Deregistrieren
müssen überlicherweise über Interfaces die Methoden gekapselt werden, die aufgerufen werden sollen.

In C# gibt es mit den `delegate`s Datentypen, die Methoden beschrieben und mit `event`s eine
einfache Möglichkeit für Auslöser von Ereignissen, Anderen (den Observern) die Möglichkeit zu geben, 
sich für Ereignisse zu registrieren.

> #### TODO
>
> - Erzeugt eine Klasse `Calculator` mit einer `static` Methode `CalculateSomething`, die eine längere
>   Kalkulation durchführt. Simuliert die Kalkulation durch häufig durchlaufene Schleifen.
>
> - Aufrufer der Methode sollen über den Fortschritt der Berechnung informiert werden. In
>   der Berechnung könnte z.B. alle soundsoviel Schleifendurchläufe eine Benachrichtigung
>   an den Aufrufer erfolgen.
> - Erzeugt einen `delegate` Datentyp, der eine Methode beschreibt, die von CalculateSomething
>   aufgerufen werden kann und fügt der Klasse `Calculator` einen `event` dieses Typs hinzu:
>  ```C#
>  delegate void ReportProgressMethod(int progress);
>
>  public class Calculator 
>  {
>    public void CalculateSomething()
>    { ... }
> 
>    public event ReportProgressMethod ProgressMethod;
>  }
>  ```
> - Ruft die als Parameter übergebene `progressMethod` an geeigneter Stelle aus der Kalkulation
>   auf und übergebt dieser wiederum als `int`-Parameter den Fortschritt in Prozent 
>   (zwsichen 0 und 100).
>
> - Erzeugt eine neue Instanz des `Calculator` im Hauptprogramm und ruft `CalculateSomething`
>   auf dieser neuen Instanz auf
> 
> - Was passiert, wenn der `ProgressMethod` kein Wert zugewiesen wurde?
>
> - Weist der `ProgressMethod` mit dem `+=`-Operator eine anonyme Methode (mit `delegate`) 
>   zu, die bei jedem Eintreten des "Kalkulation-ist-einen-Schritt-weiter"-Ereignisses eine 
>   Meldung auf der Konsole ausgibt.
>
> - Fügt der `ProgressMethod` mit dem `+=`-Operator eine weitere Methode hinzu. 
>
> - Welche Code-Bestandteile sind nun die "Observer"? 
>
> - Betrachtet die "offizielle" Observer-Struktur, z.B. im UML-Diagramm des
>   deutschen Observer-Wikipedia-Eintrags. Welche Klassen/Methoden-Namen
>   entsprechen welchen Bestandteilen in unserem Calculator-Beispiel?
>
> - Für Fortgeschrittene: Wie würde das Calculator-Beispiel aussehen, wenn
>   es keine C#-Delegates und Events gäbe? Implementiert das Beispiel 
>   


### Iterator (mit C#-Enumerator)

Container- oder Collection-Klassen können Elemente eines bestimmten Typs speichern. Anwender 
solcher Container wollen oft in der Lage sein, auf sämtliche enthaltenen Elemente in einer
Schleife Element für Element zugreifen zu können. Ist der interne Speicher-Mechanismus der
Container-Klasse bekannt und von außen zugreifbar, kann eine solche Schleife einfach implementiert
werden. Oft soll oder darf der interne Speichermechanismus aber nicht bekannt werden. 
Für diesen Fall bietet das Iterator-Pattern eine Lösung, indem eine Container-Klasse 
eine Instanz einer speziellen Iterator-Klasse zur Verfügung stellen kann. Über dieses kann
dann in einer Schleife die Iteration initialisiert werden, geprüft werden, ob noch weitere
Elemente abrufbar sind, auf das aktuelle Element zugegriffen und die Iteration vom aktuellen
auf das nächste Element weiter geschaltet werden.

In C# gibt es das Interface `IEnumerable`, das von Container-Klassen implementiert werden kann.
Jede Klasse, die dieses Interface implementiert, kann nach einem `IEnumerator`-Objekt 
gefragt werden. Dieses Interface wiederum erlaubt den Zugriff auf die einzelnen Elemente des
Containers

> #### TODO
>
> - Welche Methoden/Properties müssen Implementierer des 
>  [`IEnumerator`-Interface](https://msdn.microsoft.com/de-de/library/78dfe2yb(v=vs.110).aspx)
>   besitzen?

Alle im .NET Framework implementierten Collection-Klassen implementieren dieses Interface und
auch sogar die in C# eingebauten Arrays.

> #### TODO
>
> - Legt einen Array mit 10 `string`-Werten an und initialisiert die 10 Einträge.
>
> - Ruft auf dem Array die Methode `GetEnumerator()` auf und speichert das Ergebnis in einer 
>   Variablen. 
>
> - Erzeugt eine Schleife (`for` oder `while`), in der ihr folgende Eigenschaften 
>   (Methoden und Properties) des Enumerators so verwendet, dass auf alle Array-Elemente
>   einmal zugegriffen wird:
>   - `Current`
>   - `MoveNext()`

Für Anwender von Collection-Klassen, die `IEnumerable` implementieren, kann zum Implementieren
einer Schleife, die auf alle enthaltenen Objekte zugreift, die `foreach`-Anweisung verwendet 
werden, die vom Compiler in die Implementierung mit `Current` und `MoveNext()` aus obigem 
Beispiel übersetzt wird.

## Aufgabe

- Erweitert das Decorator-Beispiel mit den Spielfiguren
  im Ordner [DesPatternDecorator](DesPatternDecorator/) so, dass es eine gemeinsame 
  Basisklasse für alle Decorator gibt. In dieser Basisklasse sollte auch die von 
  allen Decorator gleich zu implementierende Funktionalität hinein.

- Wandelt die Methode `GetInstance` im Singleton-Pattern in ein C#-Property um.
  Nennt das Property `Instance` und implementiert _nur_ die `get` Methode des
  Property (kein `set`).  
