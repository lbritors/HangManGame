
import "./css/style.css"

export default function Jogo(props) {
    const {cor,setCor, imagem, selecionaPalavra, setPalavraEscolhida, palavraUnderline, setPalavraUnderline, setDisabled, erro} = props;


    let {palavraEscolhida} = props
    function iniciaJogo() {
        palavraEscolhida = selecionaPalavra();
        setPalavraEscolhida(palavraEscolhida);
        console.log(palavraEscolhida);
        setPalavraUnderline([palavraEscolhida.map(p => p="_ ")]);
        setDisabled(false); 
        setCor("black");

    }



    return (
        <div className="jogo">
            <img  src={imagem} alt="forca" data-test="game-image"/>
            <div className="palavra">
                <button onClick={iniciaJogo} data-test="choose-word" ><span className="button">Escolher palavra</span></button>
                <div className="escolhida">
                    <p className={`palavra-escolhida ${cor}`}> <span>{palavraUnderline}</span></p>
                </div>
            </div>
        </div>
    );
}