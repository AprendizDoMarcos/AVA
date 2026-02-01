function CardDicas(props){
    return(
        <div className={`${props.cor} my-4 px-5 py-8 w-[98%] rounded-lg m-auto flex justify-between items-center border-t-15 border-emerald-500 shadow-lg shadow-gray-400 hover:-translate-y-2.5 transition-all duration-300`}>
            <h2 className="text-2xl font-bold flex gap-2">{props.titulo} <img className="w-5" src={props.url} alt="icone" /></h2>
            <p className="text-center text-sm">{props.texto}</p>
        </div>
    )
}
export default CardDicas