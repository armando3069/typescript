"use strict";
class UserProfile {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
    getDisplayData() {
        return `Name: ${this.name}\nLevel: ${this.level}`;
    }
    forPrivate() {
        return this.getDisplayData();
    }
}
let userProfile = new UserProfile("Legendary", 60);
console.log(userProfile.forPrivate());
//# sourceMappingURL=privateClass.js.map