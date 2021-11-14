
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../Providers/Users'
import { MenuListContainer } from './style'

const MenuChildrensLogin = () => {
    const { Logout, userData } = useContext(UserContext)
    return (
       <MenuListContainer>
           <div className={userData.type === 'children'?  'links children' : 'links'}>
                <Link to='/dashboardkids'>Dashboard</Link>

                <Link to='/balance'>Balanço Financeiro</Link>

            </div>

            <div className='btnContainer'>
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

export default MenuChildrensLogin
