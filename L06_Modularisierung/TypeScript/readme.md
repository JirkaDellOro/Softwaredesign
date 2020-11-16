
# Modularisierung

## Was ist Modularisierung?

Modularität oder Modularisierung ist die Zerteilung einer ganzheitlichen Software in einzelne, kleinere Teile, die auch als Module, Komponenten, Elemente, Gruppen oder Bausteine bezeichnet werden. Bei diesem modularisierten Aufbau wird Software bzw. Softwaresysteme aus einzelnen Teilen entlang von definierten Schnittstellen zusammengefügt, diese gegenteilige Zusammensetzung wird oft auch integralen Aufbau bzw. monolithische Bauweise bezeichnet.

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
> - (Er-)findet eigene Beispiele für die oben genannten Modularisierungsziele und erläutert Euch diese gegenseitig.
> - Erklärt euch gegenseitig für jedes der oben genannten Modularisierungsziele, warum es von Vorteil sein kann, dieses Ziel zu haben.
> - Lest den Wikipedia-Artikel zu [n-Tier-Architecture](https://en.wikipedia.org/wiki/Multitier_architecture) und formuliert Fragen.

## Techniken der Modularisierung in TypeScript

### ES6 Standard

Wie auch JavaScript ermöglicht TypeScript die Modularisierung des Codes. 

Folgende Orderstruktur bietet sich an:

<pre>
  rootDirectory
  ├ /public
  ├ /src
  │  ├ /modules
  │  │  └ Person.ts
  │  └ app.ts
  ├ index.html
  └ tsconfig.json
</pre>

Zusätzlich sind ein paar Anpassungen in der `tsconfig.json` nötig:

In der `tsconfig.json` müssen folgende Attribute geändert werden: 
> ```json
> - "target": "es6"
> - "module": "es2015"
> - "outDir": "./public"
> - "rootDir": "./src"
> ```

Person.ts:
> ```TypeScript
> export class Person {
>     public static fullName: string =  "Hans-Peter";
> }
> ``` 

app.ts:
> ```TypeScript
> import { Person } from "./modules/Person.js";
>	console.log(Person.fullName);
> ``` 

Wichtig!!! es muss die nach der Kompilierung entstandene `Person.js` aus der `public/modules` importiert werden, da bei der Kompilierung das import-statement genau so in dem JS-File steht und dieses mit einem TS-File nichts anfangen kann.

> - Einbinden in die HTML-Datei:

<script type="module" src="public/app.js"></script>

### System.js

System JS ist ein universeller, dynamischer Modul-Loader für Javascript.
Mit SystemJS lassen sich gerade größere Softwareprojekte in kleinere Module unterteilen, was zum einen die Wartbarkeit und Übersichtlichkeit des Codes erhöht, aber auch ein enormer Performance-Boost sein kann.

Man sollte gegebenenfalls die tsconfig.js anpassen:
> ```JavaScript
>{
>  "compilerOptions": {
>    "target": "ESNEXT", // min. ES2015
>    "module": "system",
>    "outDir": "dist", // to export all compiled JS-Files in seperated folder
>  }
>}
> ```

Über die system.js / system.min.js welche man sich per NPM installieren oder händisch herunterladen kann, ist man in der Lage den ES6 Standard bezüglich `import` und `export` zu verwenden.

Diese muss dann im HTML eingebunden werden: 
> - <script src="node_modules/systemjs/dist/system.min.js"></script>

Anschließend muss eine loader.ts mit dem Import-Statement für die Basis-JS-Datei der Anwendung beschrieben und erzeugt werden.
> ```TypeScript
> System.import("/dist/app.js");
> ``` 

Sie wird anschließend im HTML eingebunden:
> - <script src="dist/loader.js"></script>

> - Die Basis-Datei (app.ts) in dem src anlegen

> - Im Ordner src/modules eine TS-Datei für ein Modul anlegen
In diesem Modul müssen alle Klassen, Funktionen und Variablen, die später verfügbar sein sollen mit einen "export"-Befehl versehen werden (ES6-Standard):

> ```TypeScript
> export class Calculator {
>	...
>}
> ``` 

> - Die exportierten Module können dann in der jeweilen ts-Datei importiert werden:

> ```TypeScript
> import { Calculator } from "./modules/calculator.js"; // Important: Use .js as file ending
> ``` 

### Require.js

Ähnlich wie bei System.js benötigt man hier eine Konfigurationsdatei (require.js) welche im Hintergrund die Modularisierung übernimmt. Diese kann man manuell herunterladen, oder über npm installieren.

> - Einbinden der Datei in die HTML-Datei
> - <script data-main="main" src="require.js"></script>

Der Unterschied zu System.js ist, dass die Module nicht über den ES6-Standard exportieren und importieren lassen, sondern über:
> ```TypeScript
> define({});
> ``` 
exportiert und über:
> ```TypeScript
> var myVariable = require("/.nameOfTheFile");
> ``` 
importiert werden

### Webpack

Webpack ist ein Bündelungstool, dass es über ein config-file erlaubt einen Workflow für die Erstellung von Webprojekten aufzusetzen. Die Möglichkeiten sind groß: SCSS-Compilierung, Bildkomprimierung, Codeminifizierung, Kopieren von Ordnern, erstellen von Source-Maps etc. Unter anderem ist es auch möglich seinen TS-Code modular aufzubauen. Wie bei System.js lassen sich Module über den ES6-Standard exportieren und importieren.
Doku: https://webpack.js.org/concepts/

> #### TODO
>
> - Setzt euch für die folgende Aufgabe einen Modularisierungsworkflow mit einer der oben genannten Möglichkeiten auf
>
> - Fügt folgenden Code als Hauptprogramm ein
> ```TypeScript
>while (true) {
>
>   let userCommand: String | null = prompt("Welcome to the Calculator. Start entering calculations!", "+");
>
>    
>    if (userCommand == null)
>        userCommand = "";
>
>    if (userCommand.toLowerCase() == "exit")
>        break;
>
>    let left: number = 0;
>    let right: number = 0;
>    let opInx: number = 0;
>    
>    if (userCommand.includes("+") || userCommand.includes("-") || userCommand.includes("/") || userCommand.includes("*") ||    userCommand.includes("^") || userCommand.includes("#"))
>        for (let i: number = 0; i < userCommand.length; i++)
>            if (userCommand[i] == "+" || userCommand[i] == "-"  || userCommand[i] == "/"  || userCommand[i] == "*" || userCommand[i] == "^" || userCommand[i] == "#")
>                opInx = i;
>
>    if (opInx < 0)
>        console.log("No operator specified");
>    
>    let opSymbol: string = userCommand[opInx];
>
>    try {
>        left = parseInt(userCommand.substring(0, opInx));
>        right = parseInt(userCommand.substring(opInx + 1));
>    } catch (error) {
>        console.log("Error parsing commmand");
>    }
>
>    console.log("Calculating " + left + " " + opSymbol + " " + right );
>    // TODO: Perform calculation here.
>}
> ```   
> - Implementiert das `TODO` am Ende der `while (true)`-Schleife: Fragt in einer 
>   `switch`-`case`-Anweisung ab, welches Operator-Symbol eingegeben wurde 
>   (z.B. `+`, `-`, `*` oder `/` ). 
>   und fügt Code ein, der die Berechnung durchführt und das Ergebnis ausgibt.
>   Hier der Beispiel-Code für die Addition (`+`):
>
>```TypeScript
>    public static add(a: number, b: number): number {
>        return a + b;
>    }
>```

Nun kann es wünschenswert sein, einige Rechenoperationen in andere Module auszulagern,
z.B., weil diese Operationen nicht nur von unserem `Calculator` benötigt werden, sondern
auch noch von anderen Modulen.

> #### TODO
> 
> - Erzeugt ein weiteres Unterverzeichnis neben `Calculator` mit dem Namen `Operations`
> -  Erzeugt neuen Quellcode-Datei namens `Ops.ts`. 
> - Benennt die enthaltene Klasse `Ops`.
> - Fügt ein paar Operationen als statische Methoden in die Klasse `Ops` ein, die jeweils 
>   zwei Parametern vom Typ `number` entgegen nehmen und das Ergebnis als Rückgabewert ebenfalls
>   vom Typ `number` zurückliefern, zum Beispiel `Power` (potenzieren) und `GreatestCommonDenominator` 
>   (Größter gemeinsamer Teiler):
> 
>```TypeScript
>class Ops {
>  public static power(a: number, exp: number): number {
>    let result: number = 1;
>    
>    for (let i: number = 0; i < exp; i++)
>        result *= a;
>
>    return result;
>  }
>  
>  public static greatestCommonDenominator(a: number, b: number): number {
>    if (a < b) {
>        let tmp: number = a; a = b; b = tmp;
>    }
>    while (b > 0) {
>        let c: number = a % b; a = b; b = c;
>    }
>    return a;
>  }
>}
>```

Wir haben nun ein Modul: Die Berechnungs-Bibliothek `Operations`.
Nun wollen wir aus dem Rechner auf die Operationen zugreifen. Je nach verwendeter Möglichkeit läuft dies nun über export/import oder define/require

> #### TODO
>
> - Erweitert die `switch`-`case`-Anweisung um die beiden Operatoren `^` und `#`, die die 
>   Operationen `Power` und `GreatestCommonDenominator` ausführen. Die vollständige
>   `switch`-`case`-Anweisung sollte dann in etwa so aussehen:
>   ```TypeScript
>    switch (opSymbol) {
>        case "+":
>            console.log(Ops.add(left, right));    
>            break;
>        case "-":
>            console.log(Ops.subtract(left, right));   
>            break;
>        case "*":
>            console.log(Ops.mulitply(left, right));   
>            break;
>        case "^":
>            console.log(Ops.power(left, right)); 
>            break;
>        case "#":
>            console.log(Ops.greatestCommonDenominator(left, right));   
>            break;
>        default:
>            console.log(Ops.divide(left, right));   
>            break;
>    }
>   ```

<!-- Um nicht jedes Mal den Namespace `Operations` beim Verwenden von Klassen aus dem gleichnamigen
Modul hinschreiben zu müssen, kann der Namespace in der Datei `Calculator\Program.cs` zu Beginn
mit einer `using`-Anweisung bekannt gemacht werden:

```C#
   using Operations;
 
   // ....

      case '^': result = Ops.Power(left, right); break;
      case '#': result = Ops.GreatestCommonDenominator(left, right); break;
```
-->
Da wir auf statische Methoden zugreifen, müssen wir diese über den entsprechenden Klassennamen aufrufen

```TypeScript
   // ....
  case "^":
      console.log(Ops.power(left, right)); 
      break;
  case "#":
      console.log(Ops.greatestCommonDenominator(left, right));   
      break;
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

<!-- ## Komponenten in Modulen

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
- Ggf: Operation-Modul von anderen Teilnehmern integrieren -->


