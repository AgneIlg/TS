type Student = {
    name: string,
    age: number,
    isMarried: boolean,
    marks?: number[],
    favoriteColor?: string,
}
const jonas: Student = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
    favoriteColor: 'red',
};
const maryte: Student = {
    name: 'Maryte',
    age: 88,
    isMarried: false,
    marks: [10, 2, 8, 4, 6],
};


function studentMarksAverage(student: Student): string | number {
   const str = 'Studentas';

if (!Array.isArray(student.marks)) {
    return `${str} (${student.name}) neturi pazymiu.`
}

if (student.marks.length === 0) {
    return `${str} (${student.name}) turi tuscia pazymiu masyva.`
}
    let sum = 0;
    for(const mark of student.marks){
        sum +=mark;
}
    return sum / student.marks.length
}
console.log(studentMarksAverage(jonas));
console.log(studentMarksAverage(maryte));

