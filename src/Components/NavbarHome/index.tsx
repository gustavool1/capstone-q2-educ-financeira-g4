
import { NavContainer, NavSubContainer } from "./style"
import { GiHamburgerMenu } from "react-icons/gi";
import MenuList from "./menuList";
import { useState } from "react";
import { memoryUsage } from "process";

const NavbarHome = () => {
    const [showMenu, setshowMenu] = useState<boolean>(false)
    
    return (
        <NavContainer>

            <NavSubContainer>
                <h1>FinanceKids</h1>

                <span className='desktop'>
                    <MenuList/>
                </span>

                <span className='mobile'>
                    <MenuList/>    
                </span>                

               
            </NavSubContainer>

            <button className='btnMenu'>
                <GiHamburgerMenu/>
            </button>
        </NavContainer>
    )
}

export default NavbarHome
