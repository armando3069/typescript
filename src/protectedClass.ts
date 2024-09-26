class PlayerInfo {
  name: string;
  level: number;

  constructor(name: string, level: number) {
    this.name = name;
    this.level = level;
  }

  protected getData(): string {
    return `Name: ${this.name}\nLevel: ${this.level}`;
  }
}

type Role = "Member" | "Elder" | "Co-leader" | "Leader";

class RolePlayer extends PlayerInfo {
  role: Role;

  constructor(name: string, level: number, role: Role) {
    super(name, level);
    this.role = role;
  }

  displayInfo(): string {
    const playerInfo = this.getData();
    return `${playerInfo}\nRole: ${this.role}`;
  }
}

const pl = new RolePlayer("Legendary", 200, "Leader");
console.log(pl.displayInfo());
