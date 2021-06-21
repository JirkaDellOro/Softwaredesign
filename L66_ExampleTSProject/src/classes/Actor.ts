import { ActorDAO } from "../types/actordao.type";

export class Actor {
  public id : Number;
  private _actorsName: String;
  private _birthday: String;
  private _nationality: String;

  constructor(actor: ActorDAO) {
    this.id = Math.random();
    this._actorsName = actor.actors_name;
    this._birthday = actor.birthday;
    this._nationality = actor.nationality;
  }

  public get actorsName(): String {
    return this._actorsName;
  }

  public set actorsName(value: String) {
    this._actorsName = value;
  }

  public get birthday(): String {
    return this._birthday;
  }
  
  public set birthday(value: String) {
    this._birthday = value;
  }

  public get nationality(): String {
    return this._nationality;
  }

  public set nationality(value: String) {
    this._nationality = value;
  }
}