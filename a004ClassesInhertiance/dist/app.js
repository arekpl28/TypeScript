"use strict";
var _a;
const e1 = {
    name: "Max",
    privilages: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('are', 'dsa');
result.split(' ');
const fetchedUserData = {
    id: "u1",
    name: "max",
    job: { title: "CEO", description: "My own company" }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
