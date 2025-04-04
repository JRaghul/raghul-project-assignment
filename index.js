// let emp={
//     name:'jraghul',
//     age:45
// }
// emp.name = 'ram';
// emp.pincode = 100;
// delete emp.age;
// console.log(emp);


let employee = {
    id: 101,
    name: "Raghul",
    department: "IT",
    salary: 50000,
    skills: ["JavaScript", "Angular", "Node.js"]
};
employee.experience = 3;
employee.salary = 6000;
employee.skills.push("typescript");
employee.skills.pop("Node.js");

delete employee.department;
//console.log(employee);

let student = {
    name: "Raghul",
    age: 24,
    marks: [85, 90, 78] // Existing marks
};

student.marks.push(88);
student.marks.values(100)
console.log(student);