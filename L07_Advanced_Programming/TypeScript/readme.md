# Programmieren in TypeScript Teil 2

## Neue Datentypen selber machen

Wie in den meisten objektorientierten Programmiersprachen können eigene Datentypen
durch _Aggregation_, also durch das "Zusammenpacken von Elementen bestehender
Datentypen, erzeugt werden. In Java und C/C++ gibt es hierzu das Schlüsselwort
`class`, mit dem die Deklaration eines neuen Typs eingeleitet wird.

```TypeScript
  class Person
  {
    public Name: string;
    public Age: number;
  }
```

In diesem Beispiel wird ein Neuer Datentyp namens `Person` erzeugt und festgelegt,
dass jedes Objekt/jede Instanz vom Typ Person ein Feld vom Typ `string` namens _Name_
und ein Feld vom Typ `number` mit dem Namen _Age_ besitzt.

Mit diesem neuen Datentyp kann nun alles angestellt werden, was mit bereits existierenden
Datentypen geht. Z.B. können Variablen, und Methodenparameter von diesem Typ angelegt werden.

```TypeScript
  let myself: Person;
```

Bei der Deklaration von Variablen derart selbst definierter Datentypen wird noch _keine_
Instanz erzeugt. Dies muss explizit mit dem `new`-Operator erfolgen:

```TypeScript
  let myself: Person = new Person();
```

Damit wird eine Variable `myself` vom Typ `Person` erzeugt, die eine Instanz vom Typ
`Person` referenziert, d.h. nun existiert auch im Speicher des Rechners irgendwo Platz
für alles, woraus eine Person besteht, nämlich dem Namen und das Alter.

Somit kann dann auch über den Variablennamen `myself` auf die Felder dieser Instanz
zugegriffen werden.

```TypeScript
  let myself: Person = new Person();
  myself.Name = "Müller";
  myself.Age = 50;
```

Eine solche Folge von Anweisungen, also 

- der Variablendeklaration
- dem Erzeugen einer Instanz
- dem Verknüpfen von Variablennamen und Instanz
- der Initialisierung öffentlicher Felder mit Werten

kann in TypeScript auch verkürzt geschrieben werden:

```TypeScript
  let myself: Person = new Person ("Müller", 50);
```

Darüberhinaus gibt es, wie in anderen Programmiersprachen auch, die Möglichkeit, 
einen Initalisierungskonstruktor zu implementieren, der initiale Werte für `Name` und 
`Age` entgegen nimmt.

Über den _Objektzugriffsoperator_ (`.`) kann nicht nur schreibend sondern auch lesend
auf Inhalte von `myself` zugegriffen werden:

```TypeScript 
  console.log(myself.Name + " ist " + myself.Age + " Jahre alt!");
```

## Methoden

Ein wichtiger Bestandteil von Klassen sind Methoden. Diese enthalten ausführbaren Code,
also das, was passiert, wenn ein Programm zur Ausführung kommt. Methoden sind nach folgender
Struktur aufgebaut:

```TypeScript
  MethodenName(<PARAMETERLISTE>): <RÜCKGABEWERT> 
  {
    <METHODENRUMPF>
  }
```

Der `<RÜCKGABEWERT>` bezeichnet dabei den Datentyp des Rückgabewertes. Die 
`<PARAMETERLISTE>` enthält eine mit Komma getrennte Liste von Parameterdeklarationen, die, 
wie Variablendeklarationen, nach dem Schema `identifizierer: <TYP>` aufgebaut sind.

Der `<METHDODENRUMPF>` enthält Code, der ausgeführt wird, sobald die Methode aufgerufen 
wird. Dieser Code kann auf Parameter aus der Parameterliste, sowie auf innerhalb der Klasse
deklarierte Felder und andere Klassenbestandeile zugreifen, z.B. andere Methoden der selben
Klasse aufrufen. Mit der `return`-Anweisung 
kann die Bearbeitung der aktuellen Methode beendet und der Rückgabewert zurückgeben werden.

Beispiel 

```TypeScript
  class Person
  {
    public Name: string;
    public Age: number;

    public GetTitleAdress(): string
    {
      if (this.Age < 18)
        return "Hey " + this.Name;
      else
        return "Sehr geehrte(r) " + this.Name;
    }
  }
```


