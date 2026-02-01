import Cardpor from "../Componentes/CardsHome/Cardpor"
import Cardgra from "../Componentes/CardsHome/Cardgra"
import Carrossel from "../Componentes/Carrossel/Carrossel"
import { useEffect } from "react"

function Dashboard() {

    useEffect(()=>{
        document.title = "Academia Vida Ativa - Dashboard"
    },[])
    return (
        <main className="mb-10">
            <section className="flex justify-center items-center px-5 py-10 ">
                <div className="shadow shadow-gray-600 w-4/5 p-5 rounded-lg hover:-translate-y-5 transition-all duration-300">
                    <h2 className="font-bold text-2xl">Bem-vindo, [Nome do Aluno]! Hoje é 27 de março de 2025</h2>
                    <p>Veja seus dados e sugestões de novos exercícios abaixo.</p>
                    <section className="flex bg-gray-300 rounded-md p-5 justify-around">
                        <div className="bg-orange-600 text-white flex flex-col justify-center items-center p-10 rounded-md">
                            <img className="invert w-5" src="/icons/icon-fale.svg" alt="icone-contato" />
                            <p>Contato</p>
                        </div>
                        <div className="bg-orange-600 text-white flex flex-col justify-center items-center p-10 rounded-md">
                            <img className="invert w-5" src="/icons/icon-beneficio.svg" alt="icone-beneficio" />
                            <p>Benefícios</p>
                        </div>
                        <div className="bg-white rounded-md flex flex-col justify-center gap-5 py-10 w-60 items-start">
                            <p>Plano Atual: Premium Ouro</p>
                            <p>Mensalidade Março: <strong className="text-emerald-500">OK</strong></p>
                        </div>
                    </section>
                </div>
            </section>
            <section className="w-full h-70">
                <Carrossel />
            </section>
            <section className="flex gap-5 p-10">
                <Cardpor titulo="Progresso de Processos" p="75%" cor="bg-emerald-500"/>
                <Cardpor titulo="Distribuição de Atividades" p="50%" cor="bg-yellow-500" />
                <Cardgra />
            </section>
        </main>

    )
}
export default Dashboard