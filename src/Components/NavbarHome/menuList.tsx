import { Link } from "react-router-dom"
import React from 'react'
import { MenuListContainter } from "./style"
import { useHistory } from 'react-router-dom'

interface MenuListProps {
    initial?: {};
    transition?: {};
    animate?: {};
}

const MenuList = ({initial, transition, animate}: MenuListProps) => {
    const history = useHistory();

    return (
        <MenuListContainter>
            <div className='links'>
                <Link to=''>Saiba mais</Link>
                <Link to=''>Serviços</Link>

                <Link to=''>Quem somos</Link>

            </div>

            <div className='btnContainer'>
                <button 
                    onClick={() => history.push('/registerparents')}
                    className='btnRegister'
                >
                    <Link to='/registerparents'>Registrar</Link>
                </button>

                <button 
                    className='btnLogin'
                    onClick={() => history.push('/login')}
                >
                    <Link to='/login'>Login</Link>
                </button>                
            </div>
        </MenuListContainter>
    )
}

export default MenuList
