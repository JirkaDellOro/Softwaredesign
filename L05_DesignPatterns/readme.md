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
> - Lest Euch auf der Wikipedia-Seite zu Entwurfmustern den Abschnitt zu den "Arten von Entwurfsmustern"
>   durch. 
>   - Wieviele Kategorien gab es ursprünglich?
>   - Welche Design Patterns gibt es?
>     - Für was werden Sie verwendet?
>   - Was denkt Ihr, welche Design Patterns werden häufig verwendet?


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
>     Attribut namens `Instance`, das nur einen _getter_ und keinen _setter_ besitzt.
>   - Stellt die eigentliche Funktionalität, _neue ID generieren_ in einer Methode namens
>     `GenerateNewID(): number` zur Verfügung, die die neue ID als `number` zurückgibt.
>   - Implementiert die Funktionaliät über ein `number`-Feld der Klasse, das beim Erzeugen der
>     Singleton-Instanz mit einem Startwert initialisiert wird und bei jedem Aufruf
>     von `GenerateNewID` um eins erhöht wird.


### Data Access

#### Beispiel 

#### Das Pattern


### Decorator

Das Decorator Pattern kommt in folgenden Situationen zum Einsatz: Angenommen, es gibt konkrete bestehende Klassen, deren Funktionalität über ein Interface festgeschrieben ist. Verwender von Instanzen dieser Klassen
greifen über das bestehende Interface auf die Funktionalität zu. Nun soll die Möglichkeit erzeugt werden, 
die ursprüngliche Funktionalität der konkreten Klassen zu erweitern. Dabei soll die ursprüngliche Implementierung
nicht ersetzt werden, sondern als Teil einer erweiterten Funktionalität zum Einsatz kommen. Gleichzeitig sollen
Verwender über das selbe ursprüngliche Interface auf die erweiterte Funktionalität zugreifen können.

#### Beispiel
Das hier verwendete TypeScript-Beispiel ist direkt dem Wikipedia-Artikel zum Decorator Pattern entnommen.

