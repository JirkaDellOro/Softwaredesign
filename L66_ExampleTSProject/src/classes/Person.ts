import { v4 } from 'uuid';

export class Person {
  private Uuid: string = v4();
  private Name: string;
  private Age: number;
  private Gender?: string;

  constructor(name: string, age: number) {
    this.Name = name;
    this.Age = age;
  }

  public sayMyNameAndAge() : string {
    return `My name is ${this.Name} and i am ${this.Age} years old!`;
  }

  public setGender(gender: string) : void {
    this.Gender = gender;
  }
}