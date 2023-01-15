export class Person {
  private name: string;
  private age: number;
  private avatar: string;

  constructor(name: string, age: number, avatar: string) {
    this.age = age;
    this.name = name;
    this.avatar = avatar;
  }

  public getAvatar(): string {
    return this.avatar;
  }

  public setAvatar(avatar: string) {
    this.avatar = avatar;
  }

  public getAge(): number {
    return this.age;
  }

  public setAge(age: number) {
    this.age = age;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public saludar(aQuienSaluda: string): string {
    return "Hola " + aQuienSaluda + ", soy " + this.getName()
    + " y tengo " + this.getAge() + "años.";
  }

}
