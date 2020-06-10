"use strict";
var L07_LoadJSON;
(function (L07_LoadJSON) {
    class Data {
    }
    console.log("Start load");
    load("test.json");
    console.log("Done load");
    async function load(_filename) {
        console.log("Start fetch");
        let response = await fetch(_filename);
        let text = await response.text();
        let json = JSON.parse(text);
        // let json: any = await response.json();
        console.log(json);
        console.log(json.array);
        console.log("Done fetch");
    }
})(L07_LoadJSON || (L07_LoadJSON = {}));
//# sourceMappingURL=Main.js.map