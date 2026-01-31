import Itens from '../../assets/data/itensNav.json'

function NavBar(){
    return(
        <nav className='bg-orange-600 text-white p-3 flex justify-between items-center'>
            <h1 className='font-bold text-3xl'>A.V.A</h1>
            <ul className='flex'>
                {Itens.map(item =>
                <li className='border-b p-2 hover:border-b-0 hover:border-t' key={item.texto}>
                    <a href="" className='h-full w-full flex gap-2 items-center justify-center'>
                        <span><img className='invert' src={item.icone} alt={item.alt} /></span>
                        <span>{item.texto}</span>
                    </a>
                </li>
                )}
            </ul>
        </nav>
    )
}

export default NavBar