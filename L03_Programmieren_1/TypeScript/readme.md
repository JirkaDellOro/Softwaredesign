# Programmieren in TypeScript

## Einführung

### Ein wenig Geschichte

**TypeScript** wurde von Microsoft entwickelt und 2012 veröffentlicht. Es basiert auf dem ECMAScript-6 Standard und erweitert die JavaScript-Syntax um viele Funktionen wie z.B spezifischere Typisierung und erweiterte Funktionsimplementierung, die sich mehr an gängigen Programmiersprachen orientiert. Der TypeScript-Compiler kompiliert den TS-Code in JavaScript-Code, da Browser lediglich JS interpretieren und ausführen können.

Anfangs war die Softwareentwicklung mit dieser Programmiersprache nur mit der Microsoft Entwicklungsumgebung Visual Studio möglich und somit exklusiv für Windows. Dies ist mittlerweile nicht mehr so. Alle gängigen Entwicklungsumgebungen (In dieser Veranstaltung VS Code) bieten Support für TS.


### Werkzeuge

In dieser Veranstaltung verwenden wir folgende setzen wir folgende Werkzeuge ein, die allesamt
kostenlos, OpenSource und plattformübergreifend (Windows, MacOS, Linux) sind.

- Visual Studio Code (Integrierte Entwicklungsumgebung / Editor)

## Eingebaute Datentypen von JavaScript

TypeScript erweitert JavaScript um eine spezifischere Typisierung. Allerdings müssen immer noch die gängigen Variablendeklarationen von JS benutzt werden. Diese lauten wie folgt:

- `let` der Gültigkeitsbereich erstreckt sich lediglich über den lokalen Block. Der Begriff leitet sich von dem englischen Verb 'to let' ab. Beispiel (let x = 5, etwa: 'lassen wir x 5 sein'). Die Werte der Variable lassen sich nach der Initialisierung noch ändern.
- `const` der Gültigkeitsbereich erstreckt sich lediglich über den lokalen Block. Der Wert einer solchen Variablen kann nicht mehr geändert werden. Attributwerte eines Objekts, das mit const deklariert wurde lassen sich jedoch ändern.
- `var` der Gültigkeitsbereich erstreckt sich über die jeweilige Funktion. Das heißt eine Variable die mit var in einer Schleife deklariert wurde, ist auch außerhalb der Schleife bekannt. solange man sich in der selben Funktion befindet.

## Eingebaute Datentypen von TypeScript

- `boolean` zum Speichern von Wahrheitswerten. Eine Variable vom Typ `boolean` kann nur
  einen von zwei möglichen Werten annehmen, nämlich `true` (wahr) oder `false` (falsch).

- `number` zum Speichern von Zahlenwerten. Sowohl integrale Zahlen als auch Fließkommazahlen können in diesem Typen gespeichert werden (Bis 9007199254740991).

- `bigInt` zum Speichern von Zahlenwerten, die über den Maximalwert von `number` gehen

- `string` zum Speichern beliebig langer Zeichenketten.

Anmerkung: `char` gibt es in TypeScript nicht

