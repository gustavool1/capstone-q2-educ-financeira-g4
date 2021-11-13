import { Link } from "react-router-dom"
import React from 'react'
import { MenuListContainer } from "./style"
import { useHistory } from 'react-router-dom'

const MenuList = () => {
    const history = useHistory();

    return (
        <MenuListContainer>
            <div className='links'>
                <Link to=''>Saiba mais</Link>
                <Link to='/dashboardparents'>Serviços</Link>

                <Link to=''>Quem somos</Link>

            </div>

            <div className='btnContainer'>
                <button 
                    onClick={() => history.push('/registerparents')}
                    className='btnRegister test'
                >
                    <Link to='/registerparents'>Registrar</Link>
                </button>

                <button 
                    className='btnLogin test'
                    onClick={() => history.push('/login')}
                >
                    <Link to='/login'>Login</Link>
                </button>                
            </div>
        </MenuListContainer>
    )
}

export default MenuList
