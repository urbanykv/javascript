let data = new Date() // Instanciando Objeto Date

let hora = data.getHours() // Horas

let min = data.getMinutes() // Minutos

console.log(min);
console.log(hora);

if(hora <= 11){
    console.log('bom dia');
}else if(hora <= 17){
    console.log('boa tarde');
}else if(hora <= 23){
    console.log('boa noite');
}else if(hora <= 6){
    console.log('boa madrugada');
}