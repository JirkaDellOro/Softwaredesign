# Regular Expressions
Ein häufiger Anwendungsfall bei der Erstellung von Software ist das Durchsuchen, Prüfen und Ersetzen von Text, teilweise in sehr großen Zeichenketten oder Dokumenten. Reguläre Ausdrücke ermöglichen es, diese Aufgaben zu bewerkstelligen, ohne hierfür Code neu zu programmieren. Allerdings ist es erforderlich, die Ausdrücke zu definieren, mit deren Hilfe dann auch sehr komplexe Suchen durchgeführt werden können.  
Ein regulärer Ausdruck ist eine Zeichenkette, welche ein Suchmuster darstellt. Im zu verarbeitenden Text wird nach Übereinstimmungen mit diesem Muster gesucht. Dabei kommen je nach Implementation unterschiedliche Algorithmen zum Einsatz, die weit über die ursprünglichen Möglichkeiten der regulären Ausdrücke der theoretischen Informatik hinaus gehen und eine höhere Komplexität der Suchanfrage zulassen. Das bedeutet, dass bei der Anwendung von regulären Ausdrücken beachtet werden muss, welche Implementation zum Einsatz kommt. Dementsprechend muss der Ausdruck angepasst werden.


## Ablauf

Bei der Suche wird der zu prüfende Text Zeichen für Zeichen von links nach rechts durchlaufen. Ebenso von links nach rechts werden die Elemente des regulären Ausdrucks dabei abgearbeitet und das aktuelle Zeichen gegen das jeweils aktive Element geprüft. 


### Beispiel

Regex: `al`

Text: `Hallo Ball`

Der Text wird von links nach rechts durchlaufen und die Zeichen gegen das Zeichen `a` und das folgende gegen `l` geprüft. Es gibt zwei Übereinstimmungen: 

H'**al**'lo B'**al**'l


### Beispiel 2

Regex: `[al]`

Text: `Hallo Ball`

Die eckige Klammer gibt eine Character-Klasse an. Wird ein a _oder_ ein l gefunden, gilt dies als Übereinstimmung. Es gibt sechs Übereinstimmungen im Text:

H'**a**''**l**''**l**'o  B'**a**''**l**''**l**'


## Syntax der Regular Expression Patterns

### Kurze Zusammenfassung

