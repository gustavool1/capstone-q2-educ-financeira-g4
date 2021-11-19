import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
 
  padding-top: 2%;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    height: 100vh;
  }

  .openBalance{
    animation: Entering 2s;
    left: 0px;
  }
  .closeBalance{
     animation: ReverseEntering 2s; 
     left: -400px;
    
  }
  @keyframes Entering {
    0.0% {
      opacity:0;
      left:  -400px;
    }
    100% {
      opacity: 1;
      left: 0px;
    }
  }

  @keyframes ReverseEntering {
    0.0% {
      left:0px;
      
    }
    100% {
      left:-400px;
     
    }
  }


`;
export const LeftSide = styled.div`
  margin-top: 160px;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  .moves {
    margin-top: 6vh;
    margin-bottom: -2vh;
  }
  @media screen and (min-width: 768px) {
    margin-top: 0;
    width: 70%;
    height: 100%;
    .moves {
      margin-top: -10vh;
    }
  }
`;

export const RightSide = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 30%;
    height: 100%;
  }
`;

export const ModalBalance = styled(motion.div)`
  padding-top: 180px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100vw;
  background: var(--color-quiternary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.5rem;
  z-index: 1;
  h2 {
    padding-top: -5px;
  }
  label {
    margin-bottom: -5px;
    margin-left: -250px;
    padding: 0;
  }
  .secondLabel {
    margin-left: -287px;
  }
  @media screen and (min-width: 768px) {
    width: 400px;
    height: 100%;
    padding-top: 14vh;
    label {
      margin-left: -200px;
    }
    .secondLabel {
      margin-left: -240px;
    }
  }

 
  
`;

export const WishList = styled.div`
  min-width: 267px;
  width: 80%;
  min-height: 40vh;
  background: white;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 2px solid black;
  ul {
    width: 100%;
    margin: 0;
    padding: 5px;
    li {
      padding: 5px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      border-bottom: 1px solid var(--gray-100);
      h3 {
        width: auto;
      }
    }
  }
  @media screen and (min-width: 768px) {
    height: 60%;
    margin: 20px 0;
    min-height: 60%;
  }
`;

export const WishListHeader = styled.div`
  background: var(--color-primary);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 25%;
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 5px 0;
  color: #FFFFFF;
  h3 {
    margin: auto;
    font-size: 24px;
  }
  @media screen and (min-width: 768px) {
    height: 20%;
  }
`;

export const WishListContent = styled.div`
  width: 100%;
  height: 90%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  input {
    border: 1px solid var(--gray-100);
    padding: 1rem;
    font-size: 18px;
  }
  label {
    margin-left: -100px;
    margin-bottom: -8px;
  }
  section{
    width: 90%;
    h3{
      margin: 10px 0px;
    }
  }
`;

export const Chart = styled.div`
  width: 80%;
  height: 50%;
  
  @media screen and (min-width: 768px) {
    width: 70%;
    height: 40%;
  }
`;

export const Input = styled.input`
        padding: 0px 10px;
        background-color: white;
        width: 90%;
        margin: 10px;
        height: 48px;
        border-radius: 7px;
        font-size: 18px;
        :focus{
            outline-style: none;
            box-shadow: none;
        }
`;

export const BankStatement = styled.ul`
  padding: 10px;
  background: var(--color-quaternary);
  color: var(--color-hexaternary);
  width: 80%;
  height: 35%;
  border-radius: 10px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 10px;
    margin: 10px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    height: 30px;
    border-radius: 10px;
    background-color: var(--color-primary);
  }
  li {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    margin: 3px 0;
  }

  .red {
    color: darkred;
  }

  .green {
    color: darkgreen;
  }

  @media screen and (min-width: 768px) {
    height: 45%;
    padding-top: 10px;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  height: 40px;
  background-color: var(--color-primary);
  border: none;
  border-radius: 5px;
  color: var(--white);
  font-weight: 700;
  font-size: 16px;
  width: 240px;
  :hover {
    color: var(--white);
    background-color: var(--color-quaternary);
    transition: 0.5s;
  }
  @media screen and (min-width: 768px) {
    height: 60px;
  }
`;

export const ModalWish = styled.div`
  min-width: 267px;
  width: 80%;
  height: 60%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  border: 2px solid black;
  position: absolute;
  z-index: 1;
  margin-top: -2px;
  margin-left: -2px;
  border: 1px solid var(--gray-100);
  font-size: 18px;
  button {
    margin-bottom: 80px;
  }
`;

export const WishContent = styled.div`
  width: 100%;
  height: 90%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  input {
    border: 1px solid var(--gray-100);
    padding: 1rem;
    font-size: 18px;
  }
  label {
    margin-left: -100px;
    margin-bottom: -8px;
  }
`;
