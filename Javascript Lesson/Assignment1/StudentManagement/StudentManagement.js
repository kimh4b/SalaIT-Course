const students = [
    {
        id: 1,
        name: "Dara",
        age: 20,
        gender: "Male",
        course: "JavaScript",
        score: 85,
    },
    {
        id: 2,
        name: "Sokha",
        age: 22,
        gender: "Female",
        course: "Flutter",
        score: 65,
    },
    {
        id: 3,
        name: "Vanna",
        age: 19,
        gender: "Male",
        course: "JavaScript",
        score: 92,
    },
    {
        id: 4,
        name: "Nita",
        age: 21,
        gender: "Female",
        course: "Laravel",
        score: 45,
    },
    {
        id: 5,
        name: "Mony",
        age: 23,
        gender: "Male",
        course: "Flutter",
        score: 78,
    },
];

function displayAllStudent(list) {
    for (const student of list) {
        console.log(student);
    }
}

function getStudentById(list, id) {
    

    return list.find((student) => student.id === id);
}

function getStudentByName(list, name) {
    

    return list.find((student) => student.name === name);
}

function getPassedStudent(list) {
    return list.filter((student) => student.score >= 50);
   
}

function getFailedStudent(list) {
    return list.filter((student) => student.score < 50);
    
}

function getStudentByCourse(list, course) {
    return list.filter((student) => student.course === course);
}

function calculateAvgScore(list) {
    if (list.length === 0) return 0;

    let totalScore = 0;
    for (const student of list) {
        totalScore += student.score;
    }

    return totalScore / list.length;
}

function getHighscore(list) {
    let highScore = list.reduce((max, current) => {
        return max.score > current.score ? max : current;
    });

    return highScore;
}

function getLowScore(list) {
    let lowScore = list.reduce((max, current) => {
        return max.score < current.score ? max : current;
    });

    return lowScore;
}

function highToLowScore(list) {
    let highToLow = list.sort((a, b) => {
        return b.score - a.score;
    });

    return highToLow;
}

function getStudentByGender(list, gender) {
    let total = 0;

    for (const student of list) {
        if (student.gender === gender) {
            total++;
        }
    }

    return total;
}

const totalStudent = students.length;
const averageScore = calculateAvgScore(students);
const highScoreStudent = getHighscore(students);
const lowScoreStudent = getLowScore(students);
const passedStudents = getPassedStudent(students);
const failedStudents = getFailedStudent(students);

function main() {
    console.log(
        `Total Student: ${totalStudent}\nAverageScore: ${averageScore}\n\nHighest Score:\n${highScoreStudent.name} - ${highScoreStudent.score}\n\nLowest Score:\n${lowScoreStudent.name} - ${lowScoreStudent.score}\n\nPassed Students: ${passedStudents.length}\nFailed Students: ${failedStudents.length}`,
    );
}

main();
