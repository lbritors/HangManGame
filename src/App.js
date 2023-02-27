import Jogo from "./Jogo";
import Letras from "./Letras";
import { useState } from "react";
import palavras from "./palavras";
import "./css/reset.css";
import "./css/style.css";
import forca from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png" 
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"



function App() {
  const [habilitaTeclado, setHabilitaTeclado] = useState(true);
  const [habilitaLetra, setHabilitaLetra] = useState(false);
  let [palavraEscolhida, setPalavraEscolhida] = useState([]);
  const [palavraUnderline, setPalavraUnderline] = useState("");
  const [palavraRenderizada, setPalavraRenderizada] = useState([]);
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const [letraClicada, setLetraClicada] = useState([]);
  let [erro, setErro] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [imagem, setImagem] = useState(forca);
  const [cor, setCor] = useState("purple");
  const forcaArray = [forca, forca1, forca2, forca3, forca4, forca5, forca6];
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
    const acerto = 0;
    if(!estaNoArray) {
    setLetraClicada([...letraClicada, novaletraClicadaLower]);
    }
  
    if(!(palavraEscolhida.includes(novaletraClicadaLower))) {
      setErro(contador);
      setImagem(forcaArray[erro+1]);
    } else if (palavraEscolhida.includes(novaletraClicadaLower)) {
     
       for(let i = 0; i < palavraEscolhida.length; i ++) {
         if(palavraEscolhida[i] === novaletraClicadaLower)
           palavraUnderline.slice(palavraUnderline[i] = palavraEscolhida[i]);
      }
    }
    fimDeJogo();
  }

  function fimDeJogo() {
    if (contador === 6) {
      setPalavraUnderline(palavraEscolhida);
      setDisabled(true);
      setCor("red");
      setErro(0);
      setLetraClicada([]);
      setImagem(forcaArray[erro+1]);
    } 
  }

  return (
    <div className="App">
      <Jogo  setCor={setCor} cor={cor} palavraRenderizada={palavraRenderizada} setPalavraRenderizada={setPalavraRenderizada} letraClicada={letraClicada} setDisabled={setDisabled} imagem={imagem} setPalavraUnderline={setPalavraUnderline} palavraUnderline={palavraUnderline} forcaArray={forcaArray}  habilitaTeclado={habilitaTeclado} setHabilitaTeclado={setHabilitaTeclado} sortear={sortear}  selecionaPalavra={selecionaPalavra} palavraEscolhida={palavraEscolhida} setPalavraEscolhida={setPalavraEscolhida} alfabeto={alfabeto}/>
      <Letras  letraClicada={letraClicada} disabled={disabled} verificaLetra={verificaLetra} alfabeto={alfabeto} habilitaTeclado={habilitaTeclado} setHabilitaTeclado={setHabilitaTeclado} habilitaLetra={habilitaLetra} setHabilitaLetra={setHabilitaLetra}/>
    </div>
  );
}

export default App;
