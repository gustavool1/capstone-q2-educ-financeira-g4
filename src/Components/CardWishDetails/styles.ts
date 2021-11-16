import styled from "styled-components";

export const ModalWish = styled.div`
  min-width: 267px;
  width: 80%;
  height: 70%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  border: 2px solid black;
  position: absolute;
  z-index: 1;
  margin-top: -48px;
  margin-left: 0px;
  border: 2px solid black;
  font-size: 18px;
  @media screen and (min-width: 768px) {
    height: 60%;
    margin-top: -80px;
    margin-left: 0px;
    }
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
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  h3 {
    margin: auto;
    font-size: 24px;
  }
  button {
    font-size: 36px;
    position: relative;
    top: -3px;
    left: -8px;
  }
  @media screen and (min-width: 768px) {
    height: 20%;
  }
`;

export const WishContent = styled.div`
  width: 100%;
  height: 0%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  position: relative;
  h3 {
    position: absolute;
    top: -120px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    svg {
      width: 5%;
    }
  }
  h4 {
    position: absolute;
    top: -60px;
    left: 20px;
  }
  div {
    width: 100%;
    position: absolute;
    top: -40px;
    left: 120px;
  }
  input {
    width: 50%;
    border: 1px solid var(--gray-100);
    padding: 0.5rem;
    font-size: 14px;
    border-radius: 8px;
  }
  label {
    margin-right: 5px;
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
`;
