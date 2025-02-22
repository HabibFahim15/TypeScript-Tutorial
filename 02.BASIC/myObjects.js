"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: 'fahim',
    email: 'fahim@gmail.com',
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: 'fahim', isPaid: false, email: 'fahim@gmail.com' };
createUser(newUser);
function createCourse() {
    return { name: 'react.js', price: 100 };
}
