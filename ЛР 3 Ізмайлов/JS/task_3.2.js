let session = [
    { name: "Дисципліна 1", mark: 61, passed: true },
    { name: "Дисципліна 2", mark: 84, passed: true },
    { name: "Дисципліна 3", mark: 92, passed: true },
    { name: "Дисципліна 4", mark: 41, passed: false },
    { name: "Дисципліна 5", mark: 83, passed: true }
];

function displaySubjects() {
    session.sort((a, b) => b.passed - a.passed);
    let output = "Дисципліни:\n";
    session.forEach(subject => {
        output += `${subject.name} - ${subject.mark} балів (${subject.passed ? "зараховано" : "незараховано"})\n`;
    });
    alert(output);
}

function addSubject(name, mark) {
    let existingSubject = session.find(subject => subject.name === name);
    if (existingSubject) {
        existingSubject.mark += mark;
        if (existingSubject.mark >= 60) {
            existingSubject.passed = true;
        }
    } else {
        let passed = mark >= 60;
        session.push({ name: name, mark: mark, passed: passed });
    }
}

function calculateAverageMark() {
    let totalMark = 0;
    let totalSubjects = session.length;
    session.forEach(subject => {
        totalMark += subject.mark;
    });
    let averageMark = totalMark / totalSubjects;
    alert(`Середній бал: ${averageMark}`);
}

function countFailedCourses(session) {
    let count = 0;
    for (let course of session) {
        if (course.passed === false) {
            count++;
        }
    }
    alert(count);
}

function findCourseWithMaxMark(session) {
    let maxMark = 0;
    let maxMarkCourse = '';
    for (let course of session) {
        if (course.mark > maxMark) {
            maxMark = course.mark;
            maxMarkCourse = course.name;
        }
    }
    alert(maxMarkCourse);
}

function findCoursesByMark(session, mark) {
    let passedCourses = [];
    for (let course of session) {
        if (course.passed && course.mark >= mark) {
            passedCourses.push(course.name);
        }
    }
    alert(passedCourses);
}
