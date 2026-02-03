function InfoLocalizacao(props){
    return (
        <div className="flex items-center gap-2 mb-5 border-b-2 border-dotted">
            <img className="w-8" src={props.img} alt="icone" />
            <p>{props.info}</p>
        </div>
    )
}

export default InfoLocalizacao