import { useState } from "react";
import forca from "./assets/forca0.png"
import palavras from "./palavras";

export default function Jogo(props) {
    const {habilitaTeclado, setHabilitaTeclado, selecionaPalavra, setPalavraEscolhida} = props;
    let {palavraEscolhida} = props
    function iniciaJogo() {
        palavraEscolhida = selecionaPalavra();
        setPalavraEscolhida(palavraEscolhida);
        console.log(palavraEscolhida);
        if(habilitaTeclado === false) {
            setHabilitaTeclado(true);
        } else {
            setHabilitaTeclado(false);
        }
    }


    return (
        <div className="jogo">
            <img  src={forca} alt="forca" data-test="game-image"/>
            <div className="palavra">
                <button onClick={iniciaJogo} data-test="choose-word" ><span className="button">Escolher palavra</span></button>
                <div className="escolhida">
                    {palavraEscolhida.map((p, index) => <p key={index} className="palavra-escolhida">{p = "_"}</p>)}
                </div>
            </div>
        </div>
    );
}