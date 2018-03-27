# Programmieren in C#

## Einführung

### Ein wenig Geschichte

**C#** (gesprochen "C Sharp") wurde im Jahre 2000 unter der Leitung von Anders Hejlsberg als
Bestandteil von Microsoft's .NET Initiative ins Leben gerufen. Hintergrund war der große
Erfolg rund um die 1995 von SUN veröffentlichte Programmiersprache **Java**, dem Microsoft 
eine eigene Entwicklung entgegen setzen wollte.

Inzwischen ist die Sprache durch die ECMA standardisiert. Zudem gibt es eine Reihe von
OpenSource Implementierungen sowohl von C# Compilern, die in C# geschriebenen Quelltext 
in ausführbaren Code übersetzen als auch der .NET-Plattform, die in einer umfangreiche
Klassen- und Funktionsbibliothek für eine Vielzahl von typischen Alltags-Aufgaben 
in der Software-Entwicklung vorgefertigte Implementierungen enthält.

Zudem gibt es mit Microsoft Visual Studio Community, Microsoft Visual Studio Code,
Jetbrains Rider und MonoDevelop eine Reihe von kostenpflichtigen, kostenlosen oder
sogar OpenSource Entwicklungsumgebungen, die die Erstellung von Software mit C#
unterstützen.

### Werkzeuge

In dieser Veranstaltungverwenden wir folgende setzen wir folgende Werkzeuge ein, die allesamt
kostenlos, OpenSource und plattformübergreifend (Windows, MacOS, Linux) sind.

- Visual Studio Code (Integrierte Entwicklungsumgebung / Editor)
- C# for Visual Studio Code (Extension für Visual Studio Code zur C# Entwicklung)
- .NET Core (Plattform und Compiler)

## Eingebaute Datentypen

Wie viele andere Sprachen auch, enthält C# eine reihe von einfachen Datentypen, 
die häufig verwendet werden. Diese werden oft auch _primitive Datentypen_ genannt.
Die in C# fest eingebauten primitiven Datentypen sind:

- `int` und alle anderen integralen Datentypen zum Speichern von ganzen Zahlen (ohne
  Nachkommastellen). Weitere integrale Typen sind 
  - `uint` (_**u**nsigned_: Werte >= 0) - benötigt wie `int` in 32 bit Speicherplatz
  - `short` und `ushort`, signed und **u**nsigned - benötigt 16 bit Speicherplatz
  - `byte` und `sbyte`, unsigned und _**s**igned_ - benötigt 8 bit Speicherplatz
  - `long` und `ulong`, signed und **u**nsigned - benötigt 64 bit Speicherplatz

