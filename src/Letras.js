

export default function Letras(props) {
    const {alfabeto, verificaLetra, letraClicada} = props;
    
    return (
        <div className="letras">
            {alfabeto.map((letra) => <button  letra={letra} key={letra} disabled={letraClicada.includes(letra)} 
            onClick={(event) => verificaLetra(event.target)} data-test="letter" 
            className={`botao-letras ${letraClicada.includes(letra) ? "desabilitado" : "habilitado"}`}><span className="letra">
                {letra.toLocaleUpperCase()}</span></button>)}
        </div>
    )
}
