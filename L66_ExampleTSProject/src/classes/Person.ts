export class Person {
  private Name: string;
  private Age: number;
  private Gender?: string;

  constructor(name: string, age: number) {
    debugger;
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