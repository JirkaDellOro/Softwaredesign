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
  `double ist ein Fließkomma-Datenyp. Ein Double-Wert benötigt 64 bit. Weitere Nachkommastellen
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
- Jede Variable ist von einem fest zugeordneten Datentyp, der zur Compilezeit fest steht
  und sich während des Programmlaufs nicht ändern kann. Üblicherweise wird der Typ
  in der Deklaration angegeben.
  
Diese Regeln machen C# zu einer so genannten _stark typisierten_ Sprache. Es gibt Programmiersprachen, die 
eine solche starke Typisierung nicht fordern (z.B. JavaScript, eine schwach typisierte Sprache). Für beide
Varianten gibt es Vor- und Nachteile.

### Regeln für die Wahl von Identifizierern

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
der zu _initialisiernde_ Wert mit dem _Zuweisungsoperator_ (`=`) angegeben wird. Hier ein paar Beispiele

```C#
int i = 42;
double pi = 3.1415;
string salute = "Hello, World";
```

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
>   Wie muss die Initialisierung lauten, um den Typ der Variablen zu `double`, `float` oder `short` zu ändern?
>   **TIPP**: Seht Euch o.A. 
>   [Referenzdokumentation](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/built-in-types-table)
>   zu den eingebauten Datentypen an und lest Euch durch, wie zu den jeweiligen Typen die Konstanten (englisch _Literals_)
>   gebildet werden: Was unterscheidet eine `int`-Konstante von einer `double`-Konstanten?

