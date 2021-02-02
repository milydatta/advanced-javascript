const students = [
    {id: 21, names: 'progga'},
    {id: 31, names: 'prokrity'},
    {id: 41, names: 'pritom'},
    {id: 23, names: 'roddur'}
];

const names = students.map( s => s.name);
const ids = students.map( s => s.id);
const bigger = students.filter(s => s.id>25);
const biggerOne = students.find( s => s.id>25);

console.log(biggerOne);