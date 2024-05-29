import { User } from "../modules/User.js";
// Modificam nume, email, varsa
let user = new User("1", "ion", "ion@ion.com", 22);
// user.doarme(7);
console.log(user);
user.nume = "Dan";
user.varsta = 20;
console.log(user);
user.mananca(200);