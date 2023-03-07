let fname = prompt('inserisci il tuo nome');
let fsurname = prompt('inserisci il tuo cognome');
let fcolor = prompt('inserisci il tuo colore preferito');
const fnumber = 21;

console.log(fname, fsurname, fcolor);


if (isNaN(fname) && isNaN(fsurname) && isNaN(fcolor)){
    let psw = document.getElementById("pswGenerated").innerHTML = `
    <h2 class="text-white fw-bold title-gradient">La tua password: </h2>
    <h1 class="text-white fw-bold"> ${fname}${fsurname}${fcolor}${fnumber} </h1>
`;
}
else{
    let psw = document.getElementById("pswGenerated").innerHTML = `
    <h2 class="text-white fw-bold title-gradient">La tua password: </h2>
    <h1 class="text-white fw-bold">Inserire dati correttamente. Ricarica la pagina.</h1>
`;
}

