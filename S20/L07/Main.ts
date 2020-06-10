namespace L07_LoadJSON {

  class Data {
    array: {text: string}[];
  }

  console.log("Start load");
  load("test.json");
  console.log("Done load");

  async function load(_filename: string): Promise<void> {
    console.log("Start fetch");

    let response: Response = await fetch(_filename);

    let text: string = await response.text();
    let json: Data = JSON.parse(text);

    // let json: any = await response.json();
    
    console.log(json);
    console.log(json.array);

    console.log("Done fetch");
  }
}
