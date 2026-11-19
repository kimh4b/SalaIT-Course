const students = [
    { id: 1, name: "John" },
    { id: 2, name: "David" },
    { id: 3, name: "Sarah" },
];

//write function to get a student from id wait 3 second then search the student.
//if !student throws an error

//Create a delay function
const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

// Create an asynchronous function

export async function fetchStudentById(id) {
    // Wait 3seconds to continue this function
    await delay(3000);

    // Search the student with this id
    const student = students.find((item) => item.id === id);
    if (!student) {
        // Throw error and stop the function
        throw new Error(`Student with id ${id} not found`);
    }

    // Return the student data
    return student;
}

async function main() {
  

    try {
        const student = await fetchStudentById(1);
        if (student) {
            console.log(`Found: ${student.id} - ${student.name}`);
        }
        console.log(await fetchStudentById(2));
        await fetchStudentById(99);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

main();

// async = alway return a promise
async function getData() {
    // provide the promise with resolve value
    return "Hello";
}

// Without await, you receive the Promise
// Promise { 'Hello' }

// With await, you receive the fulfilled value
// Hello

const result = await getData();

console.log(result);
