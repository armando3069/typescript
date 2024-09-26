"use strict";
var CarModel;
(function (CarModel) {
    CarModel["BMW"] = "BMW";
    CarModel["MERCEDES"] = "MERDECES";
    CarModel["AUDI"] = "AUDI";
})(CarModel || (CarModel = {}));
const exempleFunction = (car) => {
    return typeof car === "string" ? true : false;
};
console.log(exempleFunction(CarModel.BMW));
//# sourceMappingURL=enum.js.map