let numeroSecreto;
let tentativas = 0;

function gerarNumeroAleatorio() {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            numeroSecreto = Math.floor(Math.random()*100)+1;
        })
    }
    )
}