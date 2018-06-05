
# Modularisierung

## Was sind Module?

In der Softwareentwicklung beschreibt der Begriff ***Modul*** eine Einheit, in der ausführbarer Programmcode
zusammengefasst ist. Wie bei vielen Begriffen gibt es in der Software-Entwicklung unterschiedliche Auffassungen
und Definitionen. 

> #### TODO
> 
> - Sucht nach Begriffsdefinitionen für ***Modul*** im Web.
> - Findet Definitionen, die ihr versteht und erklärt Euch diese gegenseitig.
> - Findet Definitionen, die ihr **nicht** versteht und formuliert Fragen.

Viele Definitionen lassen sich einer von zwei Kategorien zuordnen.

1. Module aus technischer Sicht
2. Module aus konzeptioneller Sicht

### Technische Aspekte von _Modulen_

Jede Kombination aus Programmiersprache und Entwicklungsumgebung bietet die technischen Grundlagen, 
Programmcode in modulare Einheiten aufzuteilen. Begriffe, die hier oft synonym mit
_Modul_ gebraucht werden, sind

- Library / Bibliothek
- Assembly / Archive
- Komponente
- Package
- Namespace

Verschiedene Programmiersprachen / Entwicklungsumgebungen bieten bei folgenden Sachverhalten auf technischer
Ebene Unterstützung, um Software zu modularisieren.

- Zusammenfassen von Code in einer Einheit während der Erstellung (Build)
- Auflösen von Abhängigkeiten von anderen Modulen während der Erstellung (Build)
- Auflösen von Abhängigkeiten von anderen Modulen zur Laufzeit (Dependency Injection)
- Bereitstellung von Modulen für Konsumenten (Deployment)
- Automatisiertes, web-basiertes Laden von abhängigen Paketen (Package-Management / Paketverwaltung)

### Konzeptionelle Aspekte von _Modulen_

Rund um die Frage "Was gehört in ein Modul" gibt es eine Reihe von konzeptionellen Aspekten. Mit Modularisierung 
können folgende Ziele verfolgt werden:

- ***Komplexität verringern***. Es kann sinnvoll sein, Module nach Funktionalitätszugehörigkeit zu 
  zu gruppieren. Beispiel: In einem umfangreichen Software-Paket sind sämtliche Klassen und Methoden, 
  um Pixel-bilder zu laden, zu speichern und zu verändern, in einem Modul zusammengefasst. Andere Module,
  die mit Pixelbildern umgehen, können das Pixelbild-Modul referenzieren. Benötigt ein anderes Modul keine
  derartige Funktionalität, muss es auch keine Abhängigkeit geben. 

- ***Arbeitsteilig vorgehen***. Es kann sinnvoll sein, die an einem Software-Paket beteiligten Entwickler
  so aufzuteilen, dass in kleineren Gruppen an Modulen gearbeitet wird. Dadurch entstehen feste Zuständigkeiten
  ("Für Modul XY ist Entwickler AB zuständig").

- ***Schichtenarchitektur***. Viele Applikationen trennen ihre Funktionalität in unterschiedliche Schichten, bei denen
  Abhängigkeiten nur von einer oberen Schicht in die jeweils nächst-tiefere Schicht existieren. Am bekanntesten ist
  die Drei-Schichten-Architektur, die als unterste Schicht die *Datenhaltung*, als mittlere Schicht die *Logik*, also 
  die eigentlichen Algorithmen enthält und als oberste eine *Presentation*-Schicht, die die Interaktion mit Benutzern
  übernimmt. Module sind sinnvollerweise einer bestimmten Schicht zu geordnet. Möglicherweise gibt es auch nur ein
  Modul pro Schicht.

- ***Austauschbare Komponenten***. Ein Modul kann dann durch ein anderes Modul ersetzt werden, wenn das neue
  Modul dieselben Schnittstellen hat, wie das alte. Damit lässt sich z.B. eine Modul-weise Versionierung erreichen,
  aber auch z.B. Portierbarkeit von Software auf andere Plattformen bewerkstelligen, wenn z.B. die Anbindung
  an eine bestimmte Plattform (Hardware, Betriebssystem, ...) sauber in einem Modul gekapselt ist.

- ***Wiederverwendbarkeit***. Module mit fest definiertem Funktionsumfang können in unterschiedlichen Applikationen
  wiederverwendet werden. Statt die gleiche Funktionalität in mehreren Applikationen implementieren und pflegen zu müssen,
  kann die Funktionalität zentral entwickelt und gewartet werden.

