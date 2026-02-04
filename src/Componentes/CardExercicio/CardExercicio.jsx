import { useState } from "react"

function CardExercicio(props){
    
    let [inscrito,inscrever] = useState(false) 

    function Mudar(){
        inscrever(!inscrito)
    }

    return(
        <div className="w-4/5 sm:w-[30%] shadow-lg shadow-gray-400 hover:shadow-gray-600 transition-all duration-300 rounded-lg p-5 flex flex-col gap-5 items-center">
            <h2 className="text-2xl font-bold">{props.titulo}</h2>
            <img className="rounded-lg" src={props.url} alt="Treino" />
            <p>Descrição do exercicio para uma vida saudavel</p>
            <button className={`p-3 text-white ${inscrito ? 'bg-emerald-500' : 'bg-orange-600'} transition-all duration-300 rounded-lg cursor-pointer`} onClick={Mudar}>{inscrito ? 'Inscrito' : 'Inscrever-se'}</button>
        </div>
    )
}

export default CardExercicio