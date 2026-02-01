import { useEffect, useState } from "react"


function Carrossel() {
    let [ativo, ativar] = useState(0)

    function ProximoItem() {
        ativar(ativo < 2 ? ativo + 1 : ativo = 0)
    }
    function VoltarItem() {
        ativar(ativo > 0 ? ativo - 1 : 2)
    }
    useEffect(() => {
        const timer = setInterval(ProximoItem, 5000)

        return () => clearInterval(timer)
    }, [ativo])

    const Banners = [
        "/images/banner3.jpg",
        "/images/banner2.jpg",
        "/images/banner4.jpg"
    ]
    return (
        <div className="flex relative w-full h-full">
            <button className="absolute z-10 text-white bg-black top-1/2 left-10 p-3 cursor-pointer" onClick={VoltarItem}>&lt;</button>

            <div className="relative w-full">
                {Banners.map((src, index) => 
                    <div key={index} className={`absolute ${ativo === index ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}>
                        <img src={src} alt={`Banner ${index}`}  key={`Banner ${index}`}/>
                    </div>
                )}
            </div>
            <button className="absolute z-10 text-white bg-black top-1/2 right-10 p-3 cursor-pointer" onClick={ProximoItem}>&gt;</button>
        </div>
    )
}

export default Carrossel