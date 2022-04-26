const students = [
    {
        name: 'Paul',
        age: 15,
        scores: [
            {matiere: 'Maths', note: 10},
            {matiere: 'Français', note: 12},
            {matiere: 'Anglais', note: 14},
        ]
    },
    {
        name: 'Marie',
        age: 14,
        scores: [
            {matiere: 'Maths', note: 15},
            {matiere: 'Français', note: 9},
            {matiere: 'Anglais', note: 10},
        ]
    },
]
const json = JSON.stringify(students);  //Convertit la donnée JS au format JSON

console.log(json);

const students2 = JSON.parse(json); //Convertit la donnée JSON au format JS

console.log(students2[0].name); //Cible la valeur de la propriété name du premier élément de l'objet students2