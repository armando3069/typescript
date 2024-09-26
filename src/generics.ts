function myFunc<T>(args: T): T {
  return args;
}

console.log(myFunc<string>("Hello World"));

const myFunc2 = <T>(args: T): T => {
  return args;
};

console.log(myFunc2<number>(5));

type UserPost<T> = {
  name: T;
  description: T;
};

const userPost: UserPost<string> = {
  name: "My first post",
  description: "My name is and im rule de world!!!",
};

const displayUserPost = <T>(userPost: UserPost<T>): string => {
  return `Name: ${userPost.name}\nDescription: ${userPost.description}`;
};

console.log(displayUserPost<string>(userPost));

interface ICurrency<T, K> {
  name: T;
  value: K;
}

const currency: ICurrency<string, number> = {
  name: "EUR",
  value: 19.25,
};

const displayCurrency = <T, K>(currency: ICurrency<T, K>): string => {
  return `Currency: ${currency.name}\nValue: ${currency.value}$`;
};

console.log(displayCurrency<string, number>(currency));

class AirPlane<T, K> {
  name: T;
  power: K;

  constructor(name: T, power: K) {
    this.name = name;
    this.power = power;
  }

  getData(): string {
    return `Name: ${this.name} Powe: ${this.power}`;
  }
}

const airPlane = new AirPlane<string, number>("Boeing 747", 45000);
console.log(airPlane.getData());

console.log("Key of AirPlane:", Object.keys(airPlane));
