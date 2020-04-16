import cipher from './cipher.js';

    
    
    const botaoCodificar=document.getElementById("botao-codificar");
    const botaoDecodificar=document.getElementById("botao-decodificar");
    
    function printaResultadoCodificar(){
        let valorDeslocamento = Number(document.getElementById("valor-deslocamento").value);
        let palavraDigitada = document.getElementById("palavra-digitada").value.toUpperCase();

        document.getElementById("resultado").innerHTML= cipher.encode(valorDeslocamento, palavraDigitada);
    console.log(cipher.encode(valorDeslocamento, palavraDigitada));
    }
    
    botaoCodificar.addEventListener("click", printaResultadoCodificar);
   

    function printaResultadoDecodificar(){
        let valorDeslocamento = -Number(document.getElementById("valor-deslocamento").value);
        let palavraDigitada = document.getElementById("palavra-digitada").value.toUpperCase();

        document.getElementById("resultado").innerHTML= cipher.decode(valorDeslocamento, palavraDigitada);
    console.log(cipher.decode(valorDeslocamento, palavraDigitada));
    }
    
    botaoDecodificar.addEventListener("click", printaResultadoDecodificar);


console.log(cipher);
