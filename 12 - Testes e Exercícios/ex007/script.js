let num = 150

const promise = new Promise((resolve, reject) => {
    const conta2 = num + 300

    if(conta2 !== 500){
        resolve("Incorreto!!");;
    }else{
        reject("Correto!!");
    }
})

.then(messagemResolve => {
    console.log(messagemResolve);
}) .catch(mensagemReject => { 
    console.log(mensagemReject);
})



const primeiraFunction = () => {
    const conta = num + 200

    if(conta === 350){
        console.log("Correto!!");
    }else{
        console.log("Incorreto!!");
    }
}



primeiraFunction()