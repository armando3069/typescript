"use strict";
class User {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
    getDisplayData() {
        return `Name: ${this.name}\nLevel: ${this.level}`;
    }
}
let user = new User("Legendary", 50);
console.log(user.getDisplayData());
//# sourceMappingURL=class.js.map