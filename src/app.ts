import express from "express";
import {Fundamentals} from "./Fundamentals/index";
import { User } from "./Fundamentals/user";
import { Student } from "./domain/school/student";


const app = express();
app.use(express.json());


const fundamentals = new Fundamentals();


const user1 = new User("Alice");
user1.addAge(30);
user1.addEducation("Bachelor's Degree");
user1.addAddress({
    houseName: "123 Main Street",
    district: "Downtown",
    state: "California",
    country: "USA",
});

// user1.displayDetails();

// console.log(User);

const student1 = new Student("Harvard University");
console.log(student1);




app.get("/", (req, res) => {
  res.json({ message: "Hello TypeScript + Express 🚀" });
});

export default app;
