import Jogo from "./Jogo";
import Letras from "./Letras";
import { useState } from "react";
import palavras from "./palavras";
import "./css/reset.css";
import "./css/style.css";


function App() {
  const [disabled, setDisabled] = useState(true);
  let [palavraEscolhida, setPalavraEscolhida] = useState([]);
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const [clicada, setClicada] = useState([]);

    
  function sortear() {
    const sorteio = Math.floor(Math.random(palavras.length)*100);
    return sorteio;
  }

  function selecionaPalavra() {
    const sorteio = sortear();
    const caracter = Array.from(palavras[sorteio]);
    return caracter;
  }

  function verificaLetra(EventTarget) {
    console.log(EventTarget);
  }

  return (
    <div className="App">
      <Jogo disabled={disabled} setDisabled={setDisabled} sortear={sortear}  selecionaPalavra={selecionaPalavra} palavraEscolhida={palavraEscolhida} setPalavraEscolhida={setPalavraEscolhida} alfabeto={alfabeto}/>
      <Letras  onClick={()=>verificaLetra(EventTarget)} alfabeto={alfabeto} disabled={disabled}/>
    </div>
  );
}

export default App;
