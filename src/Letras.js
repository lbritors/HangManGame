

export default function Letras(props) {
    const {alfabeto, habilitaTeclado, verificaLetra, disabled, letraClicada} = props;
    
    return (
        <div className="letras">
            {alfabeto.map((letra) => <button  letra={letra} key={letra} disabled={disabled || letraClicada.includes(letra)} 
            onClick={(event) => verificaLetra(event.target)} data-test="letter" 
            className={`botao-letras ${disabled === true ? "desabilitado" : "habilitado"}`}><span className="letra">
                {letra.toLocaleUpperCase()}</span></button>)}
        </div>
    )
}
