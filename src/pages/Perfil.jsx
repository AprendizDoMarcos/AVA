import { useEffect, useState } from "react"
import CardAluno from "../Componentes/CardAluno/CardAluno"
import Pagamentos from "../Componentes/Pagamentos/Pagamentos"

function Perfil() {

    useEffect(() => {
        document.title = "Academia Vida Ativa - Perfil"

        const icon = document.querySelector(".icon")
        if(icon){
            icon.href = '/icons/favicon-perfil.png'
        }
    }, [])

    let [Aberto,Mudar] = useState(false) 

    function Abrir(){
        Mudar(!Aberto)
    }
    function Fechar(){
        Mudar(!Aberto)
    }
    return (
        <main className="flex items-center h-auto sm:h-[80dvh] relative mt-10 mb-20 sm:m-0">
            {Aberto && (
            <div 
                className="fixed inset-0 bg-black/50 z-40"
                onClick={Fechar}
            />
        )}
            <dialog className={`${Aberto ? 'block' : 'none'} bg-white sm:w-130 sm:h-145 m-auto p-5 rounded-lg absolute sm:top-[-5%] z-50`}>
                <div className="flex justify-between mb-5">
                    <h2 className="text-2xl font-bold">Pagamentos de exercicios extras</h2>
                    <button onClick={Fechar} className="cursor-pointer text-2xl">X</button>
                </div>
                <div>
                    <Pagamentos mes="Abril" ano="2024" valor="1065,00" largura="w-[70%]"/>
                    <Pagamentos mes="Maio" ano="2024" valor="1232,00" largura="w-[85%]"/>
                    <Pagamentos mes="Junho" ano="2024" valor="752,00" largura="w-[60%]"/>
                    <Pagamentos mes="Julho" ano="2024" valor="1118,00" largura="w-[78%]"/>
                    <Pagamentos mes="Agosto" ano="2024" valor="978,00" largura="w-[64%]"/>
                    <Pagamentos mes="Setembro" ano="2024" valor="1423,00" largura="w-[90%]"/>
                    <Pagamentos mes="Outubro" ano="2024" valor="535,00" largura="w-[54%]"/>
                    <Pagamentos mes="Novembro" ano="2024" valor="1075,00" largura="w-[73%]"/>
                    <Pagamentos mes="Dezembro" ano="2024" valor="750,00" largura="w-[57%]"/>
                    <Pagamentos mes="Janeiro" ano="2025" valor="1120,00" largura="w-[80%]"/>
                    <Pagamentos mes="Fevereiro" ano="2025" valor="980,00" largura="w-[67%]"/>
                    <Pagamentos mes="Março" ano="2025" valor="1220,00" largura="w-[83%]"/>
                </div>
            </dialog>
            <section className="rounded-lg shadow-lg shadow-gray-400 w-[85%] m-auto p-5 flex flex-col items-center">
                <h2 className="flex w-full gap-3  justify-center text-2xl font-bold">Perfil do Aluno <img className="w-5" src="/icons/icon-coin.svg" alt="coin" /></h2>
                <section className="flex flex-col items-center gap-5 sm:gap-0 sm:flex-row justify-around w-full my-10">
                    <CardAluno t1="Tempo de Academia:" t2="4 Anos" />
                    <CardAluno t1="Email:" t2="email@email.com.br" />
                    <CardAluno t1="Plano:" t2="Premium Ouro" />
                    <CardAluno t1="Telefone:" t2="11 55421 3265" />
                    <CardAluno t1="Endereço:" t2="Rua da Saudade,35- Bairro Alfabeto. SP" />
                    <div className="flex items-center">
                        <img className="w-40 rounded-lg hover:scale-115" src="/images/team1.jpg" alt="pessoa" />
                    </div>
                </section>
                <button className="p-3 cursor-pointer rounded-lg bg-orange-600 text-white " onClick={Abrir}>Ver Pagamentos Extras</button>
            </section>
        </main>
    )
}

export default Perfil