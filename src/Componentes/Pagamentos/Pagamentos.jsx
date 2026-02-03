function Pagamentos(props){
    return (
        <div className={`${props.largura} bg-teal-400 rounded-lg p-1.5 text-white border-r-4 border-orange-600 text-end mb-1.5 animate-pagamento`}>
            <p>{props.mes} {props.ano} - R$ {props.valor}</p>
        </div>
    )
}

export default Pagamentos