- `double` und alle anderen Datentypen, die Zahlen mit Nachkommastellen speichern können.
  `double ist ein Fließkomma-Datentyp. Ein Double-Wert benötigt 64 bit. Weitere Nachkommastellen
  behaftete Datentypen sind
  - `float` Fließkommazahl "einfacher" Genauigkeit - benötigt 32 bit Speicherplatz
  - `decimal` Festkommazahl mit hoher Genauigkeit - benötigt 128 bit Speicherplatz

- `bool` zum Speichern von Wahrheitswerten. Eine Variable vom Typ `bool` kann nur
  einen von zwei möglichen Werten annehmen, nämlich `true` (wahr) oder `false` (falsch).

- `char` zum Speichern eines einzelnen Zeichen (z.B. `'a'`, `'b'`, `'c'`, ...) im 
   Unicode-Standard - benötigt 16 bit Speicherplatz.

- `string` zum Speichern beliebig langer (0 oder mehr `char` enthaltenden) Zeichenketten.

> #### TODO
> 
> Betrachtet die 
> [Referenzdokumentation](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/built-in-types-table)
> zu den eingebauten Datentypen und die von dort aus in die einzelnen Typen verzweigenden Links.
>
> - Wieviel _bytes_ Speicherplatz benötigen die o.a. numerischen Datentypen jeweils?
> - Wieviel Speicherplatz in bytes benötigt die Zeichenkette `"Hello, World"` ? 
> - Vergleicht den Umfang der darstellbaren Zahlen zwischen `int` und `short`, sowie zwischen `float` und `double`.
>   Wie groß ist jeweils der größte und der kleinste Wert? Wie groß ist der kleinste _positive_ mit `float`
>   darstellbare Wert?
> - Was heißt Fließkommazahl und was heißt Festkommazahl? Für welchen Anwendungsbereich ist `decimal` besonders
>   geeignet? Warum? 

## Variablendeklarationen

In C# können Variablen im Programmcode mit folgender Syntax deklariert werden:

```C#
typ identifizierer;
```

Dabei gibt `typ` den Datentyp an, also z.B. einen der o.g. eingebauten Datentypen. `identifizierer` ist dabei der
frei wählbare Variablenname. In C# gilt:

- Jede verwendete Variable ***muss*** zuvor deklariert worden sein.
- Jede Variable ist von einem fest zugeordneten Datentyp, der zur Compile-Zeit fest steht
  und sich während des Programmlaufs nicht ändern kann. Üblicherweise wird der Typ
  in der Deklaration angegeben.
  
Diese Regeln machen C# zu einer so genannten _stark typisierten_ Sprache. Es gibt Programmiersprachen, die 
eine solche starke Typisierung nicht fordern (z.B. JavaScript, eine schwach typisierte Sprache). Für beide
Varianten gibt es Vor- und Nachteile.

### Regeln für Identifizierer

Für die Wahl von Variablennamen und anderen Identifizierern gibt es folgende Regeln:

- Das erste Zeichen muss ein Buchstabe oder der Unterstrich (`'_'`) sein. Insbesondere darf
  das erste Zeichen eines Identifizierers _keine_ Ziffer (`'0'`...`'9'`) sein.
- Alle weiteren Zeichen dürfen Buchstaben, Ziffern oder  der Unterstrich (`'_'`) sein.
- Als Identifizierer darf ***kein*** 
  [C#-Schlüsselwort](https://docs.microsoft.com/de-de/dotnet/csharp/language-reference/keywords/)
  verwendet werden.

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

```C#
int i = 42;
double pi = 3.1415;
string salute = "Hello, World";
```

In allen obigen Fällen werden die Variablen mit Konstanten initialisiert. C# schreibt vor, welches Format
Konstanten haben müssen, um einem der eingebauten Typen zu genügen.

### Typ Inferenz

Wenn zur ***Compile***-Zeit der Typ automatisch erkannt werden kann (per sogenannter Typ-Inferenz), kann die
Deklaration statt eines Typ-Namens das Schlüsselwort `var` verwenden. Das ist aber nur "syntaktischer Zucker"
und ändert nichts an der Funktionsweise des Programms. Der einzige Unterschied ist, dass der Compiler (zur 
Compile-Zeit) anhand des zugewiesenen Typs herausfindet, von welchem Typ die Variable sein muss und diesen
Typ dann verwendet, ohne dass ein Programmierer diesen Typ explizit hinschreiben muss.

> #### TODO
>
> - Erzeugt in Visual Studio Code ein neues C#-Projekt und fügt oben stehende Deklarationen und
>   Initialisierungen der Variablen `i`, `pi`, und `salute` ein.
> - Verändert die Deklarationen so, dass `var` statt der Typen verwendet wird und überzeugt Euch, 
>   dass der Compiler den Code korrekt übersetzt.
> - Mit der Deklaration/Initialisierung `var variable = 0;` wird `variable` durch Typ Inferenz zu einer `int`-Variablen.
>   Wie muss die Initialisierung lauten, um den Typ der Variablen zu `double`, `float` oder `short` zu ändern, ohne
>   dass der konkrete Typ statt `var` hingeschrieben wird (`var` soll stehen bleiben)?
>   **TIPP**: Seht Euch o.A. 
>   [Referenzdokumentation](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/built-in-types-table)
>   zu den eingebauten Datentypen an und lest Euch durch, wie zu den jeweiligen Typen die Konstanten (englisch _Literals_)
>   gebildet werden: Was unterscheidet eine `int`-Konstante von einer `double`-Konstanten?

## Arrays

Wie in anderen Programmiersprachen auch, gibt es auch in C# die Möglichkeit, über nur _einen_ Variablennamen
auf _viele_ Werte gleichen Typs zuzugreifen, indem mit Hilfe eines _index_, also einer Zahl, bestimmt wird,
auf welchen der vielen möglichen Speicherplätze, die sich hinter dem einen Variablennamen verstecken,
zugegriffen wird. Wie in anderen Programmiersprachen auch, heißen solche Konstrukte ***Arrays***.

Jeder beliebige Datentyp kann zu einem Array-Datentyp gemacht werden, indem diesem eckige Klammern (`[` und `]`) 
hintenangestellt werden. Der Grund-Datentyp gibt dann an, von welchem Typ _ein_ Array-Eintrag ist.
Hier ein paar Beispiele:

Grund-Typ   | Array-Typ
------------|--------------
`int`       | `int[]`
`char`      | `char[]`
`double`    | `double[]`
...         | ...

### Deklaration von Array-Variablen

Bei der Deklaration von Array-Variablen muss, nach o.a. Schema `typ identifizierer;` zusätzlich auch noch
angegeben werden, wieviel Speicherplätze des Grund-Typs durch den Variablennamen (den `identifizierer`)
verwendbar sein sollen. Dies geschieht durch eine Initialisierung, bei der der die gewünschte Anzahl angegeben
wird. Betrachtet folgenden Code:

```c#
    int[] ia = new int[10];
    char[] ca = new char[30];
    double[] da = new double[12];