## Sichtbarkeit

Bestandteile von Klassen wie z.B. Felder und Methoden können entweder nur "von innen" sichtbar
sein oder auch "von außen". Auf Felder und Methoden, die nur "von innen" sichtbar sind, kann
nur aus Methoden aus der selben Klasse zugegriffen werden. Diese Bestandteile nennt man auch
_privat_. Auf _öffentliche_ Felder und Methoden, also solche, die auch "von außen" sichtbar 
sind, kann mit dem Objektzugriffsoperator (`.`) zugegriffen werden. 

> #### TODO
> - Legt wie oben eine Variable vom Typ Person an und instanziiert ein Objekt vom Typ Person
>   mit new. Greift dann auf `Name` und `Age` zu.
> - Entfernt die `public` Kennzeichnung bei einem oder beiden Klassenbestandteilen und versucht,
>   den Code zu kompilieren. Was passiert?

Die Sichtbarkeit wird u.A. mit dem Schlüsselwort `public` gesteuert. Steht vor einem Feld oder
einer Methode `public`, dann ist diese(s) öffentlich. Fehlt vor einer Methoden oder Feld-Deklaration
innerhalb einer Klasse das Wort `public`, so ist diese(s) privat. Private Klassenbestandteile können
auch explizit mit dem Schlüsselwort `private` gekennzeichnet werden. Weitere _Zugriffsmodifizierer_
neben `public` und `private` sind `protected` und `internal`.