- ***Internationalisierung/Lokalisierung***. Sämtliche sprach-abhängigen Bestandteile einer Software können in 
  austauschbaren Modulen gekapselt werden. Für die Erzeugung von unterschiedlichen Sprachversionen einer Software 
  (Word in deutsch, Word in koreanisch), genügt es, die sprach-abhängigen Module für die jeweilige Zielsprache
  zu lokalisieren und auszutauschen. 

- ***Einkaufen statt selber machen***. Für unterschiedliche Funktionalität gibt es oft schon kommerzielle oder
  OpenSource Module. Hier bietet es sich an, ein Modul eines Fremdherstellers anzubinden, statt die benötigte
  Funktionalität selbst zu entwickeln.

> #### TODO
> - (Er-)findet eigene Beispiele für die oben genannten Modularisierungsziele und erläutert Euch
>   diese gegenseitig.
> - Erklärt euch gegenseitig für jedes der oben genannten Modularisierungsziele, warum es von Vorteil
>   sein kann, dieses Ziel zu haben.
> - Durchsucht die auf euren Rechnern installierten Applikationen (In Windows meist unter "C:\Program Files" und "C:\Program Files (x86)").
>   Größere Programme bestehen meist aus einem Hauptprogramm (unter Windows .exe) und mehreren Unter-Modulen (Windows: .dll, MAC: .dylib oder .so).
>   Kann man anhand der Dateinamen schon erklären, wozu ein Modul gut ist? Welchen der o.g. Modularisierungsziele lassen sich erkennen?
> - Lest den Wikipedia-Artikel zu [n-Tier-Architecture](https://en.wikipedia.org/wiki/Multitier_architecture) und formuliert Fragen.



## Techniken der Modularisierung

### Software Module in C# / .NET

#### Allgemeines

In C# / .NET kann ausführbarer Code in einzelne so genannte ***Assemblies*** aufgeteilt werden. Ein Assembly
ist entweder eine ausführbare Datei (.exe) oder eine binäre Code-Bibliothek (.dll). Eine .exe-Datei besitzt 
immer eine statische Main-Methode, die den Startpunkt der Ausführung beim Starten des Programmes kennzeichnet.

Eine Assembly kann beliebig viele Datentypen (Klassen, Structs, Enums, Delegates) enthalten, die in beliebig 
vielen Namespaces untergebracht sein können - gleichzeitig können mehrere Assemblies auch jeweils 
unterschiedliche Datentypen in einem gemeinsamen Namespace enthalten. Per Konvention wird oft eine 
1:1-Zuordnung zwischen Assembly Namespace gefordert.

#### Assemblies erzeugen

Software-Entwickler erstellen Assemblies in C#-Projekten. Pro Assembly gibt es meist ein eigenes C#-Projekt in
einem eigenen Verzeichnis, unterhalb dessen sich die C#-Projektdatei (.csproj) und die zum Modul gehörenden
Source-Code-Dateien (.cs) befinden. Während des Build-Prozesses wird der Source-Code compiliert und daraus
entsteht eine ausführbare Assembly. Ob dabei eine .dll oder eine .exe-Datei entsteht, hängt vom Projekttyp ab.

#### Assemblies referenzieren

Um aus einer Assembly auf Datentypen einer anderen Assembly zugreifen zu können, sind zwei Dinge nötig:

1. Das Projekt (.csproj-Datei) des referenzierenden Projektes muss eine Referenz auf die verwendete
   Assembly oder das Projekt enthalten. 

2. Falls der verwendete Datentyp im referenzierten Modul in einem anderen Namespace liegt, als der
   aufrufende Code im referenzierenden Modul, muss entweder der vollständige Name des Datentyps
   inklusive vorangestelltem Namespace verwendet werden, oder eine `using` Anweisung am Anfang der
   Datei den verwendeten Namespace bekannt machen.


Es soll ein kleiner Beispiel-Rechner implementiert werden, der es erlaubt, an der Konsole eine
Rechnung einzugeben. Diese besteht immer aus zwei Integer-Zahlen `left` und `right`, in deren
Mitte ein Operator-Symbol stehen darf, z.B. `+`, `-`...

> #### TODO
>
> - Erzeugt mit `dotnet new console` ein neues Projekt in einem Unterverzeichnis Namens _Calculator_. 
> - Fügt folgenden Code als Hauptprogramm ein
> ```C#
>   class Program
>    {
>        static void Main(string[] args)
>        {
>            Console.WriteLine("Welcome to the Calculator. Start entering calculations!");
>            for (;;) // ever
>            {
>                Console.Write("> ");
>                string command = Console.ReadLine();
>                if (command.ToLower() == "exit")
>                    break;             
>                int left = 0;
>                int right = 0;
>                int opInx = FindFirstNonDigit(command);
>                if (opInx < 0)
>                    Console.WriteLine("No operator specified");
>                char opSymbol = command[opInx];
>                try
>                {
>                    left = int.Parse(command.Substring(0, opInx));
>                    right = int.Parse(command.Substring(opInx + 1));
>                }
>                catch (Exception)
>                {
>                    Console.WriteLine("Error parsing commmand");
>                }
>
>                Console.WriteLine($"Calculating {left} {opSymbol} {right}...");
>                // TODO: Perform calculation here.
>            }
>        }
>
>        private static int FindFirstNonDigit(string s)
>        {
>            for (int i = 0; i < s.Length; i++)
>            {
>                if (!Char.IsDigit(s[i]))
>                    return i;
>            }
>            return -1;
>        }        
>    }
> ```   
> - Lasst das Programm laufen und analysiert die Funktionsweise mit dem Debugger.
>   Damit beim Debuggen die Methode `Console.Readline()` funktioniert, muss
>   in den Debug-Launch-Einstellungen (Datei `.vscode/launch.json`) als Konsole das 
>   "externalTerminal" angegeben werden: `"console": "externalTerminal",`).
> - Implementiert das `TODO` am Ende der `for(;;)`-Schleife: Fragt in einer 
>   `switch`-`case`-Anweisung ab, welches Operator-Symbol eingegeben wurde 
>   (z.B. `+`, `-`, `*` oder `/` ). 
>   und fügt Code ein, der die Berechnung durchführt und das Ergebnis ausgibt.
>   Hier der Beispiel-Code für die Addition (`+`):
>
>```C#
>       int result;
>       switch(opSymbol)
>       {
>         case '+':
>           result = left + right;
>           break;
>         // TODO: Other operations here.
>       }
>       Console.WriteLine($"... = {result}");
>```

