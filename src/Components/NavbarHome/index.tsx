
import { MenuMobile, NavContainer, NavSubContainer } from "./style"
import { GiHamburgerMenu } from "react-icons/gi";
import MenuList from "./menuList";
import { useState } from "react";



const NavbarHome = () => {
    const [showMenu, setshowMenu] = useState<boolean>(false)
    
    return (
        <NavContainer>

            <NavSubContainer>
                <h1>FinanceKids</h1>

                <span className='desktop'>
                    <MenuList/>
                </span>

                {showMenu && <MenuMobile 
                        initial={{opacity:0 , x:-300}}
                        transition={{ duration: 1}}
                        animate={{opacity:1, x: 0}}
                    >
                        <MenuList/>
                </MenuMobile>
                }

            </NavSubContainer>

            <button 
                className='btnMenu'
                onClick={() => setshowMenu(!showMenu)}
            >                
                <GiHamburgerMenu/>
            </button>
        </NavContainer>
    )
}

export default NavbarHome
