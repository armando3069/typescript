"use strict";
const str = {
    a: "Dan",
    b: "Armando"
};
const compareString = (str) => {
    return str.a.length === str.b.length ? 0 : str.a.length > str.b.length ? 1 : -1;
};
console.log(compareString(str));
//# sourceMappingURL=function.js.map