Nun kann es wünschenswert sein, einige Rechenoperationen in andere Module auszulagern,
z.B., weil diese Operationen nicht nur von unserem `Calculator` benötigt werden, sondern
auch noch von anderen Modulen.

> #### TODO
> 
> - Erzeugt ein weiteres Unterverzeichnis neben `Calculator` mit dem Namen `Operations`
> - Im Unterverzeichnis, erzeugt eine neue Klassenbibliothek gleichen Namens mit
>   dem Kommando `dotnet new classlib`. Es wurde ein neues C#-Projekt angelegt mit
>   einer neuen Quellcode-Datei namens `Class1.cs`. 
> - Benennt sowohl die Datei als auch die dort enthaltene Klasse von `Class1` in `Ops` um.
> - Fügt ein paar Operationen als statische Methoden in die Klasse `Ops` ein, die jeweils 
>   zwei Parametern vom Typ `int` entgegen nehmen und das Ergebnis als Rückgabewert ebenfalls
>   vom Typ `int` zurückliefern, zum Beispiel `Power` (potenzieren) und `GreatestCommonDenominator` 
>   (Größter gemeinsamer Teiler):
> 
>```C#
>    public class Ops
>    {
>        public static int Power(int a, int exp)
>        {
>            int result = 1;
>            for(int i=0; i<exp; i++)
>                result *= a;
>            return result;
>        }
>
>        public static int GreatestCommonDenominator(int a, int b)
>        {
>            if (a < b)
>            {
>                int tmp = a; a=b; b=tmp;
>            }
>            while (b > 0)
>            {
>                int c = a % b; a = b; b = c;
>            }
>            return a;
>        }
>    }
>```
> - Erstellt eine .dll-Datei aus dem Quellcode mit `dotnet build`. Dadurch sollte die Datei 
>   `Operations.dll` im Unterverzeichnis `bin\Debug\netstandard2.0` erzeugt werden. Diese
>   enthält nun die beiden Methoden der Klasse `Ops` im Namespace `Operations`. 

Wir haben nun zwei Module: Das Hauptprogramm `Calculator` und die Berechnungs-Bibliothek `Operations`.
Nun wollen wir aus dem Rechner auf die Operationen zugreifen. Dazu müssen wir als erstes dem Projekt 
`Calculator` beibringen, dass es auf Code aus `Operations` zugreifen soll. Das geht auf zwei Varianten:

1. ***Verweis auf die DLL***. Diese Variante kommt zum Einsatz, wenn nur die fertig erstellte, binäre
   DLL vorhanden ist und wir keinen Zugriff auf den Source-Code eines zu referenzierenden Moduls haben.
   Z.B. wenn wir als Autoren des Projektes `Calculator` die Bibliothek `Operations.dll` von einem 
   Software-Hersteller gekauft hätten, ohne den Source-Code dazuzubekommen.


