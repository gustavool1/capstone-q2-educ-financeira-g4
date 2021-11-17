import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../Providers/Users'
import { MenuListContainer } from './style'

const MenuParentsLogin = () => {
    const { Logout, userData, typeUser } = useContext(UserContext)
    return (
       <MenuListContainer>
           <div className={typeUser === 'parent'?  'links parents' : 'links'}>
                <Link to='/dashboardparents'>Dashboard</Link>

                <Link to='/registerkids'>Cadastrar Dependente</Link>

            </div>

            <div className={typeUser === 'parent'?  'btnContainer parents' : 'btnContainer'}>
                <button 
                    className='btnLogin'
                    onClick={Logout}
                >
                    Logout
                </button>                
            </div>
       </MenuListContainer>
    )
}

export default MenuParentsLogin
