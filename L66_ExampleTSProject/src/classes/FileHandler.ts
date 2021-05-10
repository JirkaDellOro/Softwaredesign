import fs from "fs";
import path from "path";

export class FileHandler {
  private static _instance : FileHandler = new FileHandler();

  private constructor() {
    if(FileHandler._instance)
      throw new Error("Use FileHandler.getInstance() instead new FileHandler()")
    FileHandler._instance = this
  }

  public static getInstance() : FileHandler {
    return FileHandler._instance;
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

export default FileHandler.getInstance();