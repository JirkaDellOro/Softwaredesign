namespace L07_LoadJSON {

  class Data {
    array: { text: string }[];
  }

  test();

  async function test(): Promise<void> {
    console.log("Start load");
    let content: Data = await load("test.json");
    console.log("Done load");

    console.log(content);

    console.log("Start load");
    save(JSON.stringify(content), "test.json");
    console.log("Done load");
  }

  async function load(_filename: string): Promise<Data> {
    console.log("Start fetch");

    let response: Response = await fetch(_filename);

    let text: string = await response.text();
    let json: Data = JSON.parse(text);
    // alternative: json = await response.json();

    console.log("Done fetch");
    return (json);
  }

  function save(_content: string, _filename: string): void {
    let blob: Blob = new Blob([_content], { type: "text/plain" });
    let url: string = window.URL.createObjectURL(blob);
    //*/ using anchor element for download
    let downloader: HTMLAnchorElement;
    downloader = document.createElement("a");
    downloader.setAttribute("href", url);
    downloader.setAttribute("download", _filename);
    document.body.appendChild(downloader);
    downloader.click();
    document.body.removeChild(downloader);
    window.URL.revokeObjectURL(url);
  }
}
