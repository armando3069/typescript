type Compare = -1 | 0 | 1;

interface IString {
    a: string;
    b: string;
}

const str: IString = {
    a: "Dan",
    b: "Armando"
}

const compareString = (str: IString):Compare => {
    return str.a.length === str.b.length ? 0 : str.a.length > str.b.length ? 1 : -1
}

console.log(compareString(str));
