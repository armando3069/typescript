"use strict";
function myFunc(args) {
    return args;
}
console.log(myFunc("Hello World"));
const myFunc2 = (args) => {
    return args;
};
console.log(myFunc2(5));
const userPost = {
    name: "My first post",
    description: "My name is and im rule de world!!!",
};
const displayUserPost = (userPost) => {
    return `Name: ${userPost.name}\nDescription: ${userPost.description}`;
};
console.log(displayUserPost(userPost));
const currency = {
    name: "EUR",
    value: 19.25,
};
const displayCurrency = (currency) => {
    return `Currency: ${currency.name}\nValue: ${currency.value}$`;
};
console.log(displayCurrency(currency));
class AirPlane {
    constructor(name, power) {
        this.name = name;
        this.power = power;
    }
    getData() {
        return `Name: ${this.name} Powe: ${this.power}`;
    }
}
const airPlane = new AirPlane("Boeing 747", 45000);
console.log(airPlane.getData());
console.log("Key of AirPlane:", Object.keys(airPlane));
//# sourceMappingURL=generics.js.map