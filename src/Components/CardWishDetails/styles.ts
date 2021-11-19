import styled from "styled-components";

export const ModalWish = styled.div`
  min-width: 267px;
  width: 80%;
  height: 80%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  border: 2px solid black;
  position: absolute;
  z-index: 1;
  margin-top: -1px;
  margin-left: -2px;
  border: 2px solid black;
  font-size: 18px;
  @media screen and (min-width: 768px) {
    height: 73%;
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
  p {
    margin: 0 30px;
    color: white;
    font-weight: bold;
  }
  button {
    border: none;
    background: transparent;
    font-size: 36px;
    position: relative;
    top: -3px;
    left: -30px;
  }
  @media screen and (min-width: 768px) {
    height: 20%;
    button {
      left: -8px;
    }
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
  h2 {
    position: absolute;
    top: -23vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    svg {
      width: 5%;
    }
  }
  h4 {
    position: absolute;
    top: -80px;
    left: 20px;
  }
  div {
    width: 100%;
    position: absolute;
    top: -44px;
    left: 20px;
  }
  input {
    width: 40%;
    border: 1px solid var(--gray-100);
    padding: 0.5rem;
    font-size: 14px;
    border-radius: 8px;
  }
  button {
    margin-left: 10px;
    margin-top: 2px;
    border: none;
    background: transparent;
    svg {
      width: 140%;
      height: 140%;
    }
  }
  label {
    margin-right: 20px;
  }
  @media screen and (min-width: 768px) {
    h2 {
      top: -50vh;
    }
  }
`;

export const Porcent = styled.div`
  height: 18vw;
  width: 18vw;
  margin-top: -13vh;
  margin-left: 60px;
  .circle-progress {
    width: 100%;
    height: 100%;
    text {
      margin-left: -10px;
    }
  }
  @media screen and (min-width: 768px) {
    height: 16vw;
    margin-top: -40vh;
    margin-left: -20px;
  }
`;