[Referenzdokumentation](https://www.typescriptlang.org/docs/handbook/basic-types.html)

## Variablendeklarationen

In TypeScript können Variablen im Programmcode mit folgender Syntax deklariert werden:

```TypeScript
jsTyp identifizierer: tsTyp;
```

Dabei gibt `jsTyp` den Datentyp an, also z.B. einen der o.g. eingebauten Datentypen. `identifizierer` ist dabei der
frei wählbare Variablenname. In TypeScript gilt:

- Jede verwendete Variable ***muss*** zuvor deklariert worden sein.
- Jede Variable ist von einem fest zugeordneten Datentyp, der zur Compile-Zeit fest steht
  und sich während des Programmlaufs nicht ändern kann. Üblicherweise wird der Typ
  in der Deklaration angegeben.
  
Diese Regeln machen TypeSccript zu einer so genannten _stark typisierten_ Sprache. Es gibt Programmiersprachen, die 
eine solche starke Typisierung nicht fordern (z.B. JavaScript, eine schwach typisierte Sprache). Für beide
Varianten gibt es Vor- und Nachteile.

### Regeln für Identifizierer

Für die Wahl von Variablennamen und anderen Identifizierern gibt es folgende Regeln:

- Das erste Zeichen eines Identifizierers _keine_ Ziffer (`'0'`...`'9'`) sein.
- Alle weiteren Zeichen dürfen Buchstaben, Ziffern oder der Unterstrich (`'_'`) sein.
- Als Identifizierer darf ***kein*** 
  [JS-Schlüsselwort](https://www.w3schools.com/js/js_reserved.asp)
  verwendet werden, da JS von Haus aus kein Namespacing hat.

> #### TODO
>
> - Warum darf der Programmierer **horst** seine Lieblingsvariable nicht nach seiner Freundin **else** benennen? :-)

Als "Buchstabe" kommen übrigens nicht nur die Zeichen unseres lateinischen Alphabets in Frage, sondern auch 
z.B. griechische oder kyrillische Zeichen (offizielle EU-Alphabete). Es ist also durchaus erlaubt, 
z.B. den Wert `3.141592` in einer Variablen namens **π** oder einen Winkel-Werte in einer Variable 
namens **α** zu speichern. U.u. ist es aber nicht so ganz einfach, derartige Zeichen mit einer lateinischen
Tastatur einzugeben.

### Initialisierung

Eine Variablendeklaration nach o.a. Muster kann in der selben Code-Zeile gleich auch noch eine erstmalige 
(_initiale_) Zuweisung eines Wertes enthalten, indem hinter die Deklaration (aber _vor_ das Semikolon)
der zu _initialisierende_ Wert mit dem _Zuweisungsoperator_ (`=`) angegeben wird. Hier ein paar Beispiele

```TypeScript
let i: number = 42;
let pi: number = 3.1415;
let salute: string = "Hello, World";
```

In allen obigen Fällen werden die Variablen mit Konstanten initialisiert. TypeScript schreibt vor, welches Format
Konstanten haben müssen, um einem der eingebauten Typen zu genügen.

### Typ Inferenz

Da sämtlicher TypeScript-Code zu JS-Code kompiliert wird, ist die spezifischere Typisierung nur als Hilfe für den jeweiligen Programmierer gedacht. Im resultierenden JS-File fehlen sämtliche Typisierungen. Daher wird zur Laufzeit ermittelt, wie die entsprechende Variable zu behandeln ist.

> #### TODO
>
> - Erzeugt in Visual Studio Code ein neues TS-Projekt und fügt oben stehende Deklarationen und
>   Initialisierungen der Variablen `i`, `pi`, und `salute` ein.

## Arrays

Wie in anderen Programmiersprachen, gibt es auch in TypeScript die Möglichkeit, über nur _einen_ Variablennamen
auf _viele_ Werte gleichen Typs zuzugreifen, indem mit Hilfe eines _index_, also einer Zahl, bestimmt wird,
auf welchen der vielen möglichen Speicherplätze, die sich hinter dem einen Variablennamen verstecken,
zugegriffen wird. Wie in anderen Programmiersprachen auch, heißen solche Konstrukte ***Arrays***.

Jeder beliebige Datentyp kann zu einem Array-Datentyp gemacht werden, indem diesem eckige Klammern (`[` und `]`) 
hintenangestellt werden. Der Grund-Datentyp gibt dann an, von welchem Typ _ein_ Array-Eintrag ist.
Hier ein paar Beispiele:

Grund-Typ      | Array-Typ
---------------|-----------------
`number`       | `number[]`
`string`       | `string[]`
`boolean`      | `boolean[]`
...            | ...

Anmerkung: Wie in JS sind TS-Arrays dynamisch. Das heißt sie sind komplexe Objekte, über die sich Methoden ausführen lassen, die sie manipulieren. Z.B kann man einen Wert entfernen, was den Array um einen Index schrumpfen lässt. Das ist vergleichbar mit Vektoren und ArrayLists.

### Deklaration von Array-Variablen

Bei der Deklaration von Array-Variablen muss, nach o.a. Schema `typ identifizierer;` zusätzlich auch noch
angegeben werden, wieviel Speicherplätze des Grund-Typs durch den Variablennamen (den `identifizierer`)
verwendbar sein sollen. Dies geschieht durch eine Initialisierung, bei der der die gewünschte Anzahl angegeben
wird. Betrachtet folgenden Code:

```TypeScript
    let ia: number[] = new Array(10);
    let da: string[] = new Array(12);
```

> #### TODO
>
> - Im o.a. Code-Schnipsel werden zwei Array-Variablen deklariert und initialisiert. Wie heißen die Variablen, 
>   was ist der jeweilige Grund-Typ und wieviel Speicherplätze sind jeweils reserviert worden?

**Achtung**: _Initialisierung_ bedeutet in oben stehendem Abschnitt zunächst mal nur, dass die gewünschte
Anzahl Speicherplätze reserviert wird. Damit ist noch nicht festgelegt, welcher Wert in welchem der
Speicherplätze steht. Allerdings gibt es auch dafür, also das initiale Vorbelegen der einzelnen Array-
Speicherplätze mit Werten, eine spezielle Schreibweise:

### Initialisierung von Arrays mit Werten

Folgende Syntax ist zulässiger TypeScript Code:

```TypeScript
    let ia: number[] = [1, 0, 2, 9, 3, 8, 4, 7, 5, 6];
```

Es ist eine abkürzende Schreibweise dafür, dass die Variable `ia` als Array für `number`-Werte deklariert wird, 
unter diesem Variablennamen Platz für zehn `number`-Werte reserviert wird und in die zehn Speicherplätze die
Zahlen in der angegebenen Reihenfolge gespeichert werden. Ohne Abkürzung hätte Folgendes codiert werden 
müssen:

```TypeScript
    let ia: number[] = new Array(10);
    ia[0] = 1;
    ia[1] = 0;
    ia[2] = 2;
    ia[3] = 9;
    ia[4] = 3;
    ia[5] = 8;
    ia[6] = 4;
    ia[7] = 7;
    ia[8] = 5;
    ia[9] = 6;
```

### Zugriff auf einzelne Array-Speicherplätze

Wie man sieht, beginnen die _Indizes_, mit denen die einzelnen Speicherplätze im Array identifiziert werden,
wie in vielen anderen Programmiersprachen auch, immer bei **0**. Daher werden die zehn Array-Speicherplätze 
mit den Indizes von 0 bis 9 angesprochen. Der Zugriff erfolgt dabei mit eckigen Klammern, in die der
Index geschrieben wird, hinter dem Array-Variablennamen. Oben sieht man _schreibenden_ Zugriff auf 
einzelne Array-Speicherplätze: Die Ausdrücke `ia[<index>]` stehen _links_ des Zuweisungsoperators (`=`).
Genausogut kann auch _lesend_ auf einzelne Array-Speicherplätze zugegriffen werden, indem gleichartige
Ausdrücke auf der rechten Seite einer Zuweisung oder in anderen zusammen gesetzten Ausdrücken verwendet
werden.

> #### TODO
>
> Oben stehende Array-Deklaration und Initialisierung ist vorausgesetzt. Betrachtet folgenden Code
>
> ```TypeScript
>   let ergebnis: int = ia[2] * ia[8] + ia[4];
> ```
> - Was steht in der Variablen `ergebnis`? 
>
> Überprüft eure Annahme, indem ihr den Code (mit der vorangegangenen Initialisierung) in einem
>  TypeScript-Projekt laufen lasst. Den Inhalt der Variablen `ergebnis` könnt ihr mit
>  ```TypeScript
>   console.log(ergebnis);
>  ```
> auf der Konsole ausgeben oder bei angehaltenem Programm mit dem Debugger ansehen.
>
> - Erzeugt einen Array vom Grund-Typ `number`, der drei Speicherplätze enthält in denen in der 
>   angegebenen Reihenfolge 
>
>   1. die Zahl PI,
>   2. die Eulersche Zahl und
>   3. die Kepler-Konstante
>
>   enthalten sind.

#### Zugriff über variable Indizes

Eine mächtige Eigenschaft von Arrays ist es, dass auf einzelne Speicherplätze nicht nur über
_konstante_ Indizes wie in obigen Beispielen zugegriffen werden kann. Da Indizes Ganzzahlen sind,
können auch Variableninhalte (z.B. vom Typ int) oder auch Rechenergebnisse, die erst zur Laufzeit
des Programms feststehen, als Indizes verwendet werden. Von dieser Eigenschaft werden wir bei den 
Schleifen Gebrauch machen.

#### Länge eines Arrays

Jede Array-Variable kann über die Eigenschaft (statische Variable) `length` abgefragt werden, 
wieviel Einträge der Array enthält.

> #### TODO
>
> - Gebt nach der Initialisierung des o.A. Arrays mit
>   `console.log(ia.length);`
>   die Anzahl der Einträge aus.
> - Ändert die Anzahl der Einträge und überprüft die Ausgabe.

## Strings

Eine besondere Bedeutung bekommt in den meisten Programmiersprachen der Umgang mit 
Zeichenketten ("Strings"). Hierbei handelt es sich um Folgen von Zeichen des verwendeten
Zeichenvorrats. Software muss an vielen Stellen mit Zeichenketten umgehen, beispielsweise:

- Text-Meldungen an den Benutzer zusamenstellen und anzeigen
- Texteingaben von Benutzern entgegennehmen und analysieren
- Kommunikation mit anderen Prozessen, Rechnern, Cloud-Diensten
- ...

In TypeScript heißt der dazu verwendete Datentyp `string`. Zunächst mal kann man sich einen
String als einen Array des Grund-Typ `char`(vgl. andere Programmiersprachen) vorstellen: Unter einem Variablennamen
ist eine geordnete Folge von `char`-Werten hinterlegt. Zusätzlich dazu bietet der 
Datentyp `string` noch eine ganze Reihe an Funktionalität, z.B.

- Leichte Initialisierung von String-Inhalten durch einfache Konstanten-Syntax 
  ```TypeScript
  let meinString: string = "Dies ist ein String";
  ```
- Aneinanderhängen (_concatenation_) von Strings durch den `+` Operator
  ```TypeScript
  let a: string = "Dies ist ";
  let b: string = "ein String";
  let c: string = a + b;
  ```
- Vergleich von String-Inhalten mit dem `===` Operator (Sowohl Typ als auch Inhalt werden verglichen, also strikte Gleichheit)
  ```TypeScript
  let a: string = "eins";
  let b: string = "zwei";
  let c: string = "eins";
  let a_eq_b: boolean = (a === b);
  let a_eq_c: boolean = (a === c);
  ```
Und tatsächlich funktioniert aber auch der Zugriff auf einzelne Zeichen wie auf
einzelne Einträge eines Arrays

  ```TypeScript
  let meinString: string = "Dies ist ein String";
  let zeichen: string = meinString[5];
  ```

> #### TODO
>
> - Fügt den o.a. Beispielcode zu Strings einem TypeScript-Projekt zu und überprüft jeweils
>   die Variableninhalte von `meinString`, `c`, `a_eq_b`, `a_eq_c` und `zeichen`
>   mit `console.log` oder mit dem Debugger.

## Eigene Datentypen

Ein mächtiges Werkzeug vieler Programmiersprachen ist die Möglichkeit, sich eigene
Datentypen zu schaffen, indem diese aus bereits vorhandenen Datentypen zusammen gesetzt
(_aggregiert_) werden. Als Grundlage dienen die eingebauten Datentypen. Diese können zu 
komplexeren Datentypen zusammen gesetzt werden, die dann direkt verwendet werden 
(indem Variablen von diesen Typen erzeugt werden) oder wiederum als Bausteine für
die Aggregation noch komplexerer Typen verwendet werden. 

In TypeScript können, wie in vielen anderen Programmiersprachen auch, mit dem Schlüsselwort
`class` neue Datentypen erzeugt werden. Hier ein Beispiel

### Einen neuen Typen deklarieren

```TypeScript
  public class Person
  {
      public Name: string;
      public Personalnummer: number;  
  }
```

Oben stehender Code erzeugt einen neuen Datentyp namens `Person`, indem dieser aus den 
bestehenden Datentypen `string` und `number` zusammen gesetzt wird. Jeder Wert vom Typ
`Person` besteht demnach aus einer Komponente `Name` vom Typ `string` und einer
Komponente `Personalnummer` vom Typ `number`. Derart selbst definierte Datentypen
heißen auch ***zusammengesetzte Datentypen***.

Dieser Typ kann nun überall dort verwendet
werden, wo auch eingebaute Datentypen verwendet werden, z.B. beim Deklarieren von
Variablen. 

### Eine Variable eines zusammengesetzten Typs deklarieren

Nach dem bekannten Schema zur Variablendeklaration (`typ identifizierer`) können
wir nun eine Variable vom Typ `Person` anlegen. Der Variablenname ist hier `jemand`:

```TypeScript
  let jemand: Person;
```

### Variablen von zusammengesetzten Typen initialisieren

Wie schon bei Arrays muss bei zusammengesetzten Typen die Initialisierung in zwei Schritten
unterschieden werden:

1. Initialisierung der eigentlichen Variablen, damit Speicherplatz dafür angelegt wird.
   In TypeScript genügt die o.a. Deklaration von `jemand` nicht, damit ich unter diesem Variablennamen
   den Namen und die Personalnummer einer Person speichern kann.
2. Initialisierung der Bestandteile der Zusammensetzung. Der Variablen `jemand` soll ein konkreter
   Name und eine konkrete Personalnummer zugewiesen werden.

Folgender Code führt die beiden Schritte hintereinander durch. Für Schritt 2 wird der 
Objekt-Zugriffs-Operator (`.`) verwendet.

```TypeScript
  let jemand: Person = new Person();
  jemand.Name = "Horst";
  jemand.Personalnummer = 42;
```

In TypeScript gibt es eine abkürzende Schreibweise für diese beiden Initialisierungsschritte. Mit einem
so genannten _Objektinitialisierer_ können die oben stehenden drei Zeilen zu folgender Zeile
zusammen gefasst werden:

```TypeScript
  let jemand: Person = new Person ("Horst", 42);
```

Beachtenswert bei obiger Schreibweise ist die Verwendung der geschweiften Klammern im Unterschied
zu den runden und die Verwendung des Komma als Trennzeichen der Initialisierungsliste.

Nachdem nun die wichtigsten Merkmale von TypeScript im Umgang mit Daten und Datenstrukturen erklärt wurden, 
sollen nun die rudimentären Kontrollstrukturen beschrieben werden

## Verzweigungen

Um in Abhängigkeit eines errechneten Wertes, der Eingabe eines Benutzers, einer von einem anderen
Rechner empfangenen Nachricht oder Ähnlichem Codezweige ausführen zu können, gibt es in allen 
Programmiersprachen das Konstrukt der Verzweigung. 

### `if` / `else`

Die if/else Anweisung, führt auf Grund eines Wahrheitswertes (vom Typ `boolean` - kann wahr oder falsch sein), einen von zwei möglichen
Code-Blöcken aus. Die allgemeine Syntax ist wie folgt:

```TypeScript
  if (<BEDINGUNG>)
  {
      // Anweisungsblock, der ausgeführt, falls <BEDINGUNG> true ist
  }
  else
  {
      // Anweisungsblock, der ausgeführt, falls <BEDINGUNG> false ist
  }
```

Dabei kann der `else`-Zweig auch komplett weggelassen werden. Dann wird im negativen Fall gar nichts 
ausgeführt.

#### Bedingungen der `if`-Anweisung

Die `<BEDINGUNG>` ist dabei ein Ausdruck, der einen Wert vom Typ `boolean` ergibt. Im einfachsten
Fall kann das einfach eine bool'sche Variable sein. Sehr oft wird aber ein Vergleichsoperator
verwendet. Im Folgenden eine Liste der in TypeScript vorhandenen Vergleichsoperatoren. Für die Beispiele
seien

```TypeScript
 let a: int = 3;
 let b: int = 3;
 let c: int = 4;
```

Vergleichsoperator   |  Bedeutung                    | Beispiel
---------------------|-------------------------------|--------------
`===`                | ist gleich (Typkonvertierung) | `boolean erg = (a === b); // erg ist true`
`==`                 | ist gleich                    | `boolean erg = (a == b); // erg ist true`
`<`                  | kleiner                       | `boolean erg = (a < c);  // erg ist true`
`<=`                 | kleiner oder gleich           | `boolean erg = (a <= b); // erg ist true`
`>`                  | größer                        | `boolean erg = (a < c);  // erg ist true`
`>=`                 | größer oder gleich            | `boolean erg = (a <= b); // erg ist true`

> #### TODO
>
> Mit folgendem Code lässt sich eine Zahl einlesen, die der Benutzer in einem Textfeld
> eingibt (wird hier in `a`gespeichert). Der Standardwert bei Nichteingabe ist hier 4
> ```TypeScript
> let a: number = parseInt(prompt("Geben sie eine Zahl ein", "4"));
> ```
>
> - Schreibt ein TypeScript-Programm, das zwei Zahlen von der Konsole einliest. Diese sollen verglichen werden.
>   Ist die erste größer als die zweite, soll der Text "a ist größer als b" in der Konsole ausgegeben werden, ansonsten der Text
>   "b ist größer als a".

Mit den _logischen Operatoren_ lassen sich zudem beliebige `bool`'sche Werte miteinander verknüpfen. 
Folgende logische Operatoren existieren.

Logischer Operator   |  Bedeutung               | Wirkung
---------------------|--------------------------|---------------------
`!`                  | Negation                 | Operand wird negiert (aus `true` wird `false` und umgekehrt)
`&&`                 | Logisches bedingtes Und  | Ergebnis nur dann `true`, wenn beide Operanden `true`
&#124;&#124;         | Logische bedingtes Oder  | Ergebnis ist `true`, wenn mindestens einer der beiden Operanden `true`
`^`                  | Exklusives Oder (XOR)    | Ergebnis ist `true`, wenn _genau_ einer der beiden Operanden `true`

> #### TODO
>
> - Ändert das Programm aus dem letzten TODO so ab, dass wenn die erste Zahl größer drei und die zweite Zahl gleich 6 sechs
>   ist, der Text "Du hast gewonnen" ausgegeben wird. Ansonsten soll "Leider verloren" ausgegeben werden.

### `switch` / `case`

Statt einer aus zwei Möglichkeiten soll manchmal eine aus mehreren Möglichkeiten ausgewählt werden. Beispielsweise
soll der Inhalt einer `number`-Variablen überprüft werden und für verschiedene mögliche Werte sollen verschiedene 
Aktionen ausgeführt werden. Ähnliches kann für den Inhalt einer `string`-Variablen gewünscht sein. Hier hilft die
`switch`/ `case` Anweisung, die sich leicht an einem Beispiel erklären lässt:

```TypeScript
let i: number = parseInt(prompt("Geben sie eine Zahl ein", "3"));
switch (i)
{
   case 1:
      console.log("Du hast EINS eingegeben");
      break;
   case 2:
      console.log("ZWEI war Deine Wahl");
      break;
   case 3:
      console.log("Du tipptest eine DREI");
      break;
   default:
      console.log("Die Zahl " + i + " kenne ich nicht");
      break;
}
```

> #### TODO
>
> - Verwendet o.a. Code in einem lauffähigen TypeScript-Programm und probiert es aus.
> - Erweitert den Code um einen weiteren Switch für eine Zahl eurer Wahl.
> - Ändert den Typ der Variablen `i` von `number` nach `string` und ändert die `case`-Labels, so dass
>   diese aus Strings bestehen.
> - Was passiert, wenn man an einer Stelle das `break` vergisst? Denkt euch Fälle aus, bei denen
>   das sinnvoll sein kann.
> - Versucht, die oben mit der `switch` / `case` Anweisung implementierte Funktionalität mit `if`/ `else`
>   Anweisungen zu implementieren. 

## Schleifen

Neben den Verzweigungen bilden die Schleifen ein weiteres wichtiges Konstrukt, um den 
Programmfluss zu beeinflussen. TypeScript kennt eine Reihe unterschiedlicher  Schleifen-Konstrukte

### `while`

Schleifen mit `while` haben folgenden Aufbau

```TypeScript
  while (<BEDINGUNG>)
  {
    // Schleifenrumpf
  }
```

Zu ***Beginn*** jedes Schleifendurchlaufs wird die Bedingung evaluiert. `<Bedingung>` muss dabei ein
Ausdruck sein, der einen `bool`'schen Wert ergibt, also wie bei `if` beispielsweise ein Vergleich
mit einem der Vergleichsoperatoren oder eine Kombination mehrerer `bool`'scher Werte, die mit logischen
Operatoren miteinander verknüpft sind.

Ergibt `<Bedingung>` den Wert `true`, wird der Schleifenrumpf (also alle Anweisungen, die zwischen
`{` und `}` stehen) einmal ausgeführt und dann wird erneut zum Beginn der `while`-Schleife verzweigt
und die Bedingung erneut überprüft. Das geschieht so lange, bis `<Bedingung>` den Wert `false`
ergibt: Dann wird der Schleifenrumpf nicht ausgeführt und der Programmfluss fährt mit der nächsten
Anweisung _nach_  dem Schleifenrumpf fort.

Insbesondere kann es passieren, dass der Rumpf einer `while`-Schleife  _gar nicht_ ausgeführt
wird, wenn gleich die erste Evaluierung von `<Bedingung>` den Wert `false` ergibt.

Viele `while`-Schleifen sind nach folgendem Muster aufgebaut:

```TypeScript
  <INITIALISIERUNG>;
  while (<BEDINGUNG>)
  {
    // Schleifenrumpf
    <INKREMENT>;
  }
```

_Vor_ der eigentlichen Schleife befindet sich eine Anweisung (hier `<INITIALISIERUNG>` genannt), in 
der die Voraussetzung für die allererste Überprüfung der `<BEDINGUNG>` geschaffen wird.

Als letzter Schritt im Schleifenrumpf befindet sich eine Anweisung, die einen Teil der zu überprüfenden
Bedingung verändert, dieser Schritt wird `<INKREMENT>` genannt.

> #### TODO
>
> - Erzeugt ein TypeScript Programm, das in einer `while`-Schleife die Zahlen von 1 bis 10 auf der Konsole
>   ausgibt. 
> - Wie lauten hier die Teile `<INITIALISIERUNG>`, `<BEDINGUNG>` und `<INKREMENT>`?

### `for` 

Eine abkürzende bzw. übersichtlichere Schreibweise für die oben angegebene typische Aufteilung 
einer `while`-Schleife mit vorangehendem Initialsierungsteil und Inkrement-Teil am Ende des
Schleifenrumpfes bietet das Schleifenkonstrukt mit `for`, das folgendermaßen aussieht:

```TypeScript
  for (<INITIALISIERUNG>; <BEDINGUNG>; <INKREMENT>)
  {
    // Schleifenrumpf
  }
```

Wie man sieht, sind hier die drei häufig in `while`-Schleifen vorkommenden Bestandteile in 
den Schleifenkopf gerückt. Somit wird optisch die eigentliche "Schleifenmechanik" vom
inhaltlichen Schleifenrumpf getrennt. Die Ausführung der gesamten Schleife mit
allen Bestandteilen unterscheidet sich aber in nichts von der
äquivalenten Konstruktion weiter oben mit `while`.

Ein häufig vorkommender Anwendungsfall für Schleifen ist das Durchlaufen eines Arrays:

```TypeScript
  let someStrings: string[] = 
  {
    "Hier",
    "sehen",
    "wir",
    "einen",
    "Array",
    "von",
    "Strings"
  };
  
  for (let i: number = 0; i < 5; i++)
  {
    console.log(someStrings[i]);
  }
```

> #### TODO
>
> - Lasst o.a. Code laufen. Was tut er?
> - Wandelt die `for`-Schleife in eine `while`-Schleife um
> - Lasst statt der erste 5 _alle_ in `someStrings` gespeicherten Werte ausgeben, indem
>   die Bedingung statt eines konstanten Wertes die jeweilige Anzahl der Inhalte von 
>   `someStrings` ausgibt (geht mit `someStrings.Length`).

### Schleifenausstieg / Zeitpunkt der Bedingungsprüfung

Beide Konstrukte, `while`- und `for`-Schleifen treffen die Entscheidung, ob mit
der Schleifenbearbeitung fortgefahren (bzw. begonnen) wird, _vor_ der ersten
Anweisung im Schleifenrumpf. Dies ist der häufigste Anwendungsfall. Prinzipiell lassen
sich alle Schleifen-Anwendungen so konstruieren, dass die Bedingung zu Beginn
überprüft wird

Es gibt aber Fälle, in denen ein Überprüfen der Schleifenbedingung und 
ein möglicher nachfolgender Abbruch zu schlankerem oder eleganterem Code führt.
In TypeScript gibt es für diese Fälle zum einen das `do while`-Konstrukt und zum anderen
die Möglichkeit, mit einer `if`-Anweisung an einem beliebigen Punkt innerhalb
des Schleifenrumpfes eine Abbruchbedingung abzufragen und, wenn diese gegeben ist, 
mit `break` die Schleife zu verlassen.

#### Schleife mit `do while`

```TypeScript
  let i: number  = 0;
  do
  {
    console.log(someStrings[i]);
    i++;
  }
  while (i < 5);
```

#### Schleife mit `break`

```TypeScript
  let i: number = 0;
  while (true)
  {
    console.log(someStrings[i]);
    if (i >= 4)
      break;
    i++;
  }
```

> #### TODO
>
> - Lasst die obigen Beispiele für `do while` und `break` mit dem Array aus dem `for`-Beispiel laufen
>   und überzeugt Euch, dass die gleiche Ausgabe erzeugt wird.
> - Sind die beiden Beispiele wirklich äquivalent zur `for`-Schleife? 
>   - Verändert in allen drei Fällen die Abbruchbedingung so, dass _alle_ Array-Einträge ausgegeben
>     werden und zwar in Abhängigkeit von der Anzahl der Array-Einträge (`someStrings.Length`).
>   - Was passiert in den drei Fällen, wenn `someStrings` _keine_ Einträge enthält?


### `foreach`

Wie in oben angegebenen Beispielen auch, ist einer der häufigsten Anwendungsfälle für Schleifen, 
in _Kollektionen_ von Daten, wie z.B. Arrays, einen Eintrag nach dem anderen abzuarbeiten.

In Arrays kann das, wie im Beispiel oben, über einen Index (meistens `i` genannt) passieren, mit
dem dann innerhalb des Schleifenrumpfes auf den jeweiligen Array-Eintrag zugegriffen wird. Die
hierzu notwendige _Index-Arithmetik_ (Initialisieren mit 0, Inkrementieren am Ende) ist zwar nicht
sehr aufwändig, bedeutet aber dennoch einerseits einen gewissen Aufwand und andererseits Kenntnisse über den internen Aufbau eines Arrays (Zugriff auf einzelne Elemente über `[]`). Eine abkürzende Schreibweise für
das Iterieren über die Inhalte von _Kollektionen_ wie Arrays kann mit der `foreach`-Anweisung
implementiert werden:

```TypeScript
  for (let s: string of someStrings)
  {
    console.log(s);
  }
```

> #### TODO
>
> - Diskutiert Vor- und Nachteile der Schleifenkonstruktion mit `for` aus dem Beispiel oben
>   gegenüber dem Beispiel mit `foreach` hinsichtlich 
>   - Klarheit
>   - Schreibaufwand
>   - Flexibilität (was ist mit Zugriffen in umgekehrter Reihenfolge, Zugriff nur auf die ersten
>     paar Einträge, ...)

### Ausblick

Neben Arrays werden wir bald noch weitere Datentypen kennen lernen, die es erlauben, eine Menge von 
Werten gleichen Typs abzuspeichern. Bei manchen dieser so genannten _Kollektionen_ kann nicht über
einen Index auf die Inhalte zugegriffen werden - daher funktioniert dort _ausschließlich_ der Zugriff
über `foreach`. Es gibt sogar die Möglichkeit, eigene Datentypen zu definieren, auf deren Inhalte dann
mit `foreach` zugegriffen wird - Stichwort ***Enumeratoren***.










