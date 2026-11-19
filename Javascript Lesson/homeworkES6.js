const students = [
    {
        id: 1,
        name: "Jonh",
        gender: "male",
        course: "English",
        score: 95,
    },
    {
        id: 2,
        name: "Jack",
        gender: "male",
        course: "Math",
        score: 55,
    },
    {
        id: 3,
        name: "Emily",
        gender: "female",
        course: "English",
        score: 60,
    },
    {
        id: 4,
        name: "Dara",
        gender: "male",
        course: "Khmer",
        score: 80,
    },
    {
        id: 5,
        name: "Dumbass",
        gender: "female",
        course: "Math",
        score: 25,
    },
];

function getNames(lists) {
    return lists.map((list) => list.name);
}

function getStudentByCourse(lists, course) {
    return lists.filter((list) => {
        return list.course === course;
    });
}

function hasStudentFailed(lists) {
    return lists.some((list) => {
        return list.score < 50;
    });
}

function allPassed(lists) {
    return lists.every((list) => {
        return list.score > 50;
    });
}

function getHighScore(lists) {
    let highscore = lists.reduce((max, list) => {
        return list.score > max ? list.score : max;
    }, 0);

    return highscore;
}

function updateScore(lists, studentName, newScore) {
    let updated = [];
    for (const list of lists) {
        if (list.name === studentName) {
            updated.push({ ...list, score: newScore });
        } else {
            updated.push(list);
        }
    }
    return updated;
}

async function fetchStudentByGender(lists, gender) {
    let student = []
    for (const list of lists) {
        if(list.gender === gender){
            student.push(list.name);
        }
    }


    return student
}

const getStudentByMale = await fetchStudentByGender(students, "male");
console.log(getStudentByMale);
