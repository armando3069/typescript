class User {
  name: string;
  level: number;

  constructor(name: string, level: number) {
    this.name = name;
    this.level = level;
  }

  getDisplayData(): string {
    return `Name: ${this.name}\nLevel: ${this.level}`;
  }
}

let user = new User("Legendary", 50);
console.log(user.getDisplayData());
