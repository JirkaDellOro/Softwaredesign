# Clean Code
Im Jahr 2008 verfasst Robert C. Martin, auch bekannt als "Uncle Bob", zusammen mit anderen Autoren das viel beachtete Buch "Clean Code". Im Text geht es vordringlich darum, wie Code gestaltet werden sollte, damit er für Menschen verständlich und wartbar ist. Es steht weniger im Vordergrund, dass der Code funktioniert, das ist ohnehin eine Voraussetzung. Stattdessen sollte sich der Code lesen lassen wie eine Geschichte. Begriffe wie "Eleganz" und "Schönheit" fallen, Programmieren wird als Kunst im wahrsten Sinne, wie Malerei oder Lyrik, dargestellt.

Desweiteren prägte "Uncle Bob" die 5 Prinzipien des objektorientierten Designs (SOLID-Principles).

Guter Code lässt sich leicht verstehen und bietet wenig Schlupfwinkel für Bugs. Er erklärt sich selbst und funktioniert entsprechend. Wenn Änderungen erforderlich werden, sind sie mit wenig Aufwand und kognitiver Last durchführbar. Es ist nicht erforderlich, dass der ursprüngliche Autor diese vollzieht.

## Namen
Einer der wichtigsten Aspekte beim Clean Coding ist die Namensgebung. Beim Programmieren muss man sich ständig Namen für Variablen, Funktionen, Klassen und Methoden etc. überlegen. Hierfür sollte man sich Zeit nehmen und die Namen auch immer wieder verbessern. Es dauert nicht lange, bis man sich nicht mehr genau daran erinnern kann, welchen Zweck eine Variable oder Funktion erfüllt, wenn man nicht einen sehr präzisen und beschreibenden Namen gewählt hat. 

### Beschreibende Namen
Namen sollten also den Zweck beschreiben. Hier ein einfaches Beispiel für eine Variable, welche eine Anzahl von Tagen darstellen soll.

```TypeScript
    let d: number;
```

Dieser Name ruft keinerlei Assoziation mit dem Zweck der Variablen hervor. Besser sind Benennungen wie

```TypeScript
    let elapsedTimeInDays: number;
    let daysSinceCreation: number;
    let fileAgeInDays: number;
```

je nachdem auf was sich die Anzahl der Tage genau bezieht. Ein solcher Name ist beschreibend und es lässt sich sofort ein Zweck erkennen. Da die Entwicklungsumgebungen in der Regel über eine Autovervollständigung verfügen, spielt die Länge von Namen gegenüber der Aussagekraft eine untergeordnete Rolle.

### Verwechslungen vermeiden
Verwechslungen zwischen Namen sollte vermieden werden, da dadurch Irritationen auftreten können. Ein bekanntes Beispiel stammt aus dem HTML-Dokument-Modell. Hier werden mehrere Methoden zur Verfügung gestellt, um ein HTML-Element im DOM zu finden. Beispielsweise

``` 
GetElementsByTagName("h1");

GetElementById("headline");
```

Hier fällt sofort auf, dass einmal nach dem Tag-Name, das andere mal nach einer Id gesucht wird. Häufig wird aber übersehen, dass die erste Methode eine Collection von Elementen liefert, die zweite aber ein einzelnes Element. Im Namen sichtbar wird dies lediglich durch das zusätzliche "s". Eine alternative Namensgebung wäre beispielsweise gewesen

```
GetElementCollectionByTagName("h1");
```

### Kurze Namen
Kurze Namen sind erlaubt in sehr kleinen Kontexten, wie beispielsweise als Schleifenzähler
``` TypeScript
for (let i: number = 0; i < 10; i++)
    console.log(i);
```
Ebenso, wenn ihre Bedeutung als Einzelbuchstabe sehr üblich ist und ein längerer Name eher eine Verschleierung bedeuten würde. Ein Beispiel stellen kartesische Koordinaten dar.

``` TypeScript
let x: number; // horizontale Position
let y: number; // vertikale Position
```

### Konzepte
Ein Namenskonzept sollte sich durch eine Anwendung konistent wiederfinden lassen. So ist beispielweise die Addition von Werten etwas sehr anderes, als das Hinzufügen von Elementen an eine Collection. Der Name add(...) sollte also nicht für beide Konzepte verwendet werden. Für das Hinzufügen an eine Collection eignet sich eher append(...) oder insert(...)

