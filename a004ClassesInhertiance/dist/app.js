"use strict";
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
function printEmployeeInformation(emp) {
    console.log('Name: ' + emp.name);
    if ('privilages' in emp) {
        console.log('Privilages: ' + emp.privilages);
    }
    if ('startDate' in emp) {
        console.log('StartDate: ' + emp.startDate);
    }
}
printEmployeeInformation(e1);
class Car {
    drive() {
        console.log("Drive");
    }
}
class Truck {
    drive() {
        console.log("Drive Truck");
    }
    loadCargo(amount) {
        console.log('Loading cargo... ' + amount);
    }
}
const v1 = new Car;
const v2 = new Truck;
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
        default:
            break;
    }
    console.log('Moving with speed: ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 20 });
const userInputElement = document.getElementById('user-input');
userInputElement.value = "Hi there";
const errorBag = {
    email: "Not a valid email",
    username: "Must start with a capital charakter"
};
