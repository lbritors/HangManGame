

export default function Letras(props) {
    const {alfabeto, habilitaLetra, setHabilitaLetra, habilitaTeclado, verificaLetra, letraHabilitada} = props;
   
    return (
        <div className="letras">
            {alfabeto.map((letra) => <button  letra={letra} key={letra} disabled={habilitaTeclado} 
            onClick={(event) => verificaLetra(event.target)} data-test="letter" 
            className={`botao-letras ${habilitaTeclado === true ? "desabilitado" : "habilitado"}`}><span className="letra">
                {letra.toLocaleUpperCase()}</span></button>)}
        </div>
    )
}

function Letra(props) {
   
}