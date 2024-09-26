interface IAccount {
  id: number;
  name: string;
  email: string;
  password: number;
}

//Omit - omite un props

interface ICreateAcc extends Omit<IAccount, "id"> {}

const createAcc: ICreateAcc = {};

//Pick - preia un props

interface IAccountId extends Pick<IAccount, "id"> {}

const accountId: IAccountId = {};

//Partial - face ca propsurile sa fie optionale

interface IOptionalAcc extends Partial<IAccount> {}

const optionalAcc: IOptionalAcc = {};

//Readonly - transforma props intr-o versie nemodificabila

interface IReadonlyAcc extends Readonly<IAccount> {}

const readonlyAcc: IReadonlyAcc = {};

//Required - face ca propsurile sa fie necesare

interface IMemberAcc {
  name?: string;
  period?: number;
}

interface IMemberAccRequired extends Required<IMemberAcc> {}

const memberAccRequired: IMemberAccRequired = {};

//Record - creeaza un tip de obiect 

type AccountRole = "admin" | "user";

type AccountPermission = Record<AccountRole, string[]>;

const AccountPermmision: AccountPermission = {
  admin: ["create", "delete"],
  user: ["read"],
};

//Exclude - exclude tipurile 

type AllColors = "red" | "blue" | "green" | "yellow";

type PrimaryColors = Exclude<AllColors, "green">; // red | blue

//Extract -  extrage tipurile 

type SecondaryColors = Extract<AllColors, "green" | "yellow">; //green | yellow

//NonNullable - exclude null & undefined

type NonNullableData = string | null | undefined;

type NonNullableDataString = NonNullable<NonNullableData>; //string

//ReturnType - Obtine tipul valorii returnate intr-o functie

const getUser = () => {
  return { name: "Dan", age: 20 };
};

type UserType = ReturnType<typeof getUser>; // { name: string; age: number; }

//InstanceType - Obtine tipul instantei unei clase

class UserAcc {
    name:  string;
    constructor(name: string){
        this.name = name;
    }
}

type UserInstance = InstanceType<typeof UserAcc>; // UserAcc