|Symbol|Bedeutung
|---|---|
|[ ]|wenigstens eines der in der Klammer angegebenen Elemente muss vorhanden sein.|
|{5}|das vorangegangene Element muss genau 5 mal wiederholt werden.  
|{1,3}|minimale und maximale Anzahl des vorangegangenen Elements.  
|*|das vorangegangene Elemente tritt beliebig oft auf, inklusive keinmal (gierig). Entspricht {0,}
|+|das vorangegangene Elemente tritt beliebig oft auf, aber wenigstens einmal (gierig). Entspricht {1,}
|.|Platzhalter für genau ein beliebiges Zeichen
|( )|Der Ausdruck innerhalb der Klammer wird zu einem Element zusammen gefasst
|^|Der Ausdruck muss am Beginn der Zeile gefunden werden
|$|Der Ausdruck muss am Ende der Zeile gefunden werden
|^|Negiert die Zeichenklasse bis zur schließenden Klammer  
|?|Das vorangegangene Element darf höchstens einmal auftreten, muss aber nicht. Entspricht {0,1}
|*?|Das vorangegangene Element kann beliebig oft auftreten, bis das nachfolgende erreicht ist (Genügsam)
|\||Der Ausdruck links oder der Ausdruck rechts vom Oder-Strich treten auf
|\b|Vergleich beginnt bzw. endet an Wortgrenze (Wechsel von \w zu \W und vice versa)
|\d|Ziffernzeichen = [0-9]  
|\D|Nicht-Ziffernzeichen (alle anderen als \d)  
|\w|Wortzeichen = [a-zA-Z0-9]  
|\W|Nicht-Wortzeichen (alle anderen als \w)  
|\s|Whitespace (Leerzeichen, Return, Tabulator)
|\S|...das Gegenteil
|\1|Referenz auf das Ergebnis der ersten Klammer  
|\2|Referenz auf das Ergebnis der zweiten Klammer etc
|(?|Beginnt eine Klammer mit einem Fragezeichen, wird keine Referenz gespeichert (Achtung, prüfen ob in allen Dialekten korrekt)

### Ausführliche Beschreibung

https://docs.microsoft.com/de-de/dotnet/standard/base-types/regular-expression-language-quick-reference



## Beispiele / Aufgaben
|Expression|Match|
|---|---|
|\ba\w*\b|Alle Worte die mit a beginnen  
|\be\w*?n\w*?\b|Alle Worte die mit e beginnen und irgendwo innerhalb des Wortes noch ein n besitzen  
|\w+(\.\w+)*@\w+(\.\w+)+|erster Ansatz für einen E-Mail-Format-Checker  
|\b(\w)(\w)\w*\2\1\b|findet Palindrome, zumindest anhand der ersten und letzten beiden Buchstaben.  
|\b(\w{3})\w*\1\w*\b|findet Worte, bei denen die ersten drei Buchstaben in der gleichen Reihenfolge später noch einmal auftauchen, wie z.B. heavyheaded oder Mathematik (ignore case)

Gültige Zeitangabe nach dem Format HH:MM:SS finden  
\b([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]\b

Online-Testbed: https://regexr.com/

## Regular Expressions in C#/.NET

In C#/.NET gibt es mit der [`Regex`](https://msdn.microsoft.com/de-de/library/system.text.regularexpressions.regex(v=vs.110).aspx)-Klasse die Möglichkeit, unterschiedliche Anwendungsfälle mit Regular Expressions zu lösen. Hier die gebräuchlichsten Methoden:

- [`IsMatch`](https://msdn.microsoft.com/de-de/library/sdx2bds0(v=vs.110).aspx) prüft, ob der der reguläre Ausdruck mindestens ein Mal im  Input-String vorkommt.

- [`Matches`](https://msdn.microsoft.com/de-de/library/b9712a7w(v=vs.110).aspx)
  liefert alle Vorkommen des regulären Ausdrucks im Input-String zurück. Der 
  Rückgabewert ist eine 
  [`MatchCollection`](https://msdn.microsoft.com/de-de/library/system.text.regularexpressions.matchcollection(v=vs.110).aspx),
   über die z.B. mit einer 
  `foreach`-Schleife iteriert werden kann und dabei auf alle Treffer vom Typ [`Match`](https://msdn.microsoft.com/de-de/library/system.text.regularexpressions.match(v=vs.110).aspx)
   zugegriffen werden kann.
  
- [`Replace`](https://msdn.microsoft.com/de-de/library/e7f5w83z(v=vs.110).aspx)
  ersetzt jedes Vorkommen der Regular Expression durch den zu ersetztenden String. Im zu ersetzenden String kann durch eine spezille Syntax auf Teile des
  jeweils durch das Pattern gefundenen Treffers zugegriffen werden, so dass auch
  Fallweise pro Ersetzung neue Ersetzungsmuster abhängig vom jeweils gefundenen Text erzeugt werden können. Die Syntax der im Ersetzungstext zulässigen 
  Konstrukte findet man z.B. 
  [hier](https://docs.microsoft.com/de-de/dotnet/standard/base-types/regular-expression-language-quick-reference#substitutions).

## Anmerkung
Bei der Angabe der Regular Expression als String-Konstante muss vor allem der häufig vorkommende Backslash `\` in spezieller Schreibweise als doppelter Backslash angegeben werden, da ein einfacher Backslash in einer C#-String-Konstanten
als _Escape_-Zeichen interpretiert wird, das zusammen mit dem/den nachfolgenden
Zeichen ein Sonderzeichen (z.B. Zeilenumbruch (_Newline_) `\n` ). In 
C# können durch Angabe eines `@` vor einer String-Konstante Backslashes
auch durch einfache Angaben direkt als solche angegeben werden. Dadurch werden die Regular-Expression-Patterns im C#-Code leichter lesbar.

