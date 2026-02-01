import { useEffect } from "react"

function Exercicios(){
    useEffect(()=>{
        document.title = "Academia Vida Ativa - Exercicios"
    },[])
    return(
        <h1>ola</h1>
    )
}

export default Exercicios