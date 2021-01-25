import fs from "fs";
import path from "path";

export class FileHandler {
  constructor() {

  }

  private readFile(pathToFile: string) : any {
    let jsonRaw = fs.readFileSync(path.resolve(__dirname, "../"+pathToFile));
    let json : any = JSON.parse(jsonRaw.toString());
    return json;
  }

  public readArrayFile(pathToFile: string) : Array<any> {
    return this.readFile(pathToFile);
  }

  public readObjectFile(pathToFile: string) : any {
    return this.readFile(pathToFile);
  }

  public writeFile(pathToFile: string, dataToWrite: any) : void {
    fs.writeFileSync(path.resolve(__dirname, "../" + pathToFile), JSON.stringify(dataToWrite));
  }
}