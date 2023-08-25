//Asinc e Await

const novaPromise = () => new Promise((resolve, reject) => {
    let valor = Math.floor(Math.random() * 10);
    setInterval(() => {
        if(valor % 2 == 0){
            resolve(`O ${valor} é par.`)
        }else{reject(`O ${valor} é ímpar.`)}
    }, 2000)
})

async /*Transforma sync em async */ function executarPromise(){
    try{
        const response = await /*espera funcionar*/ novaPromise()
        console.log(response);
    }catch(erro){
        console.log(erro);
    }
}

executarPromise()