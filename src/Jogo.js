import { useState } from "react";
import forca from "./assets/forca0.png"
import palavras from "./palavras";

export default function Jogo(props) {
    const {disabled, setDisabled, selecionaPalavra, setPalavraEscolhida} = props;
    let {palavraEscolhida} = props
    function iniciaJogo() {
        if(disabled === true) {
            setDisabled(false);
            palavraEscolhida = selecionaPalavra();
            console.log(palavraEscolhida);
            setPalavraEscolhida(palavraEscolhida);
        } else {
            setDisabled(true);
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