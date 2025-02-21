"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // num.toUperCase() --> if the value type is not defined then it could be a problem.so for specific type function define the value type
    return num + 2;
    // return 'hello world'
}
function getUpper(val) {
    return val.toUpperCase(); // here another problem if not assing the value type then if the call is number then how can a number is going to be upercase?so thats why we need to define the value type.
}
function signUpUser(name, email, isPaid) { } //Problem:there could be multiple value.so if the value type not defined then all values could be same type.
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}; // There could be have value type but if not defined any value then define the value like this.
var myValue = addTwo(5);
getUpper('fahim');
signUpUser("shakib khan", "shakib@.com", false);
loginUser('h', 'h@h.com');
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return false;
}
var getHello = function (s) {
    return '';
};
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
