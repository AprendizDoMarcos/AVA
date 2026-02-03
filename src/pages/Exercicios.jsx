import { useEffect } from "react"
import CardExercicio from "../Componentes/CardExercicio/CardExercicio"

function Exercicios(){
    useEffect(()=>{
        document.title = "Academia Vida Ativa - Exercicios"

        const icon = document.querySelector(".icon")
        if(icon){
            icon.href = '/icons/favicon-exercicios.png'
        }
    },[])
    return(
        <main className="my-10 flex flex-col gap-5">
            <section className="w-full flex flex-col items-center p-2 shadow-lg  my-5 hover:-translate-y-3 transition-all duration-300">
                <h2 className="flex text-2xl font-bold gap-2">Exercícios que você pode aderir <img className="w-5" src="/icons/icon-exercise.svg" alt="icone"/></h2>
                <p>Aqui estão alguns exemplos de exercicios a serem matriculados</p>
                <p>Matricule-se Gratuitamente</p>
            </section>
            <section className="flex mt-10 mb-15 justify-around">
                <CardExercicio titulo="Mhuay Thai" url="/images/exercicio1.jpg"/>
                <CardExercicio titulo="Corrida Cronometrada" url="/images/exercicio2.jpg"/>
                <CardExercicio titulo="Aeróbica" url="/images/exercicio3.jpg"/>
            </section>
        </main>
    )
}

export default Exercicios