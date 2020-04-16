const cipher = {
  encode: function cencode(valorDeslocamento, palavraDigitada) {

    let tamanhoDaPalavra=palavraDigitada.length;  
    let resultado="";
    
    for(let contador=0; contador<tamanhoDaPalavra;contador++){
     let novaLetra=(palavraDigitada.charCodeAt(contador)-"A".charCodeAt()+valorDeslocamento)%26+"A".charCodeAt();
     

resultado+=String.fromCharCode(novaLetra);
  
    }
    
  return resultado    

},  
  decode: function decode(valorDeslocamento, palavraDigitada){
    let tamanhoDaPalavra=palavraDigitada.length;  
    let resultado="";

    for(let contador=0; contador<tamanhoDaPalavra; contador++){
      let nova=(palavraDigitada.charCodeAt(contador)+"A".charCodeAt()+valorDeslocamento)%26+"A".charCodeAt();
      
      resultado+=String.fromCharCode(nova);
      
      }
      
      return resultado;
      }

}
export default cipher;