```

> #### TODO
>
> - Im o.a. Code-Schnipsel werden drei Array-Variablen deklariert und initialisiert. Wie heißen die Variablen, 
>   was ist der jeweilige Grund-Typ und wieviel Speicherplätze sind jeweils reserviert worden?

**Achtung**: _Initialisierung_ bedeutet in oben stehendem Abschnitt zunächst mal nur, dass die gewünschte
Anzahl Speicherplätze reserviert wird. Damit ist noch nicht festgelegt, welcher Wert in welchem der
Speicherplätze steht. Allerdings gibt es auch dafür, also das initiale Vorbelegen der einzelnen Array-
Speicherplätze mit Werten, eine spezielle Schreibweise:

### Initialisierung von Arrays mit Werten

Folgende Syntax ist zulässiger C# Code:

```c#
    int[] ia = {1, 0, 2, 9, 3, 8, 4, 7, 5, 6};
```

Es ist eine abkürzende Schreibweise dafür, dass die Variable `ia` als Array für `int`-Werte deklariert wird, 
unter diesem Variablennamen Platz für zehn `int`-Werte reserviert wird und in die zehn Speicherplätze die
Zahlen in der angegebenen Reihenfolge gespeichert werden. Ohne Abkürzung hätte Folgendes codiert werden 
müssen:

```c#
    int[] ia = new in[10];
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
> ```C#
>   int ergebnis = ia[2] * ia[8] + ia[4];
> ```
> - Was steht in der Variablen `ergebnis`? 
>
> Überprüft eure Annahme, indem ihr den Code (mit der vorangegangenen Initialisierung) in einem
>  C#-Projekt laufen lasst. Den Inhalt der Variablen `ergebnis` könnt ihr mit
>  ```C#
>   Console.WriteLine(ergebnis);
>  ```
> auf der Konsole ausgeben oder bei angehaltenem Programm mit dem Debugger ansehen.
>
> - Erzeugt einen Array vom Grund-Typ `double`, der drei Speicherplätze enthält in denen in der 
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

Jede Array-Variable kann über die Eigenschaft `Length` abgefragt werden, 
wieviel Einträge der Array enthält.

> #### TODO
>
> - Gebt nach der Initialisierung des o.A. Arrays mit
>   `Console.WriteLine(ia.Length);`
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

In C# heißt der dazu verwendete Datentyp `string`.  Zunächst mal kann man sich einen
String als einen Array des Grund-Typ `char` vorstellen: Unter einem Variablennamen
ist eine geordnete Folge von `char`-Werten hinterlegt. Zusätzlich dazu bietet der 
Datentyp `string` noch eine ganze Reihe an Funktionalität, z.B.

- Leichte Initialisierung von String-Inhalten durch einfache Konstanten-Syntax 
  ```C#
  string meinString = "Dies ist ein String";
  ```
- Aneinanderhängen (_concatenation_) von Strings durch den `+` Operator
  ```C#
  string a = "Dies ist ";
  string b = "ein String";
  string c = a + b;
  ```
- Vergleich von String-Inhalten mit dem `==` Operator
  ```C#
  string a = "eins";
  string b = "zwei";
  string c = "eins";
  bool a_eq_b = (a == b);
  bool a_eq_c = (a == c);
  ```
Und tatsächlich funktioniert aber auch der Zugriff auf einzelne Zeichen wie auf
einzelne Einträge eines Arrays

  ```C#
  string meinString = "Dies ist ein String";
  char zeichen = meinString[5];
  ```

> #### TODO
>
> - Fügt den o.a. Beispielcode zu Strings einem C#-Projekt zu und überprüft jeweils
>   die Variableninhalte von `meinString`, `c`, `a_eq_b`, `a_eq_c` und `zeichen`
>   mit `Console.WriteLine` oder mit dem Debugger.

## Eigene Datentypen

