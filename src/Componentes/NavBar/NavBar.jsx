import { Link } from 'react-router-dom'
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";
import Itens from '../../assets/data/itensNav.json'
import { useState } from 'react';

function NavBar() {

    let [Aberto, Abrir] = useState(false)
    function Mudar() {
        Abrir(!Aberto)
    }
    return (
        <>
            {Aberto && (
                <div className='fixed inset-0 bg-black/40 z-10' onClick={Mudar}/>
            )}
            <nav className='bg-orange-600 text-white p-3 flex justify-between items-center relative z-50'>
                <h1 className='font-bold text-3xl'>A.V.A</h1>
                <div className="text-2xl border p-2 rounded-md cursor-pointer sm:hidden z-40" onClick={Mudar}>
                    {Aberto ? <MdOutlineClose/> : <CiMenuBurger/>}
                </div>
                <ul className={`${Aberto ? 'flex' : 'hidden'} absolute flex-col items-start sm:flex sm:flex-row sm:static top-15 right-0 z-20 bg-orange-600 transition-all duration-300`}>
                    {Itens.map(item =>
                        <li className='sm:border-b p-2 hover:border-b-0 hover:sm:border-t' key={item.texto}>
                            <Link to={item.url} className='h-full w-full flex gap-2 items-center justify-center'>
                                <span><img className='invert' src={item.icone} alt={item.alt} /></span>
                                <span>{item.texto}</span>
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>

        </>
    )
}

export default NavBar