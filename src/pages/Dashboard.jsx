function Dashboard() {

    const itens = document.querySelectorAll(".item")
    let ativo = 0

    function EsconderItem(){
        itens.forEach(item =>{
            item.classList.add('opacity-0')
            item.classList.remove('opacity-100')
        })
    }
    function MostrarItem(){
        itens[ativo].classList.add('opacity-100')
        itens[ativo].classList.remove('opacity-0')
    }

    function ProximoItem(){
        EsconderItem()
        if(ativo < itens.length){
            ativo++
        } else{
            ativo = 0
        }
        MostrarItem()
    }
    function VoltarItem(){
        EsconderItem()
        if(ativo < 0){
            ativo = itens.length - 1
        } else{
            ativo--
        }
        MostrarItem()
    }
    return (
        <main>
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
                <div className="flex relative w-full h-full">
                    <button className="absolute z-10 text-white bg-black top-1/2 left-10" onClick={VoltarItem}>prev</button> 
                    <div className="relative w-full">
                        <div className="item absolute opacity-100"><img src="/images/banner3.jpg" alt="" /></div>
                        <div className="item absolute opacity-0"><img src="/images/banner2.jpg" alt="" /></div>
                        <div className="item absolute opacity-0"><img src="/images/banner4.jpg" alt="" /></div>
                    </div>
                    <button className="absolute z-10 text-white bg-black top-1/2 right-10" onClick={ProximoItem}>next</button>
                </div>
            </section>
        </main>

    )
}
export default Dashboard