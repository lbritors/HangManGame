import Jogo from "./Jogo";
import Letras from "./Letras";
import { useState } from "react";
import palavras from "./palavras";
import "./css/reset.css";
import "./css/style.css";
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png" 
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"



function App() {
  let [palavraEscolhida, setPalavraEscolhida] = useState([]);
  const [palavraUnderline, setPalavraUnderline] = useState([]);
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const [letraClicada, setLetraClicada] = useState(alfabeto);
  let [erro, setErro] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [imagem, setImagem] = useState(forca0);
  const [cor, setCor] = useState("purple");
  const [acerto, setAcerto] = useState([]);
  const forcaArray = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
  let contador = erro +1;


  
  console.log("letraclicada" ,letraClicada);

  
  function sortear() {
    const sorteio = Math.floor(Math.random(palavras.length)*100);
    return sorteio;
  }
  
  function selecionaPalavra() {
    const sorteio = sortear();
    const caracter = Array.from(palavras[sorteio]);
    return caracter;
  }
  
  console.log("erro", erro);
  
  function verificaLetra(event) {
    const novaletraClicada = event.innerText;
    const novaletraClicadaLower = novaletraClicada.toLowerCase();
    const estaNoArray = letraClicada.includes(novaletraClicada);
    if(!estaNoArray) {
      setLetraClicada([...letraClicada, novaletraClicadaLower]);
    }
    
    if(!(palavraEscolhida.includes(novaletraClicadaLower))) {
      setErro(contador);
      setImagem(forcaArray[erro+1]);
      fimDeJogo();
    } else  {
      let novoacerto = acerto + 1;
      setAcerto(novoacerto);
      let novaPalavra = [...palavraUnderline];
      palavraEscolhida.forEach((l, i) => {if(novaletraClicadaLower === l) {
        novaPalavra[i] = palavraEscolhida[i];
      }
    })
    
    const certo = novaPalavra;
    if(novaPalavra.join() === palavraEscolhida.join()) {
      setCor("green");
      setLetraClicada(alfabeto);
    }
    console.log("nova palavra", novaPalavra);
    setPalavraUnderline(certo);
    fimDeJogo();

    }
}

  function errou() {
    setPalavraUnderline(palavraEscolhida);
    setLetraClicada(alfabeto);
    setCor("red");
    setImagem(forcaArray[erro+1]);
  }
  
  

  function fimDeJogo() {
    if (contador === 6) {
      errou();
    } 
  }


  return (
    <div className="App">
      <Jogo fimDeJogo={fimDeJogo} erro={erro} forcaArray={forcaArray} setImagem={setImagem} setLetraClicada={setLetraClicada} setErro={setErro} setCor={setCor} cor={cor}  letraClicada={letraClicada} setDisabled={setDisabled} imagem={imagem} setPalavraUnderline={setPalavraUnderline} palavraUnderline={palavraUnderline}  sortear={sortear}  selecionaPalavra={selecionaPalavra} palavraEscolhida={palavraEscolhida} setPalavraEscolhida={setPalavraEscolhida} alfabeto={alfabeto}/>
      <Letras  letraClicada={letraClicada} disabled={disabled} verificaLetra={verificaLetra} alfabeto={alfabeto}/>
    </div>
  );
}

export default App;
