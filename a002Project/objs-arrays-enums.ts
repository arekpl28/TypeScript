// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]
// } = {
//   name: `Arek`,
//   age: 30,
//   hobbies: [
//     'Sports', 'Cooking'
//   ],
//   role: [2, 'author']
// }

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2

enum Role {
  ADMIN = 5, READ_ONLY, AUTHOR
};

const person = {
  name: `Arek`,
  age: 30,
  hobbies: [
    'Sports', 'Cooking'
  ],
  role: Role.ADMIN
}
if (person.role === Role.ADMIN) {
  console.log("admin")
}
// person.role.push('admin');
// person.role[0] = 10;

// person.role=[0,'admin','user']

let favoriteActivities: string[];
favoriteActivities = ["sports"]
console.log(person.name)


for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}