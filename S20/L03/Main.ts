namespace L03_Loops {
  let a: (string | boolean)[] = ["Hallo", "lieber", "Manuel", true, false];
  
  console.log("while-loop");
  { 
    let i: number = 0;
    while (i < a.length)
    console.log(i, a[i++]);
  }

  console.log("do-while-loop");
  { 
    let i: number = 0;
    do
    console.log(i, a[i++]);
    while (i < a.length);
  }

  console.log("for-loop");
  { 
    for (let i: number = 0; i < a.length; i++)
    console.log(i, a[i]);
  }

  console.log("for-in-loop");
  { 
    for (let index in a)
    console.log(index, a[index]);
  }

  console.log("for-of-loop");
  {
    for (let element of a)
    console.log(element);
  }

  console.log("forEach-method");
  { 
    a.forEach(printElement);
    function printElement(_element: string | boolean, _index: number): void {
      console.log(_index, _element);
    }
  }
}