> #### TODO
> 
> - Implementiert das "Monster"-Beispiel aus dem 
>   [deutschen Wikipedia-Artikel zum Decorator Pattern](https://de.wikipedia.org/wiki/Decorator)
>   nach.
> - Identifiziert Klassen, Methoden und Beziehungen (Vererbung, Implementierung) im UML-Diagramm
>   und findet die Pendants dazu in der Monster-Implementierung
> - Fügt neue Decorator hinzu, die neue `Drohe`-Funktionalität aus bestehender Funktionalität 
>   erzeugen.

## In TypeScript eingebaute Patterns

Grundsätzlich lassen sich alle Patterns in allen (zumindest Objekt-orientierten) Programmiersprachen
implementieren. Einige Programmiersprachen bieten jedoch für besonders Häufig zum Einsatz kommende
Patterns spezielle Unterstützung in der Syntax der Sprache selbst. In TypeScript werden das Iterator-Pattern
und das Observer-Pattern durch spezielle Sprachkonstrukte unterstützt.

### Observer (mit TypeScript-`event`s)

Das Observer-Pattern kommt zum Einsatz, wenn beim Eintreten eines bestimmten Ereignisses in einem
Teil (einer Methode) der Software, beliebige andere Teile der Software "informiert" werden sollen.
Informiert heißt dabei, dass diese anderen Teile (die _Observer_ oder auch die _Event Listener_)
ausführbare Code-Fragmente hinterlegen können, 
die beim Eintreten des Ereignisses ausgeführt werden sollen. Dabei soll der Code-Teil, in dem 
das Ereignis ausgelöst werden soll, so entwickelt werden können, dass zum Zeitpunkt der Entwicklung
nicht bekannt ist, welche anderen Teile informiert werden sollen. 

Ein Code-Teil, der es anderen Teilen (Observern) erlaubt, sich für ein Ereignis zu "registrieren"
muss einen erheblichen Aufwand implementieren. Neben Methoden zum Registrieren und Deregistrieren
müssen überlicherweise über Interfaces die Methoden gekapselt werden, die aufgerufen werden sollen.

Ein Beispiel für das Observer-Prinzip sind die EventListener, die z.B bei einem Mausklick eine Methode ausführen.

> #### TODO: Aktionsimulation
>
> - Erzeugt eine Interface `Subject` mit den Methodenköpfen `registerObserver`, `removeObserver` und `notifyObservers`
>
> - `registerObserver`: Übergabeparameter: `Observer`, Rückgabewert: `void`
>
> - `removeObserver`: Übergabeparameter: `Observer`, Rückgabewert: `void`
>
> - `notifyObservers`: Übergabeparameter: `<KEINE>`, Rückgabewert: `void`
>
> - Erzeugt eine Interface `Observer` mit dem Methodenkopf `update`
>
> - `update`: Übergabeparameter: `number`, Rückgabewert: `void`
>   
> - Erzeugt eine Klasse `Share`, die das Interface: `Subject` implementiert. fügt die Attribute: `sharePrice <number>` und `observers <Observer[]>` hinzu. Da sie das Interface `Subject` implementiert muss sie alle Methoden dieses Interfaces überschreiben:
>
> - `registerObserver`: Das Übergebene `Observer`-Objekt soll in das Feld: `observers` gespeichert werden.
>
> - `removeObserver`: Das Übergebene `Observer`-Objekt soll aus dem Feld: `observers` gelöscht werden.
>
> - `notifyObserves`: Über jedes registrierte (gespeicherte) `Observer`-Objekt (`observers`) soll die Methode: `update` des Interfaces: `Observer` ausgeführt werden. Übergeben wird der Wert des Attributs `sharePrice`.
>
> - Eigene Methoden von `Share`:
>
> - `setSharePrice`: Diese Methode setzt einen neuen Wert für `sharePrice`. Dieser Wert wird ihr als Parameter übergeben. Anschließend sollen alle Observer über die Änderung benachrichtigt werden.
>
> - `getSharePrice`: liefert den Wert von `sharePrice` zurück. Nicht nötig wenn dieses public ist.
>
> - Erzeugt eine Klasse `SharePriceDisplay`, die das Interface: `Observer` implementiert. Fügt das Attribut: `subject <Subject>` hinzu. Da sie das Interface `Observer` implementiert muss sie alle Methoden dieses Interfaces überschreiben:
>
> - `update`: Gibt den aktuellen Kurs der Aktie (`sharePrice`) aus.
>
> - `constructor`: Ein Übergabeparameter vom Typ: `Subject` wird in das Feld `subject` gespeichert.
>
> - Testet den Code, indem ihr eine neue Instanz von `Share` und `SharePriceDisplay` anlegt. Das `SharePriceDisplay`-Objekt soll das .`Share`-Objekt "überwachen"
>
> - Registriert das `SharePriceDisplay`-Objekt beim `Share`-Objekt (über `registerObserver`).
>
> - Ändert nun zeitversetzt den Wert von `sharePrice` (`setSharePrice` und `setTimeout`) und betrachtet die Konsolenausgabe.
>
> - Zusatz:
>
> - Legt einen weitere Observer-Klasse an, die ab einem bestimmten Wert von `sharePrice` eine Verkaufsempfehlung ausgibt


### Iterator

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

In TypeScript (ES2015) implementieren die gängigen Collection-Klassen (`Array`, `Map`, `String`, `Set`) das `Iterable`-Interface.

Die beiden gängigsten Iterator sind `for in` und `for of`
>
> - Array:
>
> - `for in`: Liefert die einzelnen Property Names des Array (Indizes).
>
> - `for of`: Liefert die einzelnen Object Values des Arrays (Genauer gesagt den Iterator, des Iterator-Attributs, den jede iterierbare Collection hat).

Damit eine eigene Collection iterierbar ist, benötigt sie ein Attribut `Symbol.iterator`. Dieses Attribut erhält seinen Wert von einer Iterator-Function, die ein Generator-Objekt zurückgibt.

Beispiel:

```TypeScript
  let obj: any = {
    x: 1,
    y: "Hans Peter",
    [Symbol.iterator]: function* (): Generator {
        let properties: string[] = Object.keys(this);
        for (let i of properties) {
            yield this[i];
        }
    }  
};

for (let o in obj) {
    console.log(o); //Liefert die Indizes: x, y
}

for (let o of obj) {
    console.log(o); //Liefert die Werte: 1, Hans Peter
}
```

<!-- > #### TODO
>
> - Welche Methoden/Properties müssen Implementierer des 
>  [`IEnumerator`-Interface](https://msdn.microsoft.com/de-de/library/78dfe2yb(v=vs.110).aspx)
>   besitzen?

Alle im .NET Framework implementierten Collection-Klassen implementieren dieses Interface und
auch sogar die in TypeScript eingebauten Arrays.

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
Beispiel übersetzt wird. -->

## Aufgabe

- Erweitert das Decorator-Beispiel mit den Spielfiguren
  im Ordner [DesPatternDecorator](DesPatternDecorator/) so, dass es eine gemeinsame 
  Basisklasse für alle Decorator gibt. In dieser Basisklasse sollte auch die von 
  allen Decorator gleich zu implementierende Funktionalität hinein.

- Wandelt die Methode `GetInstance` im Singleton-Pattern in ein TypeScript-Property um.
  Nennt das Property `Instance` und implementiert _nur_ die `get` Methode des
  Property (kein `set`). 