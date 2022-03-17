type Admin = {
  name: string;
  privilages: string[]
}

type Employee = {
  name: string
  startDate: Date
}

// interface ElevatedEmployee extends Employee, Admin { }

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privilages: ['create-server'],
  startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number
function add(a: string, b: string): string
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }
  return a + b
}

const result = add('are', 'dsa')
result.split(' ')

// type UnknowEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknowEmployee) {
//   console.log('Name: ' + emp.name)
//   if ('privilages' in emp) {
//     console.log('Privilages: ' + emp.privilages)
//   }
//   if ('startDate' in emp) {
//     console.log('StartDate: ' + emp.startDate)
//   }
// }

// printEmployeeInformation(e1)

// class Car {
//   drive() {
//     console.log("Drive")
//   }
// }


// class Truck {
//   drive() {
//     console.log("Drive Truck")
//   }
//   loadCargo(amount: number) {
//     console.log('Loading cargo... ' + amount)
//   }
// }

// type Vehicle = Car | Truck

// const v1 = new Car
// const v2 = new Truck

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1)
// useVehicle(v2)

// interface Bird {
//   type: 'bird'
//   flyingSpeed: number;
// }
// interface Horse {
//   type: 'horse'
//   runningSpeed: number;
// }

// type Animale = Bird | Horse

// function moveAnimal(animal: Animale) {
//   let speed;
//   switch (animal.type) {
//     case 'bird':
//       speed = animal.flyingSpeed
//       break;
//     case 'horse':
//       speed = animal.runningSpeed
//       break;
//     default:
//       break;
//   }
//   console.log('Moving with speed: ' + speed)
// }


// moveAnimal({ type: 'bird', flyingSpeed: 20 })

// // const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

// userInputElement.value = "Hi there"

// interface ErrorContainer {
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: "Not a valid email",
//   username: "Must start with a capital charakter"
// }

