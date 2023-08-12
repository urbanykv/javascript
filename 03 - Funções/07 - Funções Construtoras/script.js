let disciplinas = [
    { id: 1, nome: "português", carga_horaria: 250 },
    { id: 2, nome: "matemática", carga_horaria: 220 },
    { id: 3, nome: "história", carga_horaria: 150 },
    { id: 4, nome: "geografia", carga_horaria: 150 },
    { id: 5, nome: "inglês", carga_horaria: 70 }
];


for(let disciplina of disciplinas){

    let id_disciplina = disciplina.id;
    let nome_disciplina = disciplina.nome;
    let carga_horaria_disciplina = disciplina.carga_horaria;

    console.log("Id da disciplina: " + id_disciplina);
    console.log("Nome da disciplina: " + nome_disciplina);
    console.log("Carga horária da disciplina: " + carga_horaria_disciplina);

    console.log("\n");

}