### Namen der Lösungsdomäne verwenden
Code wird in der Regel von Menschen gelesen, die sich selbst mit Code beschäftigen. Daher ist es sinnvoll, ihnen vertraute Namen zu verwenden. Deshalb sollten Fachbegriffe der Informatik, Algorithmen- und Patternnamen, mathematische Begriffe etc. genutzt werden. Damit ist es nicht erforderlich, sich später erneut in das zu lösende Problem hineinzuversetzen und die Sprache der Problemdomäne zu lernen, um den Code zu warten. Dies gilt insbesondere für Code der allgemeingültig zu begreifen ist und konzeptionell nicht sehr eng an die Problemdomäne gebunden ist.

### Namen der Problemdomäne verwenden
Wenn allerdings Namen aus der Lösungsdomäne nicht sinnvoll anwendbar sind, sollte man sie aus der Problemdomäne entlehnen. Dies gilt insbesondere für Code, der konzeptionell stark an die Problemdomäne gebunden ist. Im Bedarfsfall können dann Experten aus dem entsprechenden Bereich befragt werden.

### Namen in Kontext einbetten
In unterschiedlichen Kontexten können Namen unterschiedliche Bedeutungen haben. Beispielsweise wird bei dem Namen "state" ein Zustand erwartet. Soll die Bedeutung aber "Staat" sein, so muss dies aus dem Kontext erschlossen werden. Recht leicht funktioniert dies, wenn state beispielsweise Teil einer Klasse "Address" ist. Liest man nun address.state, wird nahegelegt, dass hier das Land gemeint ist, in welchem die Adresse liegt.

### Magic Numbers
Häufig findet man in Code Zahlenkonstanten (engl. _literal_), ohne deren Bedeutung entschlüsseln zu können. Das sind magische Zahlen, die das Programm auf unerklärliche Weise zum Laufen bringen. Beispielsweise:

```TypeScript
  if (x >= 800)
    x = -30;
```

Warum 799? Wenn dies die Breite einer Zeichenfläche sein soll, muss dies im Code auch zum Ausdruck kommen. Und was sollen die -30 bedeuten?

```TypeScript
  let canvasWidth: number = 800;
  let leftOffset: number = -30;  
  if (x >= canvasWidth)
    x = leftOffset;
```

Damit wird das Ganze deutlich klarer.  
Wahrscheinlich ist die Breite aber ohnehin von anderer Stelle dynamisch ermittelbar, möglicherweise mit Hilfe eines Objektes, welches die Zeichenfläche beschreibt. Nennen wir es "canvas". Dann würde der Code sinnvollerweise etwa so aussehen:

```TypeScript
  let offset: number = -30;  
  if (x >= canvas.width)
    x = leftOffset;
```

## Kommentare
Kommentare sind keine Abhilfe für schlechten Code. Wo immer möglich, sollte der Code so umgeschrieben werden, dass er sich selbst erklärt, anstatt ihn mit Hilfe von Kommentaren zu erklären. Ein sehr großes Problem ergibt sich aus der Tatsache, dass bei einer Überarbeitung des Code auch die Kommentare überarbeitet werden müssen. Dies geschieht häufig nicht, so dass alte, irritierende oder gar schlicht falsche Kommentare übrig bleiben. Somit wird ein Kommentar schädlich und ist deutlich schlimmer als kein Kommentar.

```TypeScript
/**
*Bitte den Code überarbeiten, so dass er sich selbst erklärt, statt Kommentare zu verteilen!
**/
```

Natürlich gibt es auch sinnvolle Kommentare, insbesondere juristisch relevante, TODOs oder Kommentare die der automatischen Erstellung einer Dokumentation (z.B. Javadocs) dienen.

## Funktionen
Nach Zeilen und Blöcken sind Funktionen die nächste Organisationseinheit eines Programms. Die Lesbarkeit und Wartbarkeit hängt wesentlich davon ab, wie gut diese Organisationsmöglichkeit genutzt wird. Hierfür beschreibt "Clean Code" einige Regeln.

### Größe
Früher, zu Zeiten von Monitoren, die nur wenige Zeilen darstellen konnten, hieß es, eine Funktion soll auf eine Bildschirmseite passen. Das sollte heute auch noch der Fall sein, damit man eine Funktion als Ganzes erfassen kann. Allerdings ist das Platzangebot mittlerweile sehr viel größer und es passt auch eine sehr große und unübersichtliche Funktion auf eine Bildschirmseite. Daher wird generell empfohlen, Funktionen kurz und knapp zu halten, laut "Clean Code" möglichst nicht länger als 20 Zeilen.
Sollte eine Funktion groß zu werden drohen, so muss geprüft werden, ob sie in weitere Funktionen aufgeteilt werden kann.

