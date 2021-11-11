import { Link } from "react-router-dom"
import React from 'react'
import { MenuListContainter } from "./style"

const MenuList = () => {
    return (
        <MenuListContainter>
            <div className='links'>
                <Link to=''>Serviços</Link>
                <Link to=''>Sobre</Link>
                <Link to=''>Comunidade</Link>
                <Link to=''>Suporte</Link>
            </div>
            <div className='btnContainer'>
                <button className='btnLogin'>
                    Log in
                </button>
                <button className='btnRegister'>
                    Register
                </button>
            </div>
        </MenuListContainter>
    )
}

export default MenuList
