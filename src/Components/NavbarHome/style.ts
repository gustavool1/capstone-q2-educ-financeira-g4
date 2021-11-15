import styled from "styled-components";
import { motion } from 'framer-motion';


export const NavContainer = styled.nav`
    min-height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    position: fixed;
    top: 0;
    z-index: 2;

    .logOff, .isLog {
        min-height: 80px;
        width: 100%;
        background: #302F4D;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFFFFF;
        position: fixed;
        top: 0;
        z-index: 2;
    }


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
     
    @media screen and (max-width:768px) {

        .btnMenu {
            display: block;
        } 

        .desktop {
            display: none;
        }

        .isLog {
            background: #7879F1;
            border-radius: 10px;

            .btnMenu {
                position: fixed;
                z-index: 1;
                top: 5px;
                right: 10px;
            }
            
            h1 {
                display: none;
            }
        }
    }

`

export const NavSubContainer = styled.div`
    width:100%;
    max-width: 1600px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;

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

    .menuMobOff {
        display: none;
    }

    @media screen and (max-width:768px) {
        display: block;

        .menuMobOff {
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

        .menuMobLogin {
            display: block;
            background: #7879F1;
            position: absolute;
            color: #FFFFFF;
            top: 160px;
            left: 0;
            width: 100%;
            z-index: 1;
            padding: 20px ;  
            border-top: 1px dashed #FFFFFF;
        }
        
    }

`
export const MenuDesktop = styled.div`
    display: flex;
    justify-content: space-between;
    width: 75%;

    @media screen and (max-width:768px) { 
        display: none;
    }
`

export const MenuListContainer = styled(motion.div)`
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
            color: #FFFFFF;
            font-size: 16px;

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

    .btnContainer.parents, .btnChildren {
        justify-content: flex-end;
    }

    @media screen and (max-width:930px) {

        .links a {
            font-size: 16px;
            margin: 0 5px;
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
            align-items: center;
            height: 100px;           
        }

        div.links.parents {
            height: 65px;
        }

        div.links.children {
            height: 65px;
        }

        .btnContainer {
            flex-direction: column;
            width: fit-content;

            button {
                margin-top: 20px;
                font-size: 16px;
                font-weight: 500px;
            }
        }

    }
    
`

export const MobileMenu = styled.div`
    display: none;
    
    @media screen and (max-width: 768px) {
        height: 170px;
        width: 100%;
        display: flex;

        .userLog {
            display: flex;
            flex-direction: column;
            margin: auto 0;
            width: 100%;
            padding-left: 20px;
        

            img {
                width: 100px;
                height: 100px;
                border-radius: 100%;
            } 

            span {
                display: flex;
                align-items: center;
                justify-content: space-between;

                h3 {
                    margin-top: 5px;
                    margin-left: 10px;
                }

                p {
                    font-weight: 500;
                }
            }
        }

    }


`