### Einrückungstiefe
Wenn möglich, sollte die Einrückungstiefe nicht mehr als zwei Ebenen betragen. Mit der Anzahl der Einrückungen muss man beim Schreiben und Lesen des Codes immer mehr Bedingungen berücksichtigen. 

### Abstraktionsebenen
Eine Funktion soll nur auf einer Abstraktionsebene arbeiten, welche direkt dem durch den Namen ausgedrückten Zweck zugeordnet werden kann. Sonst ist es schwer zu erkennen, ob ein spezieller Ausruck ein wesentliches Konzept darstellt, oder lediglich ein Detail. Details ziehen zudem während der Entwicklung weitere Details an und machen den Code immer schwerer verständlich. Details sind also von Funktionen zu bewerkstelligen, die sich um Details kümmern, während andere Funktionen die übergeordneten Konzepte sichtbar machen.

### Separation of Concerns (SOC)
Eine Funktion soll nur genau eine Aufgabe erfüllen. Der Name der Funktion soll genau diese Aufgabe beschreiben. Es sollten keine "Seiteneffekte" auftreten, die sich nicht erwartbar aus dem Namen ergeben. Überraschungen sind unbedingt zu vermeiden.

### Top Down
Code sollte wie eine Erzählung von oben nach unten gelesen werden. Damit das bei der Organisation von Funktionen und Methoden klappt, sollten wenn möglich den aufrufenden Funktionen die aufgerufenen folgen. Somit weist der Code von oben nach unten eine zunehmende Abstraktionstiefe auf. Das Programm lässt sich dann im Idealfall als eine Folge von UM-ZU-Absätzen lesen. Hier ein schematisches Beispiel.

```TypeScript
ChooseHighLevelOption(decide: number): void
{
    if (decide < 0)
        DoHighLevelFirstOption();
    else
        DoHighLevelSecondOption();
}

DoHighLevelFirstOption(): void
{
    ...
}

DoHighLevelSecondOption(): void
{
    ...
    DoLowLevel();
    ...
}

DoLowLevel(): void
{
    ...
}
```
Die erste Funktion ChooseHighLevelOption tut nichts anderes, als aufgrund des Parameters decide zu entscheiden, welche der beiden HighLevelOption-Funktionen aufgerufen werden soll. Die sind weiter unten definiert, wobei DoHighLevelSecondOption die Funktion DoLowLevel aufruft. Jene ist wieder darunter definiert. Auf jeder Abstraktionsstufe sollen die Funktionen in sich verständlich sein. Um sich zu weiteren Details bzw. niedrigere Stufen der Abstraktion zu informieren, kann man nun die entsprechende Funktion lesen. So entsteht eine Hierarchie der Abstraktion und der Aufgaben.  

### Parameter
Nach der Anzahl der Parameter kann man bei Funktionen zwischen Niladen (0), Monaden (1), Dyaden (2), Triaden (3) und Polyaden (>3) unterscheiden. Grundsätzlich sollte man bestrebt sein die Anzahl der Parameter zu minimieren. Bei Polyaden sollte geprüft werden, ob einige der Parameter nicht besser als separate Struktur oder Klasse zusammengefasst werden sollten.
Im Idealfall ergeben der Name der Funktion und die Namen der formalen Parameter eine gut lesbare und sinnvolle Verb-Substantiv-Kombination, wie z.B.

```TypeScript
SetTime(hour: number, minutes: number): void
{
    ....
}
```

### Don't Repeat Yourself (DRY)
Wenn man gleiche oder ähliche Codezeilen zum zweiten Mal schreibt, sollte umstrukturiert werden und ggf. eine neue Funktion anlegt werden. Wiederholungen sind zu vermeiden, der Code sollte "DRY" sein. Hier ein sehr simples Beispiel

```TypeScript
if (returnPositive)
    return a * b / c;
else
    return - a * b / c;
```
Die gleiche Berechnung wird hier an zwei verschiedenen Stellen im Code durchgeführt. Muss die Berechnung später geändert werden, muss dies also mehrfach geschehen. 

