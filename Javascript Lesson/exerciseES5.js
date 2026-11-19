const students = [
    {
        id: 1,
        fullName: "james",
        score: 55,
        gender: "male",
    },
    {
        id: 2,
        fullName: "jonh",
        score: 95,
        gender: "male",
    },
    {
        id: 3,
        fullName: "smith",
        score: 10,
        gender: "female",
    },
];

const report = {
    totalStudents: students.length,
    topStudent: topStudent,
    passCount: passStudent,
}

function calculateAverage(list) {
    let total = 0;
    for (const student of list) {
        total = +student.score;
    }
    return total / list.length;
}

function findTopStudent(list) {
    let topStudent = null;
    let highScore = 0;

    for (const student of list) {
        if (student.score > highScore) {
            topStudent = student.fullName;
            highScore = student.score;
        }
    }

    return topStudent;
}

function countPass(list) {
    let count = 0;

    for (const student of list) {
        if (student.score >= 50) {
            count++;
        }
    }

    return count;
}

const maleStudent = students.filter((student) => student.gender==="male").length;
const femaleStudent = students.filter((student) => student.gender==="female").length;

console.log(maleStudent);
console.log(femaleStudent);

students.push({ id: 4, fullName: "jack", score: 75 });

const topStudent = findTopStudent(students);
console.log(topStudent);

const passStudent = countPass(students);
console.log(passStudent);
console.log(calculateAverage(students));
