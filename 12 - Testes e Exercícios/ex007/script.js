let num = 150

const promise = () => new Promise((resolve, reject) => {
    const conta2 = num + 300

    setInterval(() => {
        if(conta2 === 450){
            resolve("Correto!!");
        }else{
            reject("Incorreto!!");
        }
    }, 2000)
});

async function executarPromise(){
    try{
        const response = await promise()
        console.log(response);
    }catch(erro){
        console.log(erro);
    }
}

executarPromise()