// 3 - Crie uma função que receba um valor em anos de experiência de um funcionário e retorne o nível de experiência deste conforme:

function exp(){
    var exp = 'Pleno'
    if(exp == 'Júnior'){
        console.log('De 0 a 2 anos');
    }else if('Pleno'){ 
        console.log('De 3 a 5 anos');
    }else if('Senior'){
        console.log('6+');
    }
}

exp()