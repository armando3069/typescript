type Car = string | number;
type Bool = true | false;

enum CarModel {
  BMW = "BMW",
  MERCEDES = "MERDECES",
  AUDI = "AUDI",
}

const exempleFunction = (car: Car): Bool => {
  return typeof car === "string" ? true : false;
};

console.log(exempleFunction(CarModel.BMW));
