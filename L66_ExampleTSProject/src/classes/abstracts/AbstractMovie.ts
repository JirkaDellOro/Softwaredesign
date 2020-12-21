export class AbstractMovie {
  private _movieName: String;
  private _releaseYear: Number;
  private _boxOffice: Number;
  private _director: String;
  private _actors: String[];

  constructor() {
    this._movieName = "";
    this._releaseYear = 0;
    this._boxOffice = 0;
    this._director = "";
    this._actors = [];
  }

  public getMovieName(): String {
    return this._movieName;
  }

  public setMovieName(value: String) {
    this._movieName = value;
  }

  public getReleaseYear(): Number {
    return this._releaseYear;
  }
  public setReleaseYear(value: Number) {
    this._releaseYear = value;
  }

  public getBoxOffice(): Number {
    return this._boxOffice;
  }

  public setBoxOffice(value: Number) {
    this._boxOffice = value;
  }

  public getDirector(): String {
    return this._director;
  }

  public setDirector(value: String) {
    this._director = value;
  }

  public getActors(): String[] {
    return this._actors;
  }

  public setActors(value: String[]) {
    this._actors = value;
  }
}