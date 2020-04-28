namespace L02_HelloWorld {
  let input: string = prompt("Gib deinen Namen ein", "Nobody");
  console.log("Hello " + input);

  let valueBool: boolean = true;
  let valueNumber: number = 1;
  let valueString: string = "Hallo";
  let valueAny: any = "Ich bin verboten!"; // verboten

  let arrayNumber: number[] = [1, 2, 3];

  console.log(valueBool, valueNumber, valueString, valueAny);
  console.log(arrayNumber);
}
