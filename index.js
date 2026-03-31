//Create an array of five student objects.
const student = [
    {id: 1, name: "Fidel", score: 95, isActive: true},
    {id: 2, name: "Rahab", score: 88, isActive: false},
    {id: 3, name: "SHeena", score: 92, isActive: true},
    {id: 4, name: "Marvin", score: 78, isActive: false},
    {id: 5, name: "Thomas", score: 96, isActive: true}
];

//Create an array of students who are isActive.
const honorRoll = student.filter(function(student) {
    return student.isActive === true && student.score >= 80;
});

console.log("HonorRoll:", honorRoll);

//Create an array of strings that say student received a grade.
const gradeReport = student.map(function(student) {
    let grade; 
    if (student.score > 90) {
        grade = "A";
    }  else if (student.score > 70) {
        grade = "B";
    } else {
        grade = "C";
    }
    return `${student.name} received a grade of ${grade}`;
});

console.log("Grade Report:", gradeReport);


//Function that takes an id and returns that student's specific object.
function getStudentById(id) {
    let i = student.find(function(student) {
        return student.id === id})
        if (i) {
            return i;
        } else {
            return "student = studentNotFound";
        }

// const student = student.find(student.id === id);
}

console.log("Get Student By ID (3):", getStudentById(30));
// return student || "Student not found";


