import { Person } from "./Person";

export class Actor extends Person {
  private Birthday: string;

  constructor(name: string, age: number, birthday: string) {
    super(name, age);
    this.Birthday = birthday;
  }

  public sayMyNameAndAge() : string {
    return `I am too cool to say my name`;
  }
}