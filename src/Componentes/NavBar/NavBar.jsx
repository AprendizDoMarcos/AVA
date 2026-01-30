import Itens from '../../assets/data/itensNav.json'

function NavBar(){
    return(
        <nav className='bg-orange-600 text-white p-5 flex justify-between'>
            <h1 className='font-bold text-2xl'>A.V.A</h1>
            <ul className='flex'>
                {Itens.map(item =>
                <li className='border-b '>
                    <a href="">
                        <span></span>
                        <span>{item.texto}</span>
                    </a>
                </li>
                )}
            </ul>
        </nav>
    )
}

export default NavBar