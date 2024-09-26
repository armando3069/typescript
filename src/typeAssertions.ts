const myInput = document.getElementById("my-inpt");
const myInputValue = (<HTMLInputElement>myInput).value;
const myInputValue2 = (myInput as HTMLInputElement).value;

let value: any = [1, 2, 3, 4, 5];
let arrLength: number = (value as Array<number>).length; 
console.log(arrLength);
