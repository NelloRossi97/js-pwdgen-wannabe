let fname = prompt('inserisci il tuo nome');
let fsurname = prompt('inserisci il tuo cognome');
let fcolor = prompt('inserisci il tuo colore preferito');
const fnumber = 21;

console.log(fname, fsurname, fcolor);

let psw = document.getElementById("app").innerHTML = `
    <h1>${fname}${fsurname}${fcolor}${fnumber}</h1>
`;