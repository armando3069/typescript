"use strict";
class PlayerInfo {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
    getData() {
        return `Name: ${this.name}\nLevel: ${this.level}`;
    }
}
class RolePlayer extends PlayerInfo {
    constructor(name, level, role) {
        super(name, level);
        this.role = role;
    }
    displayInfo() {
        const playerInfo = this.getData();
        return `${playerInfo}\nRole: ${this.role}`;
    }
}
const pl = new RolePlayer("Legendary", 200, "Leader");
console.log(pl.displayInfo());
//# sourceMappingURL=protectedClass.js.map