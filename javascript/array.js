let students = ["Shahariar", "Shawon", "Arafat"]
let fruits = ["Apple", "Banana", "Jackfruit", "Orange"]

console.log(`${students} are taking ${fruits}`)
console.log(typeof students)

let vehicles = new Array("Rickshaw", "Bus", "Bike", "Cycle")
console.log(vehicles[0])
console.log(vehicles.length)
// to get the last item
console.log(vehicles[(vehicles.length - 1)])
// adding items in an array
vehicles.push("Aeroplane", "Train")
console.log(vehicles)

// adding items at the first
vehicles.unshift("Helicopter");
console.log(vehicles);

// removing item from the beginning
vehicles.shift()
console.log(vehicles)

// removing item from the end 
vehicles.pop()
console.log(vehicles)

// finding items in an array and retuns the index number
console.log(fruits.indexOf("Rickshaw"))
console.log(fruits.indexOf("Orange"))

// find elements but retur true or false
console.log(fruits.includes("Banana"))

// using for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

// for of loop
for (fruit of fruits) {
    console.log("for of loop", fruit)
}

// for each loop
fruits.forEach(function (f) {
    console.log("for each loop", f)
})

// map
let ages = new Array(24, 26, 34, 21, 18, 17, 53, 19, 26)
const doubleNumbers = ages.map((age) => {
    return age * 2;
})
console.log(doubleNumbers)

// filter
const filteredResult = ages.filter(age => {
    return age > 50;
})
console.log(filteredResult);

// reduce
const reducedResult = ages.reduce((age, num) => {
    return age + num;
})
console.log(reducedResult)

// find - output the first value matched
const foundResult = ages.find(age => {
    return age < 40;
})
console.log(foundResult)

// sort array
// const sortedResult = ages.sort();
// const sortedResult = ages.sort((a, b) => a - b)
const sortedResult = ages.sort((a, b) => b - a)
console.log(sortedResult)

// slice
const slicedResult = fruits.slice(2, 4);
console.log(slicedResult)

// splice
const sentence = "My name is "
let splicedResult = sentence.split(" ");
console.log(splicedResult)

// join array
const joinedresult = splicedResult.join(" ");
console.log(joinedresult)

// array destructuring
let names = new Array("name1", "name2", "name3", "name4", "name5");
let [first, , , , second] = names
console.log(first, second);

// spread operator
let spreadResult = new Array(...fruits, ...names, ...students)
console.log(spreadResult)

// array of objects
let objectss = [
    { name: "shawon", age: 24 },
    {
        name: "arafat", age: 25
    },
    {
        name: "Shahariar", age: 26
    },
    {
        isMar: false, university: "IUBAT"
    }
]

console.log(objectss[1].age)