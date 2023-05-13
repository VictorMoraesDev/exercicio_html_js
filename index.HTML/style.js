//função para enviar o evento
function enviar(event){
    event.preventDefault();

//Obter o valor dos campos de entrada
let primeiroValor = parseInt(document.getElementById("primeiro").value);
let segundoValor = parseInt(document.getElementById("segundo").value);

//Verifique se o segundo valor e maior que o primeiro
if (segundoValor > primeiroValor){
    //Exibir mensagem do formulario valido 
    document.querySelector(".certo").style.display = "block";
    document.querySelector(".errado").style.display = "none";
} else {
    //Exiba mensagem do formulario invalido
    document.querySelector(".certo").style.display = "none";
    document.querySelector(".errado").style.display = "block";
}

}


//adicionar o evento para o envio do formulario
document.getElementById("form-numero").addEventListener("submit",enviar);