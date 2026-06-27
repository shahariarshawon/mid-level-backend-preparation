// for of loop used in array
const nums = [10, 20, 30, 40, 50, 60];
for (let num of nums) {
    console.log(num);
}


// for in loop used in object

const user = {
    name: "Shahariar",
    age: 24,
    university: "IUBAT- International University of Business Agriculture and Technology"
}

for (const key in user) {
    console.log(key, " ---> ", user[key])
}