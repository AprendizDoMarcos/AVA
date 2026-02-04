//Graficos
import dias from '../../assets/data/HistoricoTreino.json'


function Cardgra(){
    return(
        <div className="flex flex-col gap-1 shadow rounded-md w-4/5 sm:w-1/3 h-60 shadow-black px-3 py-1 hover:-translate-y-3 transition-all duration-300">
            <h2 className="font-bold">Histórico de Treinos/Horas</h2>
            {dias.map(dia =>
                <p key={dia.dia} className='bg-orange-600' style={{width: dia.largura}}>{dia.dia} {dia.treinos}</p>
            )}
        </div>
    )
}

export default Cardgra