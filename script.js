let grades = [];

function addGrade() {
    const studentName = document.getElementById('student-name').value;
    const studentGrade = parseFloat(document.getElementById('student-grade').value);

    if (studentName && !isNaN(studentGrade)) {
        grades.push({ name: studentName, grade: studentGrade });
        displayGrades();
    } else {
        alert('Please enter a valid name and grade');
    }
}

function deleteGrade(index) {
    grades.splice(index, 1);
    displayGrades();
}

function displayGrades() {
    const gradesList = document.getElementById('grades-list');
    gradesList.innerHTML = '';
    grades.forEach((student, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${student.name}: ${student.grade}`;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.onclick = () => deleteGrade(index);
        listItem.appendChild(deleteButton);
        gradesList.appendChild(listItem);
    });
}

function calculateResults() {
    if (grades.length === 0) {
        alert('No grades to calculate');
        return;
    }

    const averageGrade = grades.reduce((acc, curr) => acc + curr.grade, 0) / grades.length;
    const highestGrade = Math.max(...grades.map(student => student.grade));
    const lowestGrade = Math.min(...grades.map(student => student.grade));

    document.getElementById('average-grade').textContent = `Average Grade: ${averageGrade.toFixed(2)}`;
    document.getElementById('highest-grade').textContent = `Highest Grade: ${highestGrade}`;
    document.getElementById('lowest-grade').textContent = `Lowest Grade: ${lowestGrade}`;
}
