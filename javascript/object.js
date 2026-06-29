// object

const student = {
    name: "Shahariar",
    age: 24,
    isMarried: true,
    isLoggedIn: function () {
        console.log("User is logged in")
    }
}
student.isLoggedIn()
// destructuring
const {name,isMarried}=user;