```TypeScript
if (returnPositive)
    return CalculateResult();
else
    return -1 * CalculateResult();

CalculateResult(): number
{
    return a * b / c;
}
```
In diesem Beispiel hätte man natürlich auch die Berechnung vor der if-Abfrage durchführen und das Ergebnis einer lokalen Variablen zuweisen können, deren Wert man dann ggf. zur Rückgabe mit -1 multipliziert. Bei mehreren duplizierten Codezeilen wird die Auslagerung in eine Funktion noch besser intuitiv begreifbar.

### Vorgehensweise
Es ist gar nicht leicht, Funktionen nach diesen Regeln zu gestalten. Es ist ein iterativer Prozess. Zunächst muss man die Gedanken zur Problemlösung notieren und dann einen ersten Entwurf machen. Dieser wird dann solange umstrukturiert und refaktoriert, bis der entstandene Code den Regeln guten Designs entspricht.

### SOLID-Prinzipien

Dieses Akronym steht für:

**S**ingle-responsibility-principle
**O**pen-closed-principle
**L**iskov substitution principle
**I**nterface segregation principle
**D**ependency inversion principle

#### Single-responsibility-principle

Eine Klasse sollte nur eine Verantwortlichkeit haben. Das eine Änderung in dieser Klasse soll keine andere Klasse betreffen. Maximale Kohäsion und minimale Kopplung sind hier die Stichwörter. Ein Nichteinhalten dieses Prinzips führt zu vielen Abhängigkeiten und einer hohen Vernetzung. Dies führt zwangsläufig zu einer hohen Anzahl verschiedener Klassen. Dies bedeutet jedoch keineswegs, dass der Code umfangreicher ist. Lediglich die Organisation ist anders.

#### Open-closed-principle

Klassen sollen offen für Ertweiterungen, aber geschlossen gegenüber Modifikationen sein. Das heißt die Funktionaltität einer Klasse darf erweitert, aber nicht verändert werden. Schon fertig implementierte Funktionen können neue Fehler bekommen, wenn die Erweiterung der Klasse nur durch Änderungen innerhalb dieser möglich ist. 

Programmiersprachen bringen zwei Techniken mit, mit denen sich dieses Prinzip erfüllen lässt:
> - Vererbung (Superklassen)
> - Implementierung (Interfaces)

#### Liskov substitution principle

Instanzen von Subklassen sollen sich so verhalten wie Instanzen der Superklasse. Dies wird grundsätzlich schon durch den Compiler sichergestellt (Polymorphie und Type-Casting). Eine Subklasse darf eine Superklasse nur erweitern, nicht verändern.

#### Interface segregation principle

Interfaces sollen nur Funktionen enthalten, die eng zusammen gehören (Kohäsion). Klassen die dieses Interface implementieren, müssen auch alle dessen Funktionen ausdefinieren. Auch wenn eine Methode unnötig für die Klasse ist. Darum sollten alle Funktionen der implementierenden Klasse nutzen.

#### Dependency inversion principle

Abhängigkeiten von Klassen sollen grundsätzlich vermieden werden. Das heißt zum Beispiel auch, dass Aggregationen und Kompositionen beispielsweise mithilfe von Interfaces umgangen werden sollen.

## Konventionen (von Prof. Müller)
- Klammern/Einrückung
  - im Allman/East-Coast-Stil (öffnende Klammer in eigene neue Zeile), 
  -	4 Leerzeichen
- Identifizierer
  - Bei mehreren Worten camelCase bzw. PascalCase
  - Struct-, Klassen-, Delegate-, enum- und Interface-Namen: erster Buchstabe groß
  - Interface-Namen beginnen mit großem "I", danach erster Buchstabe groß
  - Öffentliche Klassenbestandteile (Properties und Fields) am Anfang groß
  - Nicht-öffentliche Klassenbestandteile (Properties und Fields): 
    - erstes Zeichen underscore '_'
    - dann klein weiter, ggf. camelCase
  - Methodennamen immer erster Buchstabe groß (public und non-public)
  - Methodenparameter & lokale Variablen: erster Buchstabe klein.
  - enum-Konstanten: erster Buchstabe groß
  - NIEMALS all-uppercase

> #### TODO
>
> - Das in dieser Lektion verwendete Code-Beispiel stammt 
>   [aus diesem Artikel](https://www.codeproject.com/Articles/1083348/Csharp-BAD-PRACTICES-Learn-how-to-make-a-good-code).
>   Arbeitet den Artikel durch und vergleicht die verwendeten Maßnahmen mit den 
>   oben angegebenen.

## Links
http://clean-code-developer.de/  