> #### TODO
> - Lest in der 
>   [TypeScript-Dokumentation](https://www.typescriptlang.org/docs/handbook/classes.html)
>   nach, was der Zugriffsmodifizierer `protected` bedeutet.
> - Auch eine Klasse selbst kann `public` sein. Was bedeutet das?

## Vererbung

### Vererbung als Erweiterung

In TypeScript können Klassen voneinander erben. Damit können neue Klassen geschaffen werden, in dem diese
alle bereits in einer anderen Klasse definierten Eigenschaften und Methoden übernimmt. Hier
ein Beispiel:

```TypeScript
  class Employee extends Person
  {
    public idNumber: number;
  }
```

Hier ist ein `Employee` ein Spezialfall von `Person`. Zusätzlich zu den von `Person` geerbten 
Eigenschaften (`Name` und `Age`), hat ein `Employee` nun auch noch eine `idNumber`.
Instanzen von `Employee` können überall dort verwendet werden, wo  Instanzen von `Person` 
erwartet werden. **Jeder `Employee` ist auch eine `Person`**. 

> #### TODO
> - Legt einen Array von `Person` mit fünf Einträgen an und initialisiert diese Array-Einträge
>   jeweils mit Instanzen von `Person` (mittels `new Person...`).
> - Ersetzt einige der `Person` Instanzen durch `Employee` Instanzen.

In TypeScript erben alle Klassen automatisch vom eingebauten Datentyp `object`. Somit können Variablen 
vom Typ `object` beliebige Instanzen, sogar von eingebauten Typen wie `int` oder `string`
enthalten.

### Vererbung zur Polymorphie

Vererbung kann auch dazu verwendet werden, um in unterschiedliche Ausprägungen einer gemeinsamen
Basisfunktionalität in verschiedenen vererbten Klassen auf unterschiedliche Art implementieren
zu können. Man spricht hier von _Polymorphie_  (Vielgestaltigkeit).

Beispiel: Die traditionellen Betrachtungsweise erkennt zwei Geschlechter beim Menschen, Männer und Frauen. Beides sind Personen. Allerdings soll die Anrede einer Frau anders aussehen als die Anrede eines Mannes. Daher wird die Methode `GetTitleAdress()` aus dem Beispiel
oben _polymorph_ implemetiert:

```TypeScript
  class Person
  {
    public Name: string;
    public Age: string;

    public  GetTitleAdress(): string
    {
      if (Age < 18)
        return "Hey " + Name;
      else
        return "Sehr geehrte(r) " + Name;
    }
  }
  
  class Female extends Person
  {
    public GetTitleAdress(): string
    {
        return "Sehr geehrte Frau " + Name;
    }
  }

  class Male extends Person
  {
    public GetTitleAdress(): string
    {
        return "Sehr geehrter Herr " + Name;
    }
  }
```

> #### TODO
> - Initialisiert einen Array von `Person` mit Instanzen von `Person`, `Female` und `Male`.
> - Erzeugt eine Schleife über den Array und lasst von jedem Array-Eintrag die Anrede 
>   auf der Konsole ausgeben.
> - Überzeugt euch davon, dass in Abhängigkeit vom Typ der konkreten Instanz unterschiedliche
>   Anreden ausgegeben werden, obwohl in der Schleife auf jedes einzelne Array-Element mit Variablen
>   der gemeinsamen Basisklasse `Person` zugegriffen wird.

Gibt es gar keine sinnvolle gemeinsame Implementierung einer Methode
in der Basisklasse, kann diese mit dem Modifizierer `abstract` deklariert werden, so dass dann kein
Methodenrumpf angegeben werden muss. Besteht eine Klasse _nur_ aus `abstract` deklarierten Methoden,
bietet es sich an, statt einer Klasse ein `interface` zu verwenden.

> #### TODO
> - Lest euch in `abstract`e Klassen und `interface`s ein und implementiert o.g Beispiel mit 
>   einer der beiden Möglichkeiten. 
> - Macht euch klar, dass ihr dann keine Instanzen von `Person` (mit `new`) mehr anlegen könnt.
>   Was passiert, wenn ihr es trotzdem versucht?

## Generics & Container

Wie die meisten aktuellen objektorientierten Sprachen erlaubt es TypeScript, die Deklaration von Datentypen so 
offen zu halten, dass in der Deklaration verwendete andere Datentypen noch nicht konkret bekannt sein
müssen, sondern als Typ-Parameter verwendet werden können.

Solche -noch nicht ganz fertige- Datentypen, die andere Datentypen verwenden, sich hierbei aber noch nicht
ganz festlegen, welche Typen das denn sein sollen, nennt man in TypeScript (und in Java) _Generics_.  In C++ werden 
solche Konstrukte _Templates_ genannt, weil es sich hierbei genau genommen noch nicht um die Deklaration
von fertigen Datentypen handelt, sondern um _Schablonen_, wie ein neuer Typ zu erstellen ist, wenn denn
die verwendeten Datentypen festgelegt wurden.

In vielen Sprachen (TypeScript, Java, C++) werden solche Konstrukte durch Verwendung von Spitzklammern `<>` gekennzeichnet.

### Der häufigste Anwendungsfall: Container-Klassen

Zunächst soll die Frage geklärt werden, wo solche Konstrukte überhaupt benötigt werden. Der wohl häufigste
Anwendungsfall, und in den meisten Sprachen auch der Grund, warum es solche Konstrukte wie Generics
überhaupt gibt, sind so genannte _Container-Klassen_. 

Dabei handelt es sich um Klassen, die in der Lage sind, Mengen von Objekten anderer Datentypen abzuspeichern.
Typischerweise gibt es unterschiedliche Container-Klassen für unterschiedliche Speicher- und 
Zugriffsstrategien. Hier einige Beispiele:
- Listen: Ähnlich wie Arrays, aber mit zur Laufzeit veränderlicher Speicherkapazität
- Verlinkte Listen: Für schnelles Ein- und Ausfügen an beliebigen Positionen, dafür nur 
  eingeschränktem (sequenziellem statt wahlfreiem) Zugriff
- Stacks: Last-in-first-out Speicher
- Dictionaries / Hash-Tables: Indizierung mit beliebigen Schlüssel-Werten (nicht nur Integer-Indizes wie bei
  Arrays oder Listen).

Die Implementierung einer solchen Klasse, wie z.B. `List`, sollte dabei völlig losgelöst vom Typ der 
Objekte, die in der Liste gehalten werden, sein. So soll es möglich sein, eine Liste mit strings, 
eine Liste mit double-Werten und eine Liste mit selbst definierten Datentypen (ggf. sogar Delegates)
zu verwenden.

Erste Versionen von TypeScript (und auch Java) boten hier nur die Möglichkeit, entweder jeweils eine Container-Klasse
für den ganz konkreten Datentyp zu implementieren (also eine Listenklasse für string, eine für double, ...)
oder eine Container-Klasse zu implementieren, die Objekte von der "Urklasse" `object` enthält. Da in TypeScript und
Java alle Datentypen von `object` erben (anders als z.B. in C++), ist diese Möglichkeit gegeben. 

Hier ein sehr einfaches Beispiel für eine Containerklasse, die eine dynamisch wachsende Zahl an 
Elementen enthalten kann (im Gegensatz zu einem Array, bei dem Anzahl der im Array zu speichernden
Elemente beim Erstellen des Arrays fest steht. Intern werden die Elemente in einem Array von `object`
Elementen gespeichert. Sobald dessen Kapazität erreicht ist, wird die Anzahl der Array-Einträge verdoppelt

```TypeScript
    public class MyContainer
    {
        private object[] _theObjects;
        private int _n;

        public MyContainer()
        {
            _theObjects = new object[2];
            _n = 0;
        }

        public void Add(object o)
        {
            // If necessary, grow the array
            if (_n == _theObjects.Length)
            {
                object[] oldArray = _theObjects;
                _theObjects = new object[2 * oldArray.Length];
                Array.Copy(oldArray, _theObjects, _n);
            }

            _theObjects[_n] = o;
            _n++;
        }

        public object GetAt(int i)
        {
            return _theObjects[i];
        }

        public int Count
        {
            get { return _n; }
        }
    }
```

> #### TODO
>
> - Legt mehrere Instanzen der obigen Klasse für die Speicherung unterschiedlicher 
>   Typen an, vor allem auch mit der selbst geschriebenen Klasse `Person`.
> - Was muss beim (lesenden) Zugriff auf Elemente passieren?


Diese Implementierung auf Basis von `object` hat den Nachteil, dass beim Zugriff auf im Container
gespeicherte Objekte jeweils ein Cast des konkreten Typs von und nach `object` erfolgen muss. Dieser
ist mit einem Laufzeit-Check verbunden, der erstens Zeit kostet und zweitens zur Laufzeit zu Fehlern
führen kann, die eigentlich der Compiler schon zur Compilezeit hätte checken können: Diese Art der 
Container-Implementierung ist nicht typsicher.

Daher wurde bereits früh (jeweils mit Version 2 der Sprachen) in TypeScript und Java die Möglichkeit von 
Generics eingeführt, mit deren Hilfe Datentypen deklariert werden können, die mit anderen Datentypen
parametriert werden können.

### Beispiel

Die oben gezeigte Containerklasse als Generic:

```TypeScript
    public class MyContainer<T>
    {
        private T[] _theObjects;
        private int _n;

        public MyContainer()
        {
            _theObjects = new T[2];
            _n = 0;
        }

        public void Add(T o)
        {
            // If necessary, grow the array
            if (_n == _theObjects.Length)
            {
                T[] oldArray = _theObjects;
                _theObjects = new T[2 * oldArray.Length];
                Array.Copy(oldArray, _theObjects, _n);
            }

            _theObjects[_n] = o;
            _n++;
        }

        public T GetAt(int i)
        {
            return _theObjects[i];
        }

        public int Count
        {
            get { return _n; }
        }
    }
```

Statt der allgemeinen Klasse `object` wird nun der generische Parameter `T` verwendet (`object` wurde
durch `T`) ersetzt. Dieser Parameter wurde in der Generics-Parameter-Liste am Klassennamen 
in Spitzklammern "deklariert".

Erst bei der Verwendung der Containerklasse muss festgelegt werden, von welchem Typ die zu speichernden
Objekte sind. Hier ein Beispiel für einen Container, der `int`-Werte enthält:

```TypeScript
  MyContainer<int> container = new MyContainer<int>();
```
Man kann sich vorstellen, dass nun der Platzhalter `T` nun durch den Typ `int` ersetzt wird. In 
C++ funktionierten die ersten "Template"-Implementierungen tatsächlich durch einen Text-Ersatz im Source-Code.

In TypeScript passiert unter der Haube mehr: Der generische Typ `MyContainer<T>` ist als solches Konstrukt auch 
im compilierten .NET-Code abgebildet. Zur Laufzeit wird dann durch die Spezialisierung auf `int` bei
der Verwendung der konkrete Typ `MyContainer<int>` erzeugt.

## Structs vs. Klassen

In TypeScript gibt es neben den Klassen noch eine weitere Möglichkeit, neue Datentypen aus bestehenden
Datentypen aufzubauen, und zwar mit dem Schlüsselwort `struct`. Der Hauptunterschied zwischen mit `class`
und `struct` aufgebauten Typen ist, dass Klassen immer _Referenz-Typen_ und Structs immer 
_Value-Typen_ sind. Das bedeutet eine Variable vom Typ einer Klasse kann ein Objekt dieses Typs, das 
irgendwo im Speicher liegt,  _referenzieren_ - oder auch nicht, dann ist der Inhalt `null`.
Variablen von Structs sind immer untrennbar mit dem Objekt verbunden - sie können auch nicht `null` 
sein. Der für Anwender größte Unterschied liegt in der Bedeutung von Zuweisungen `=` und Vergleichen 
`==`: Bei Structs wird mit `=` der Objekt-Inhalt kopiert und mit `==` die Objektinhalte verglichen.
Bei Klassen hingegen wird mit `=` nur die Referenz kopiert und mit `==` festgestellt, ob beide Variablen
das _selbe_  Objekt referenzieren.

> #### TODO
> - Lest den Artikel 
>   [Choosing between Class and Struct](https://docs.microsoft.com/en-us/dotnet/standard/design-guidelines/choosing-between-class-and-struct)
>   (angegebene Lesedauer: 2 Minuten).
> - Findet weitere Unterschiede zwischen `class` und `struct` heraus im Bezug auf Vererbung, virtuelle Methoden, ggf. Interfaces
> - Erzeugt jeweils eine Zuweisung und einen Vergleich zwischen Instanzen eines mit
>   `class` und eines mit `struct` erzugten eigenen Datentyp heraus.

## Weitere mögliche Bestandteile von Klassen und Structs

Wie wir bereits gesehen haben, können Klassen (und auch Structs) Methoden und Felder enthalten.
Zusätzlich gibt es in TypeScript mit _Properties_ und _Events_ zwei weitere Kategorien von Bestandteilen, die 
hier nur kurz erwähnt werden sollen.

### Properties (Eigenschaften)

Oft möchte man in Instanzen von Klassen Werte speichern, wie z.B. `_fullname` in unserem
Beispiel. Beim Setzen von Werten und beim Auslesen von Werten soll aber oft weitere Funktionalität
(so genannte Seiteneffekte) ausgelöst werden. Z.B. kann es beim Auslesen eines Wertes sein, dass
der Wert erst noch aktualisiert werden muss. Oder beim Schreiben eines Wertes sollen andere Werte
ebenfalls neu berechnet werden. Klassischerweise würde man in diesem Fall der Klasse Methoden wie
`get <METHODENNAME>(): <RÜCKGABEWERT> ` und `set <METHODENNAME>(wert: <TYP>)` hinzufügen. In TypeScript wurden für diesen Fall _accessors_ 
hinzugefügt. Hier ein Beispiel:

```TypeScript
    class Person
    {
        private _fullname: string = "Freddi Krueger";

        get fullName(): string
        {
          return this._fullname;
        }
        set fullName(value: string)
        {
          this._fullname = value;
        }
    }

    let person: Person = new Person();
    console.log(person.fullName);
    person.fullName = "Jason Vorhees";
    console.log(person.fullName);
```

Über den Ausdruck `get` bzw. `set` vor dem Methodenname, können wir die Methode wie wie ein Attribut aufrufen:
Hier passiert in den Methoden nichts anderes, als das zu setzender oder auszulesender Wert in einem 
privaten Feld (dem _backing field_) gespeichert werden. Man kann sich aber leicht vorstellen, dass in
den Methodenrümpfen von `set` und `get` weitere Anweisungen stehen können, die beliebige Seiteneffekte
auslösen.

### Events

Zu bestimmten Zeitpunkten in der Lebenszeit einer Instanz einer Klasse oder eines Structs kann 
es notwendig werden, dass andere Code-Stücke aufgerufen werden sollen. Zum Zeitpunkt der Erstellung
der Klasse, also als ein Programmierer den Code für die Klasse hingeschrieben hat, ist aber vielleicht
noch nicht klar, welcher Code aufgerufen werden soll.

Beispiel: Ein Programmierer programmiert für eine grafische Benutzerschnittstelle eine "Button" Klasse, der
von Benutzern geklickt werden kann. Dazu programmiert er Code, der erkennt, wenn ein Benutzer mit der Maus
den vom Button eingenommenen Bildschirmbereich überdeckt und gleichzeitig die Maustaste drückt. Damit
die "Button" Klasse wiederverwendbar ist, kann er noch nicht festlegen, was genau beim Eintreten des 
Ereignis "Benutzer hat Maus über dem Button geklickt" passieren soll. 

Die Lösung hierfür sind so genannte _Events_. Mit deren Hilfe kann ein Anwender der Klasse eigenen Code
hinterlegen, der ausgeführt werden soll, sobald ein _Event_, ein Ereignis, eintritt. 

### Regular Expressions

Es handelt sich um Zeichenketten, mit denen nach bestimmten syntaktischen Regeln Mengen definieren lassen. Somit kann man Texte nach bestimmte Kriterien durchsuchen und sich zum Beispiel die Menge an Wörtern zurückgeben lassen, die die gesetzten Kriterien erfüllen.

[Regular Expression Cheatsheet](https://cheatography.com/davechild/cheat-sheets/regular-expressions/)

### Import vs Require

Die Statements _import_ und _require_ werden dafür verwendet um externe sowie lokale Module zu laden. 
Die Idee der beiden Statements ist dabei die Gleiche, es geht darum das Programm in separate Dateien zu trennen anstatt alles in einer Datei zu haben. Das Konzept findet sich beispielsweise so auch in _Python_ mit _import_ oder in _C_ mit _include_.
Während allerdings _import_ zum JavaScript Standard gehört und dieser ebenso von Browsern unterstützt wird ist _require_ nur in Verbindung mit Node.js möglich, bei dem es eine Built-in Funktionalität ist.

Prinzipiell erfüllen die Statements den gleichen Zweck, sie laden Module jeglicher Art in eine Applikation, hierbei kann man drei Module Arten unterscheiden:

1. Built-in Core Node.js Module wie _readline_ oder _fs_
2. NPM Module, welche im node_modules Ordner zu finden sind wie _lodash_, _express_ oder _request_
3. Lokale Module, welche selbst programmiert wurden, um etwas abzubilden, bspw. eine immer währende Konstante wie Pi oder ähnliches.

### Higher Order Functions

**Aufgabe:** Schaut, was diese Funktionen in JavaScript bzw. TypeScript mit Daten bzw. Arrays machen bzw. was damit erreicht wird:

- Filter
- Map
- Reduce
- Sort
- FindIndex

### FileSystem

Es gibt in TypeScript bzw. JavaScript mehrere Möglichkeiten das Dateisystem anzusteuern bzw. Dateien aus dem Dateisystem zu lesen:

1. _import_ oder _require_: Generell wird das _import_ bzw. das _require_ Statement dazu verwendet um Funktionen, Objekte und Primitives von anderen Modulen, Skripten, etc. zu importieren.
Allerdings lassen sich damit auch Dateien aus dem Dateisystem lesen:

**Beispiel:**
```TypeScript
  import Movies from "./movies.json"
```

[import Dokumentation](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/import)

2. Nodejs Filesystem (fs): Das fs Modul erlaubt es mit dem Dateisystem in modernen JavaScript Applikationen zu interagieren. Dabei bittet das Modul alle Operationen um mit dem Dateisystem zu interagieren synchron, per Callback oder per Promises an:

**Beispiel:**
```JavaScript
  const fs = require('fs');
  const rawdata = fs.readFileSync("./movies.json");
  const jsondata = JSON.parse(rawdata);
```

[Nodejs Filesystem Dokumentation](https://nodejs.org/api/fs.html#fs_file_system)