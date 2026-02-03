import { useEffect } from "react"
import InfoLocalizacao from "../Componentes/InfoLocalização/InfoLocalizacao"

function Localizacao(){

    useEffect(()=>{
        document.title = "Academia Vida Ativa - Localização"

        const icon = document.querySelector(".icon")
        if(icon){
            icon.href = '/icons/favicon-localizacao.png'
        }
    })
    return(
        <section className="w-[90%] mx-auto flex items-center shadow-lg shadow-gray-400 hover:shadow-gray-600 transition-all duration-300 rounded-lg h-max py-20 p-5 justify-around border-t-15 border-orange-600 mt-15">
            <div className="w-[45%]">
                <InfoLocalizacao info=" R.Roberto Mange, 151 - Jardim Marupiara, Pres. Prudente - SP, 19060-030" img="/icons/icon-mapa2.svg"/>
                <InfoLocalizacao info=" Telefone: (XX) XXXXX-XXXX" img="/icons/icon-fale.svg"/>
                <InfoLocalizacao info="Email: email@email.com.br" img="/icons/icon-email.svg"/>
            </div>
            <div className="w-[45%] flex justify-center items-center">
                <picture className="border-2 rounded-md border-dotted">
                    <img src="/images/mapa.jpg" alt="mapa" />
                </picture>
            </div>
        </section>
    )
}

export default Localizacao