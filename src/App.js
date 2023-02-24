import Jogo from "./Jogo";
import Letras from "./Letras";
import { useState } from "react";
import palavras from "./palavras";
import "./css/reset.css";
import "./css/style.css";


function App() {
  const [habilitaTeclado, setHabilitaTeclado] = useState(true);
  const [habilitaLetra, setHabilitaLetra] = useState(false);
  const [letraHabilitada, setLetraHabilitada] = useState("habilitado");
  let [palavraEscolhida, setPalavraEscolhida] = useState([]);
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const [letraClicada, setLetraClicada] = useState([]);
  
  console.log(letraClicada);
  
  function sortear() {
    const sorteio = Math.floor(Math.random(palavras.length)*100);
    return sorteio;
  }
  
  function selecionaPalavra() {
    const sorteio = sortear();
    const caracter = Array.from(palavras[sorteio]);
    return caracter;
  }
  
  
  function verificaLetra(event) {
    const novaletraClicada = event.innerText;
    console.log(novaletraClicada);
  
    setLetraClicada([...letraClicada, novaletraClicada]);
    
  }

  return (
    <div className="App">
      <Jogo habilitaTeclado={habilitaTeclado} setHabilitaTeclado={setHabilitaTeclado} sortear={sortear}  selecionaPalavra={selecionaPalavra} palavraEscolhida={palavraEscolhida} setPalavraEscolhida={setPalavraEscolhida} alfabeto={alfabeto}/>
      <Letras verificaLetra={verificaLetra} alfabeto={alfabeto} habilitaTeclado={habilitaTeclado} setHabilitaTeclado={setHabilitaTeclado} habilitaLetra={habilitaLetra} setHabilitaLetra={setHabilitaLetra}/>
    </div>
  );
}

export default App;
