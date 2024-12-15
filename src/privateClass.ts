class UserProfile {
  name: string;
  level: number;

  constructor(name: string, level: number) {
    this.name = name;
    this.level = level;
  }

  private getDisplayData(): string {
    return `Name: ${this.name}\nLevel: ${this.level}`;
  }

  forPrivate(): string {
    return this.getDisplayData();
  }
}

// clasa care incearca sa mosteneste o metoda privata 
class UserSettings extends UserProfile{
   forPrivate() : string{
     return  super.getDisplayData();
   }
}

let userProfile = new UserProfile("Legendary", 60);
console.log(userProfile.forPrivate());
