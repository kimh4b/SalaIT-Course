const courses = [
    {
        classCode: "A101",
        courseName: "English",
        seats: 25,
        enrolled: 15,
        credits: 3,
    },
    {
        classCode: "A102",
        courseName: "Math",
        seats: 25,
        enrolled: 10,
        credits: 3,
    },
    {
        classCode: "A103",
        courseName: "History",
        seats: 25,
        enrolled: 25,
        credits: 4,
    },
];

function seats(list) {
    let available = list.seats - list.enrolled;

    return available;
}

function isFull(list) {
    return list.seats === list.enrolled;
}

function calculateCredits(list) {
    let totalCredits = 0;

    for (const credit of list) {
        totalCredits += credit.credits;
    }

    return totalCredits;
}

function findByCode(list, code) {
    for (const course of list) {
        if (course.classCode === code) {
            return course;
        }
    }

    return null;
   
}

function printReport(list) {
    let totalCredits = calculateCredits(list);
    let totalCourses = list.length;

    console.log("===== COURSE REPORT =====");
    for (const course of list) {
        console.log(
            `${course.classCode} - ${course.courseName} 
Available Seats: ${seats(course)} 
Full: ${isFull(course)} 
Credits: ${course.credits}`,
        );
    }

    console.log(
        `Total Courses: ${totalCourses} \nTotal Credits: ${totalCredits}`,
    );
}

printReport(courses);
