let botaoCalcular = document.getElementById("botaocalcular");

function calculateIMC() {
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value/100;
    let resultado = document.getElementById('resultado');

    if (altura === "" || peso === ""){

        resultado.textContent = "Preencha todos os campos";
        
    } else if (altura < 0 || peso < 0){
        
        resultado.textContent = "Valores negativos não são aceitos!";

    } else {
        let imc = (peso / Math.pow(altura,2)).toFixed(2);

        let mensagem = ""

        if (imc < 18.5) mensagem = "Você está abaixo do peso!";
        else if(imc < 25) mensagem = "Parabéns! Você está no peso Ideal!";
        else if (imc < 30) mensagem = "Você está levemente acima do peso!";
        else if (imc < 35) mensagem = "Cuidado! Obesidade grau I";
        else if (imc <40) mensagem = "Cuidado! Obesidade grau II";
        else mensagem = "Cuidado! Obesidade grau III";
        
        resultado.textContent = `Seu IMC é ${imc}. ${mensagem}`;
    } 
}

console.log(botaoCalcular);

botaoCalcular.addEventListener('click',calculateIMC);



