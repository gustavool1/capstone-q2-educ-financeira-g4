import { motion } from "framer-motion";
import styled from "styled-components";
export const Form = styled(motion.form)`
    margin: 0 auto;
    margin-top: 10px;
    width: 350px;
    border: 2px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input{
        width: 300px;
        margin: 20px;
        height: 48px;
        border-radius: 7px;
        font-size: 18px;
        :focus{
            outline-style: none;
            box-shadow: none;
        }
    }
    div{
        background-color: var(--color-primary);
        width: 100%;
        color: white;
        height: 77px;
        display: flex;
        align-items: center;
        justify-content: center;
        
        h2{
            width: 80%;
        }
        button{
            background-color: transparent;
            border: none;
            svg{
                color: white;
                font-size: 26px;
                transition: 1s;
                :hover{
                    color:grey;
                }
            }
        }
    }
     .add-button{
        background: var(--color-primary);
        font-size:18px;
        color: white;
        width: 300px;
        padding: 10px ;
        margin: 10px 0px 20px;
        border: none;
        border-radius: 5px;
    }
`