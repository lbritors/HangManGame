





export default function Letras(props) {
    const {disabled, alfabeto} = props;

    return (
        <div className="letras">
            {alfabeto.map(l => <button  key={l} className={`botao-letras ${disabled === true ? "desabilitado" : "habilitado"}`}><span className="letra">{l.toLocaleUpperCase()}</span></button>)
            }
        </div>
    );
}