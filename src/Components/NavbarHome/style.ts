import styled from "styled-components";
import { motion } from 'framer-motion';


export const NavContainer = styled.nav`
    height: 80px;
    width: 100%;
    background: #302F4D;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;


    .btnMenu {        
        margin-right: 20px;
        width: 60px;
        height: 60px;
        background: transparent;
        color: #FFFFFF;
        border: none;   

        svg {
            width: 40px;
            height: 40px;
        }

        display: none;
    }

    .mobile {
        display: none;
    }

    .desktop {
        display: flex;
        justify-content: space-between;
        width: 75%;
    }
    
    @media screen and (max-width:768px) {

        .btnMenu {
            display: block;
        } 

        .desktop {
            display: none;
        }
    }

`

export const NavSubContainer = styled.div`
    width:100%;
    max-width: 1600px;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;

    h1 {
        font-size: 36px;
    }

    @media screen and (max-width:930px) { 
        h1 {
            font-size: 26px;
        }
    }

    @media screen and (max-width: 370px) {
        h1 {
            font-size: 28px;
        }
    }
       
`

export const MenuMobile = styled(motion.div)`
    display: none;

    @media screen and (max-width:768px) {
        display: block;
        background: #302F4D;
        position: absolute;
        color: #FFFFFF;
        top: 80px;
        left: 0;
        width: 100%;
        z-index: 1;
        padding: 20px ;
    }

`

export const MenuListContainter = styled(motion.div)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;       

    .links {
        display: flex;
        justify-content: space-evenly;

        a {
            color: #FFFFFF;
            margin-left: 20px;
            font-weight: 500;
        }
    }
    
    .btnContainer {
        width: 300px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: 20px;
        margin-right: 20px;

        button {
            width: 130px;
            height: 40px;
            border-radius: 6px;
            border: none;
            margin-left: 5px;               
            font-weight: 500; 
            transition: 1s;
            cursor: pointer;

            a {
                margin: 0;
                color: #FFFFFF;
                transition: 1s;
                font-size: 16px;
            }
        }

        .btnLogin {
            background: #f15bb5;
        }      
        
        .btnLogin:hover {
            background: #302F4D;
        }

        .btnRegister {
            background: #9b5de5;
        }
        
        .btnRegister:hover {
            background: #302F4D;
        }
    }

    @media screen and (max-width:930px) {

        .links a {
            font-size: 16px;
            margin: 0 5px;;
        }

        .btnContainer {
            width: 280px;
            margin: 0 5px;
        }
    }

    @media screen and (max-width:768px) {
        flex-direction: column;

        .links {
            flex-direction: column;
            justify-content: space-between;
            height: 100px;
        }

        .btnContainer {
            flex-direction: column;
            width: fit-content;

            button {
               font-size: 16px;
               height: 37px;
               width: 82px;
               margin: 0;          
            }

            .btnLogin {
                background: transparent;
                margin-right: 56px;
            }

            .btnRegister {
                margin-top: 12px;
                background: transparent;
                margin-right: 36px;
            }
        }
    }
    
`