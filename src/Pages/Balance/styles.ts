import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: Calc(100vh - 80px);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const LeftSide = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const RightSide = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ModalBalance = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  background: var(--color-quiternary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.5rem;
`;

export const WishList = styled.div`
  min-width: 267px;
  width: 80%;
  height: 60%;
  background: white;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 2px solid black;
  margin: 20px 0;
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
`;

export const WishListHeader = styled.div`
  background: var(--color-primary);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 20%;
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  padding-top: 15px;
`;

export const Chart = styled.div`
  width: 70%;
  height: 40%;
  background: blue;
`;

export const Input = styled.input`
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 10px;
  border: none;
  ::placeholder {
    padding-left: 5px;
  }
`;

export const BankStatement = styled.div`
  background: var(--color-quaternary);
  color: var(--color-hexaternary);
  width: 80%;
  height: 30%;
  border-radius: 10px;
  margin: 1rem;
`;

export const Button = styled.button`
  margin-top: 20px;
  height: 60px;
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
`;

export const ModalWish = styled.div`
  min-width: 267px;
  width: 80%;
  height: 60%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  border: 2px solid black;
  position: absolute;
  z-index: 1;
  margin-top: -80px;
  input {
    margin-top: 20%;
    border: 1px solid var(--gray-100);
  }
`;
