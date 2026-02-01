function CardAluno(props){
    return(
        <div className="w-40 bg-gray-300 border-t-20 rounded-t-2xl border-emerald-500 py-6 hover:bg-emerald-500 transition-all duration-300 flex flex-col justify-center" >
            <p>{props.t1}</p>
            <p>{props.t2}</p>
        </div>
    )
}

export default CardAluno