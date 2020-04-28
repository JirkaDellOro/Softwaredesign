"use strict";
var L02_HelloWorld;
(function (L02_HelloWorld) {
    let input = prompt("Gib deinen Namen ein", "Nobody");
    console.log("Hello " + input);
    let valueBool = true;
    let valueNumber = 1;
    let valueString = "Hallo";
    let valueAny = "Ich bin verboten!"; // verboten
    let arrayNumber = [1, 2, 3];
    console.log(valueBool, valueNumber, valueString, valueAny);
    console.log(arrayNumber);
})(L02_HelloWorld || (L02_HelloWorld = {}));
//# sourceMappingURL=Main.js.map