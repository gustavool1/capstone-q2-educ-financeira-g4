import styled from "styled-components";

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

    .btnMenu {
        width: 60px;
        height: 60px;
        background: transparent;
        color: #FFFFFF;
        border: none;
    }
    
    @media screen and (max-width:900px) {

        .btnMenu {
            display: block;
        } 
        
        .mobile {
            display: block;
            background: #302F4D;
            position: absolute;
            color: #FFFFFF;
            top: 80px;
            left: 0;
            width: 100%;
            z-index: 1;
            padding-bottom: 20px;
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
        font-size: 48px;
    }

    a {
        color: #FFFFFF;
        margin-left: 20px;
        font-weight: 500;
    }

    @media screen and (max-width: 370px) {
        h1 {
            font-size: 38px;
        }
    }
       
`

export const MenuListContainter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;       

    .links {
        display: flex;
        justify-content: space-evenly;
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
            color: #FFFFFF;
        }

        .btnLogin {
            background: #f15bb5;
        }

        .btnRegister {
            background: #9b5de5;
        }
    }

    @media screen and (max-width:900px) {
        flex-direction: column;

        .links {
            flex-direction: column;
            height: 150px;
        }

        .btnContainer {
            flex-direction: column;
            width: fit-content;

            button {
               font: 16px;
               height: 30px;
               width: 82px;
               margin: 0;               
            }

            .btnLogin {
                background: transparent;
                margin-right: 25px;
            }

            .btnRegister {
                background: transparent;
                margin-right: 13px;
            }
        }
    }
    
`