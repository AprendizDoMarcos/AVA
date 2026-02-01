import { useEffect } from "react"
import CardAluno from "../Componentes/CardAluno/CardAluno"

function Perfil() {

    useEffect(() => {
        document.title = "Academia Vida Ativa - Perfil"
    }, [])
    return (
        <main className="flex items-center h-[80dvh]">
            <section className="rounded-lg shadow-lg shadow-gray-400 w-[85%] m-auto p-5 flex flex-col items-center">
                <h2 className="flex w-full gap-3  justify-center text-2xl font-bold">Perfil do Aluno <img className="w-5" src="/icons/icon-coin.svg" alt="coin" /></h2>
                <section className="flex justify-around w-full my-10">
                    <CardAluno t1="Tempo de Academia:" t2="4 Anos" />
                    <CardAluno t1="Email:" t2="email@email.com.br" />
                    <CardAluno t1="Plano:" t2="Premium Ouro" />
                    <CardAluno t1="Telefone:" t2="11 55421 3265" />
                    <CardAluno t1="Endereço:" t2="Rua da Saudade,35- Bairro Alfabeto. SP" />
                    <div className="flex items-center">
                        <img className="w-40 rounded-lg hover:scale-115" src="/images/team1.jpg" alt="pessoa" />
                    </div>
                </section>
                <button className="p-3 cursor-pointer rounded-lg bg-orange-600 text-white ">Ver Pagamentos Extras</button>
            </section>
        </main>
    )
}

export default Perfil