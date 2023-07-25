//Tratamento de erros com try catch
console.log(nome); // ReferenceError

//Usando o try/catch
try{
    console.log(nome);
}catch(e){
    console.log('Não foi possivel imprimir nome.');
    console.log(e.name);
    console.log(e.message);
} 

//Lançando erros
function dividir(n1, n2){
    if(n1 === 0 || n2 === 0){
        throw("Os valores devem ser positivos");
    }else{
        return n1 / n2;
    }
}

try{
    let res = dividir(5, 0);
    console.log(res);
}catch(e){
    console.log('Não foi possivel dividir.');
}finally{
    console.log('Vamos continuar...');
} //O finally é sempre executado, dando erro ou n.