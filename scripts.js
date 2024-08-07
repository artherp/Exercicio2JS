const students = [
    {
        name: "Luiz",
        firstGrade: 5,
        secondGrade: 9,
    },
    {
        name: "Arthur",
        firstGrade: 9,
        secondGrade: 9,
    },
    {
        name: "Pierre",
        firstGrade: 5,
        secondGrade: 4,
    },
];

function averageGrade(firstGrade, secondGrade) {
    return (firstGrade + secondGrade) / 2;
}

function printStudentAverage(student) {
    let average = averageGrade(student.firstGrade, student.secondGrade);
    if (average >= 7) {
        alert(`
        A média do(a) aluno(a) ${student.name} é: ${average}
        \nParabéns, ${student.name}! você foi aprovado(a) no concurso!`);
    } else {
        alert(`
        A média do(a) aluno(a) ${student.name} é: ${average}
        \nNão foi dessa vez, ${student.name}! tente novamente!`);
    }
}

for (let student of students) {
    printStudentAverage(student);
}
