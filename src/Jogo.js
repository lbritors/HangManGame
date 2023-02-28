

export default function Jogo(props) {
    const {forcaArray, setImagem, setLetraClicada, cor,setCor, imagem, selecionaPalavra, setPalavraEscolhida, palavraUnderline, setPalavraUnderline, setErro} = props

    let {palavraEscolhida} = props

    function iniciaJogo() {
        palavraEscolhida = selecionaPalavra();
        setPalavraEscolhida(palavraEscolhida);
        console.log(palavraEscolhida);
        setPalavraUnderline(palavraEscolhida.map(p => p="_ "));
        setLetraClicada([]); 
        setCor("black");
        setErro(0);
        setImagem(forcaArray[0]);
        
    }



    return (
        <div className="jogo">
            <img  src={imagem} alt="forca" data-test="game-image"/>
            <div className="palavra">
                <button onClick={iniciaJogo} data-test="choose-word" ><span className="button">Escolher palavra</span></button>
                <div className="escolhida">
                    <p className={`palavra-escolhida ${cor}`}> <span data-test="word">{palavraUnderline}</span></p>
                </div>
            </div>
        </div>
    );
}