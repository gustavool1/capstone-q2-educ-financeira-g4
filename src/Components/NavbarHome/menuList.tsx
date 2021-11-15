import { Link } from "react-router-dom"
import React from 'react'
import { MenuListContainer } from "./style"
import { useHistory } from 'react-router-dom'
import { HashLink } from "react-router-hash-link"

const MenuList = () => {
    const history = useHistory();

    return (
        <MenuListContainer>
            <div className='links'>
                <Link to='/contenthome'>Saiba mais</Link>
                <HashLink 
                    to='/#myServices'
                    scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}
                >
                    Serviços
                </HashLink>
                <HashLink 
                    to='/#whoWeAre'
                    scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}
                >
                    Quem somos
                </HashLink>

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
