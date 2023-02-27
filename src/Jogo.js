


export default function Jogo(props) {
    const {imagem, selecionaPalavra, setPalavraEscolhida, palavraUnderline, setPalavraUnderline, setDisabled, letraClicada, palavraRenderizada, setPalavraRenderizada} = props;


    let {palavraEscolhida} = props
    function iniciaJogo() {
        palavraEscolhida = selecionaPalavra();
        setPalavraEscolhida(palavraEscolhida);
        console.log(palavraEscolhida);
        setPalavraUnderline([palavraEscolhida.map(p => p="_ ")]);
        setDisabled(false); 
    }

    // function mostraLetra() {
    //     const array = [palavraEscolhida.filter((p,i) => function(p,i){palavraUnderline[i]= p})];
    //     for(let i = 0; i < palavraEscolhida; i++) {
    //         if()
    //     }
    // }
    
    // mostraLetra();

    



    return (
        <div className="jogo">
            <img  src={imagem} alt="forca" data-test="game-image"/>
            <div className="palavra">
                <button onClick={iniciaJogo} data-test="choose-word" ><span className="button">Escolher palavra</span></button>
                <div className="escolhida">
                    <p className="palavra-escolhida"><span>{palavraUnderline}</span></p>
                </div>
            </div>
        </div>
    );
}