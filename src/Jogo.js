import forca from "./assets/forca0.png"

export default function Jogo() {
    return (
        <div className="jogo">
            <img  src={forca} alt="forca" />
            <button ><span className="button">Escolher palavra</span></button>
        </div>
    );
}