Ein mächtiges Werkzeug vieler Programmiersprachen ist die Möglichkeit, sich eigene
Datentypen zu schaffen, indem diese aus bereits vorhandenen Datentypen zusammen gesetzt
(_aggregiert_) werden. Als Grundlage dienen die eingebauten Datentypen. Diese können zu 
komplexeren Datentypen zusammen gesetzt werden, die dann direkt verwendet werden 
(indem Variablen von diesen Typen erzeugt werden) oder diese wiederum als Bausteine für
das Aggregieren noch komplexerer Typen verwendet werden. 

In C# können, wie in vielen anderen Programmiersprachen auch, mit dem Schlüsselwort
`class` neue Datentypen erzeugt werden. Hier ein Beispiel

### Einen neuen Typen deklarieren

```C#
  public class Person
  {
      public string Name;
      public int Personalnummer;  
  }
```

Oben stehender Code erzeugt einen neuen Datentyp namens `Person`, indem dieser aus den 
bestehenden Datentypen `string` und `int` zusammen gesetzt wird. Jeder Wert vom Typ
`Person` besteht demnach aus einer Komponente `Name` vom Typ `string` und einer
Komponente `Personalnummer` vom Typ `int`. Derart selbst definierte Datentypen
heißen auch ***zusammengesetzte Datentypen***.

Dieser Typ kann nun überall dort verwendet
werden, wo auch eingebaute Datentypen verwendet werden, z.B. beim Deklarieren von
Variablen. 

### Eine Variable eines zusammengesetzten Typs deklarieren

Nach dem bekannten Schema zur Variablendeklaration (`typ identifizierer`) können
wir nun eine Variable vom Typ `Person` anlegen. Der Variablenname ist hier `jemand`:

```C#
  Person jemand;
```

### Variablen von zusammengesetzten Typen initialisieren

Wie schon bei Arrays muss bei zusammengesetzten Typen die Initialisierung in zwei Schritte
unterschieden werden:

1. Initialisierung der eigentlichen Variablen, damit Speicherplatz dafür angelegt wird.
   In C# genügt die o.a. Deklaration von `jemand` nicht, damit ich unter diesem Variablennamen
   den Namen und die Personalnummer einer Person speichern kann.
2. Initialisierung der Bestandteile der Zusammensetzung. Der Variablen `jemand` soll ein konkreter
   Name und eine konkrete Personalnummer zugewiesen werden.

Folgender Code führt die beiden Schritte hintereinander durch. Für Schritt 2 wird der 
Objekt-Zugriffs-Operator (`.`) verwendet.

```C#
  Person jemand = new Person();
  jemand.Name = "Horst";
  jemand.Personalnummer = 42;
```

In C# gibt es eine abkürzende Schreibweise für diese beiden Initialisierungsschritte. Mit einem
so genannten _Objektinitialisierer_ können die oben stehenden drei Zeilen zu folgender Zeile
zusammen gefasst werden:

```C#
  Person jemand = new Person {Name="Horst", Personalnummer=42};
```

Beachtenswert bei obiger Schreibweise ist die Verwendung der geschweiften Klammern im Unterschied
zu den runden und die Verwendung des Komma als Trennzeichen der Initialisierungsliste.

Nachdem nun die wichtigsten Merkmale von C# im Umgang mit Daten und Datenstrukturen erklärt wurden, 
sollen nun die rudimentären Kontrollstrukturen beschrieben werden

## Verzweigungen

Um in Abhängigkeit eines errechneten Wertes, der Eingabe eines Benutzers, einer von einem anderen
Rechner empfangenen Nachricht oder Ähnlichem Codezweige ausführen zu können, gibt in allen 
Programmiersprachen das Konstrukt der Verzweigung. 

### `if` / `else`

Wie in vielen anderen Sprachen auch, gibt es in C# die if/else Anweisung, die auf Grund eines
Wahrheitswertes (vom Typ `bool` - kann wahr oder falsch sein), einen von zwei möglichen
Code-Blöcken ausführt. Die allgemeine Syntax ist wie folgt:

```C#
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

Die `<BEDINGUNG>` ist dabei ein Ausdruck, der einen Wert vom Typ `bool` ergibt. Im einfachsten
Fall kann das einfach eine `bool`'sche Variable sein. Sehr oft wird aber ein Vergleichsoperator
verwendet. Im Folgenden eine Liste der in C# vorhandenen Vergleichsoperatoren. Für die Beispiele
seien

```C#
 int a = 3;
 int b = 3;
 int c = 4;
```

Vergleichsoperator   |  Bedeutung           | Beispiel
-----------|----------------------|--------------
`==`       | ist gleich           | `bool erg = (a == b); // erg ist true`
`<`        | kleiner              | `bool erg = (a < c);  // erg ist true`
`<=`       | kleiner oder gleich  | `bool erg = (a <= b); // erg ist true`
`>`        | größer               | `bool erg = (a < c);  // erg ist true`
`>=`       | größer oder gleich   | `bool erg = (a <= b); // erg ist true`