2. ***Verweis auf das Projekt***. Werden referenzierendes und referenziertes Projekt gleichzeitig
   entwickelt, kann das referenzierende Projekt (`Calculator.csproj`) einen Verweis auf das Projekt
   des referenzierten Moduls (`Operations.csproj`) bekommen.


> #### TODO
>
> - Versucht beide o.g. Arten der Projektreferenzen aus. Es muss jeweils ein Eintrag in die
>   Datei `Calculator.csproj` hinzugefügt werden:
> 
>   - Für einen Verweis auf die Dll ein `Reference`-Eintrag:
>   ```XML
>     <ItemGroup>
>       <Reference Include="..\Operations\bin\Debug\netstandard2.0\Operations.dll"/>
>     </ItemGroup>>      
>   ```
>
>   - Für einen Verweis auf das Projekt ein `ProjectReference`-Eintrag:
>   ```XML
>     <ItemGroup>
>       <ProjectReference Include="..\Operations\Operations.csproj"/>
>     </ItemGroup>>      
>   ```

Mit beiden Arten der Referenzierung sollte es dann möglich sein, aus dem `Calculator`-Hauptprogramm
auf die Klasse `Ops` und deren Methoden zuzugreifen.

> #### TODO
>
> - Erweitert die `switch`-`case`-Anweisung um die beiden Operatoren `^` und `#`, die die 
>   Operationen `Power` und `GreatestCommonDenominator` ausführen. Die vollständige
>   `switch`-`case`-Anweisung sollte dann in etwa so aussehen:
>   ```C#
>     int result = 0;
>     switch (opSymbol)
>     {
>         case '+': result = left+right; break;
>         case '-': result = left-right; break;
>         case '*': result = left*right; break;
>         case '/': result = left/right; break;
>         case '^': result = Operations.Ops.Power(left, right); break;
>         case '#': result = Operations.Ops.GreatestCommonDenominator(left, right); break;
>     }
>     Console.WriteLine($"{left} {opSymbol} {right} = {result}");
>   ```

Um nicht jedes Mal den Namespace `Operations` beim Verwenden von Klassen aus dem gleichnamigen
Modul hinschreiben zu müssen, kann der Namespace in der Datei `Calculator\Program.cs` zu Beginn
mit einer `using`-Anweisung bekannt gemacht werden:

```C#
   using Operations;
 
   // ....

      case '^': result = Ops.Power(left, right); break;
      case '#': result = Ops.GreatestCommonDenominator(left, right); break;
```

Wenn, wie in unserem Fall, statische Methoden über einen Klassennamen aufgerufen werden,
kann auch auf den vorangestellten Klassennamen verzichtet werden, in dem der Klassenname
als statischer Name mit einer `using static`-Anweisung bekannt gemacht wird:

```C#
   using static Operations.Ops;
 
   // ....

      case '^': result = Power(left, right); break;
      case '#': result = GreatestCommonDenominator(left, right); break;
```

## Module mit UML beschreiben

