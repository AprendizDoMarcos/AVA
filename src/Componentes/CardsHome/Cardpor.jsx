//Porcentagem

function Cardpor(props){
    return(
        <div className="flex flex-col gap-4 shadow rounded-md w-4/5 sm:w-1/3 h-60 shadow-black p-3 hover:-translate-y-3 transition-all duration-300">
            <h2 className="text-2xl font-bold">{props.titulo}</h2>
            <div className="shadow shadow-black h-10 rounded-md my-3">
                <div className={`${props.cor} h-full rounded-tr-2xl`} style={{width: props.p}}></div>
            </div>
            <p className="text-5xl">{props.p}</p>
        </div>
    )
}

export default Cardpor