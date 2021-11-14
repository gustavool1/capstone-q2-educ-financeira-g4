
import { MenuDesktop, MenuMobile, MobileMenu, NavContainer, NavSubContainer } from "./style"
import { GiHamburgerMenu } from "react-icons/gi";
import MenuList from "./menuList";
import { useContext, useState } from "react";
import { UserContext } from "../../Providers/Users";
import MenuParentsLogin from "./menuParentsLogin";
import MenuChildrensLogin from "./menuChildrensLogin";
import ProfileBarChildren from "../ProfileBarChildren";



const NavbarHome = () => {
    const [showMenu, setshowMenu] = useState<boolean>(false)
    const { UserToken, userData } = useContext(UserContext)

    return (
        <NavContainer>
            <div className={!!UserToken? 'isLog' : 'logOff'}>
                <NavSubContainer>
                    <h1>FinanceKids</h1>
                    
                    <MenuDesktop>
                        {!!UserToken? (userData.type === 'parent'? <MenuParentsLogin/> : <MenuChildrensLogin/>)
                            : (<MenuList/>)
                        }
                    </MenuDesktop>
                    
                    <MobileMenu>

                        
                    </MobileMenu>

                    {showMenu && <MenuMobile 
                            initial={{opacity:0 , x:-300}}
                            transition={{ duration: 1}}
                            animate={{opacity:1, x: 0}}
                        >
                        {!UserToken && <MenuList/>}
                        {UserToken && userData.type === 'parent' && <MenuParentsLogin/>}
                        {UserToken && userData.type === 'children' && <MenuChildrensLogin/>}
                        
                        </MenuMobile>
                    }

                </NavSubContainer>

                <button 
                    className='btnMenu'
                    onClick={() => setshowMenu(!showMenu)}
                >                
                    <GiHamburgerMenu/>
                </button>
            </div>
        </NavContainer>
    )
}

export default NavbarHome