Mit Hilfe der Beschreibungssprache UML kann auch die Modularisierung einer komplexen Software 
visualisiert werden. Dazu werden [Paketdiagramme](https://en.wikipedia.org/wiki/Package_diagram)
verwendet. Im einfachsten Fall bildet jedes Modul (in C#: Jedes .csproj, bzw. jede DLL) ein
Paket, das in einem UML-Paketdiagramm durch einen Rahmen mit einer Überschrift gekennzeichnet ist.

Pfeil-Linien zwischen den Paketen zeigen an, welches das referenzierende und welches das referenzierte
Projekt ist (die Pfeilreichung und die Pfeilbedeutung "uses" kann bei C#-Projekten als "referenziert"
gedeutet werden).

> #### TODO
>
> - Zeichnet ein Paketdiagramm der derzeitigen Implementierung des `Calculator` mit den referenzierten
>   `Operations`.

## Komponenten in Modulen

Damit der `Calculator` in o.g. Beispiel auf die `Operations` zugreifen kann, benötigt er noch einiges an Wissen über die Operationen:

- Den Methodennamen der Operationen
- Das zu verwendende Operator-Symbol

Schön wäre es, wenn Operationen eher wie Plug-Ins implmentiert werden könnten,
um den Calculator nachträglich mit weiteren Operationen auszurüsten, ohne dass 
der eigentliche Calculator-Code geändert werden muss. 

Im Folgenden werden wir ein paar Schritte auf dem Weg dorthin gehen.

## Interfaces

Zunächst mal soll der Calculator etwas umgebaut werden, so dass die Operationen nicht so hart-verdrahtet
im Herzen der Ein-/Ausgabe-Schleife stehen. Jede Operation soll dazu ein eigenes Objekt werden, das die
beiden Eigenschaften einer Operation, nämlich

- das Operatorsymbol (wie z.B. `+`) 
- der Methode, die die eigentliche Operation durchführt.

Auf diese Weise können beliebig viele verschiedene Operationen in einer Liste gehalten werden. Statt 
direkt die Operatorsymbole hartverdrahtet in der `switch`-`case`-Anweisung abzufragen, kann nach jeder
Benutzereingabe durch die Liste der Operationen iteriert werden und zur Benutzereingabe passende 
Operation herausgesucht werden. 

Damit eine solche Liste von Operationen angelegt werden kann, muss es einen Datentyp geben, der genau 
diese oben genannten beiden Eigenschaften (Operatorsymbol und Methode) aufweist. Dazu kann ein `interface`
deklariert werden:

> #### TODO
>
> - Deklariert folgendes Interface
>
>```C#
>    interface IOperation 
>    {
>        char OpSymbol {get;}
>        int PerformOperation(int a, int b);
>    }
>```

Was gewinnen wir dadurch?:

- Mehrere Instanzen (Objekte), die dieses Interface implementieren können in einer Liste zusammen
  gefasst werden. Der eigentliche `Calculator` kann in einer solchen Liste von Operationen nach
  dem passenden `OpSymbol` suchen und beim richtigen Symbol die Methode `PerformOperation` ausführen.
  Mehr muss der Calculator gar nicht von einer Operation wissen.
- Für jede Operation kann nun ein eigener Datentyp deklariert werden. Das ist notwendig, denn die
  Methode, die die Operation ausführt, muss ja in jeder Implementierung unterschiedlich sein. 


> TODO
>
> - Erzeugt für jede bereits implementierte Operation eine eigene Klasse, die das oben 
>   stehende Interface implementiert und deren `PerformOperation`-Methode die eigentliche
>   Berechnung durchführt
>
> - Legt in der `Main`-Methode die Variable `List<IOperation> operations;` an und füllt diese
>   initial mit Instanzen der im vorangegangen Schritt erzeugten Operations-Klassen.
>
> - Ersetzt die `switch`-Anweisung, die in Abhängigkeit des Operators die richtige Operation
>   aufruft durch eine Schleife, die oben angelegte Liste durchläuft und nach dem richtigen Symbol 
>   sucht.

Nun wurde die Funktion des Rechners so weit wie möglich von Detailwissen über die Operationen 
entkoppelt. Alles, was der Rechner braucht, ist eine gefüllte Liste mit Operationen. Jede 
Operation kennt ihr eigenes Operator-Symbol. Alles, was der Rechner wissen muss, ist, dass 
es zu jeder Operation ein Symbol gibt, sowie eine Methode, die die Operation durchführt. Das
liefert das Interface `IOperation`.

Dennoch müssen beim Initialisieren der Liste die notwendigen Operationen bekannt sein. Auch 
dies kann weiter entkoppelt werden, indem beispielsweise ein Modul, das eine Reihe von 
Operationen implementiert, nicht die Operationen als Typen bekann macht, sondern eine
einzelne statische Methode (z. B. `GetOperations()`) implementiert, die die von diesem
Modul zur Verfügung gestellten Operationen zurückliefert. Somit muss das Hauptprogramm 
zur Compilezeit noch nicht mal mehr die einzelnen Operationen kennen, sonder lediglich
das Modul (die Module), die Operationen implementieren.

> TODO
>
> - Erzeugt in jedem Modul, das Operationen implementiert eine Klasse `OperationBuilder`:
>   ```C#
>     public static class OperationBuilder
>     {
>         public static IOperation[] GetOperations() 
>         {
>             // BEISPIEL:
>             return new[]{ new PlusOp(), new MinusOp(), new MultOp()};
>         }
>     }
>   ```
>
> - Ruft zum Füllen der Liste der Operationen (`operations`) die `OperationBuilder.GetOperations()` Methoden
>   aller Module auf, die Operationen implementieren, z.B. so:
>
>    ```C#
>       List<IOperation> operations = new List<IOperation>();
>       operations.AddRange(Calculator.OperationBuilder.GetOperations());
>       operations.AddRange(ExternalOperations.OperationBuilder.GetOperations());
>       operations.AddRange(EvenMoreOperations.OperationBuilder.GetOperations());
>    ```
>

Aufgabe fürs Praktikum: 
- Zweites Operation-Modul implementieren
- Ggf: Operation-Modul von anderen Teilnehmern integrieren


