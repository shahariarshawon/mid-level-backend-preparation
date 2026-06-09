// data types are premitive and reference 
// premitive data types
// string
const text = "Hello this is me Al Shahariar Arafat Shawon";
console.log(text);
console.log(`Text can be ${text}`)
console.log(typeof text)  //string

// number
const salary = 25600;
console.log(`Salary of Shahariar is ${salary}`);
console.log(typeof salary)  //number

// boolean
const isValid = true;
isValid ? console.log(`Shahariar can get the salary of ${salary}`) : console.log("He is not eligible to get the money")
console.log(typeof isValid)  //boolean

// undefined
let she;
console.log(she)
console.log(typeof she)  //undefined

// null
const value = null;
console.log(value)
console.log(typeof value)  //object

// BigInt
const value2 = BigInt(2500);
console.log(value2)
console.log(typeof value2)  //bigint

// symbol
const value3 = Symbol("Al Shahariar Arafat Shawon")
console.log(value3)
console.log(typeof value3) //symbol

// non- premitive types/ refference
// objects - collection of values
const student = {
    name: "Al shahariar Arafat Shawon",
    email: "shahariarshawon.dev@gmail.com",
    age: 24,
    university: "IUBAT- Internation University of Business Agriculture and Technology",
    isMarried: true
}
// key:value
console.log(student);
console.log(student.isMarried);
console.log(student["name"]);
// console.log(Object.keys);
// console.log(Object.values)

console.log(typeof student)