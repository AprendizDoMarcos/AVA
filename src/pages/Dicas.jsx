import { useEffect } from "react"
import CardDicas from "../Componentes/CardDicas/CardDicas"

function Dicas(){
    useEffect(()=>{
        document.title = "Academia Vida Ativa - Dicas de Saúde"
        
        const icon = document.querySelector(".icon")
        if(icon){
            icon.href = '/icons/favicon-dica.png'
        }
    },[])
    return(
        <main className="mb-20 mt-5">
            <CardDicas titulo="Hidratação" cor="bg-red-300" url="/icons/icon-water.svg" texto="Beber água regularmente é essencial para manter o corpo hidratado e funcionando corretamente. Recomenda-se consumir pelo menos 8 copos de água por dia."/>

            <CardDicas titulo="Alimentação Balanceada" cor="bg-green-200" url="/icons/icon-alimenta.svg" texto="Uma dieta equilibrada, rica em frutas, vegetais, proteínas e carboidratos saudáveis, ajuda a manter o corpo nutrido e energizado."/>

            <CardDicas titulo="Exercícios Físicos" cor="bg-yellow-100" url="/icons/icon-exercicio-fisico.svg" texto="Praticar atividades físicas regularmente melhora a saúde cardiovascular, fortalece os músculos e ajuda a manter o peso saúdavel."/>

            <CardDicas titulo="Qualidade de Sono" cor="bg-green-200" url="/icons/icon-sono.svg" texto="Ter uma boa noite de sono é crucial para a recuperação do corpo e a manutenção da saúde mental. Tente dormir pelo menos 7-8 horas por noite."/>

            <CardDicas titulo="Gerenciamento de Estresse" cor="bg-red-300" url="/icons/icon-stress.svg" texto="Praticar técnicas de relaxamento, como meditação e respiração profunda,ajuda a reduzir o estresse e melhora a qualidade de vida."/>

            <CardDicas titulo="Check-ups Regulares" cor="bg-gray-300" url="/icons/icon-checkup.svg" texto="Realizar exames médicos periódicos ajuda a detectar precocemente possíveis problemas de saúde e a manter o bem-estar geral."/>
        </main>
    )
}

export default Dicas