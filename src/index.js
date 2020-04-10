import cipher from './cipher.js';

    
    
    const botaoCodificar=document.getElementById("botaoCodificar");
    const botaoDecodificar=document.getElementById("botaoDecodificar");
    
    function printaResultadoCodificar(){
        let valorDeslocamento = Number(document.getElementById("valorDeslocamento").value);
        let palavraDigitada = document.getElementById("palavraDigitada").value.toUpperCase();

        document.getElementById("resultado").innerHTML= cipher.encode(valorDeslocamento, palavraDigitada);
    console.log(cipher.encode(valorDeslocamento, palavraDigitada));
    }
    
    botaoCodificar.addEventListener("click", printaResultadoCodificar);
   

    function printaResultadoDecodificar(){
        let valorDeslocamento = -Number(document.getElementById("valorDeslocamento").value);
        let palavraDigitada = document.getElementById("palavraDigitada").value.toUpperCase();

        document.getElementById("resultado").innerHTML= cipher.decode(valorDeslocamento, palavraDigitada);
    console.log(cipher.decode(valorDeslocamento, palavraDigitada));
    }
    
    botaoDecodificar.addEventListener("click", printaResultadoDecodificar);


console.log(cipher);