> #### TODO
>
> Mit folgendem Code lässt sich eine Integerzahl einlesen, die der Benutzer an der Konsole 
> eingibt (wird hier in `a`gespeichert)
> ```C#
> int a = int.Parse(Console.ReadLine());
> ```
>
> - Schreibt ein C#-Programm, das zwei Zahlen von der Konsole einliest. Diese sollen verglichen werden.
>   Ist die erste größer als die zweite, soll der Text "a ist größer als b" ausgegeben werden, ansonsten der Text
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
soll der Inhalt einer `int`-Variablen überprüft werden und für verschiedene mögliche Werte sollen verschiedene 
Aktionen ausgeführt werden. Ähnliches kann für den Inhalt einer `string`-Variablen gewünscht sein. Hier hilft die
`switch`/ `case` Anweisung, die sich leicht an einem Beispiel erklären lässt:

```C#
int i = int.Parse(Console.ReadLine());
switch (i)
{
   case 1:
      Console.WriteLine("Du hast EINS eingegeben");
      break;
   case 2:
      Console.WriteLine("ZWEI war Deine Wahl");
      break;
   case 3:
      Console.WriteLine("Du tipptest eine DREI");
      break;
   default:
      Console.WriteLine("Die Zahl " + i + " kenne ich nicht");
      break;
}
```

> #### TODO
>
> - Verwendet o.a. Code in einem lauffähigen C#-Programm und probiert es aus.
> - Erweitert den Code um einen weiteren Switch für eine Zahl Eurer Wahl.
> - Ändert den Typ der Variablen `i` von `int` nach `string` und ändert die `case`-Labels, so dass
>   diese aus Strings bestehen.
> - Was passiert, wenn man an einer Stelle das `break` vergisst? Denkt euch Fälle aus, bei denen
>   das sinnvoll sein kann.
> - Versucht, die oben mit der `switch` / `case` Anweisung implementierte Funktionalität mit `if`/ `else`
>   Anweisungen zu implementieren. 

Mit Version 7 von C# (erschienen im März 2017) hat die `switch` / `case` Anweisung ein paar mächtige Neuerungen
erfahren. Somit sind nun nicht mehr nur `int` und `string` Werte in der `switch`-Klammer evaluierbar, sondern
beliebige Ausdrücke, die dann in den `case`-Labels auf so genannte _Patterns_ überprüft werden können.

## Schleifen

Neben den Verzweigungen bilden die Schleifen ein weiteres wichtiges Konstrukt, um den 
Programmfluss zu beeinflussen. C# kennt eine Reihe unterschiedlicher  Schleifen-Konstrukte

### `while`

Schleifen mit `while` haben folgenden Aufbau

```C#
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

```C#
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
> - Erzeugt ein C# Programm, das in einer `while`-Schleife die Zahlen von 1 bis 10 auf der Konsole
>   ausgibt. 
> - Wie lauten hier die Teile `<INITIALISIERUNG>`, `<BEDINGUNG>` und `<INKREMENT>`?

### `for` 

Eine abkürzende bzw. übersichtlichere Schreibweise für die oben angegebene typische Aufteilung 
einer `while`-Schleife mit vorangehendem Initialsierungsteil und Inkrement-Teil am Ende des
Schleifenrumpfes bietet das Schleifenkonstrukt mit `for`, das folgendermaßen aussieht:

```C#
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

```C#
  string[] someStrings = 
  {
    "Hier",
    "sehen",
    "wir",
    "einen",
    "Array",
    "von",
    "Strings
  };
  
  for (int i = 0; i < 5; i++)
  {
    Console.WriteLine(someStrings[i]);
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
In C# gibt es für diese Fälle zum einen das `do while`-Konstrukt und zum anderen
die Möglichkeit, mit einer `if`-Anweisung an einem beliebigen Punkt innerhalb
des Schleifenrumpfes eine Abbruchbedingung abzufragen und, wenn diese gegeben ist, 
mit `break` die Schleife zu verlassen.

#### Schleife mit `do while`

```C#
  int i = 0;
  do ( )
  {
    Console.WriteLine(someStrings[i]);
    i++;
  }
  while (i < 5);
```

#### Schleife mit `break`

```C#
  int i = 0;
  while (true)
  {
    Console.WriteLine(someStrings[i]);
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

```C#
  foreach (string s in someStrings)
  {
    Console.WriteLine(s);
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










