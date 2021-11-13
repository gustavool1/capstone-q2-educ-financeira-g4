import styled from "styled-components";

export const Container = styled.div`
  width: 99vw;
  height: 90vh;
  box-sizing: border-box;
  position: absolute;
  background-color: rgb(242, 242, 242, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: hidden;
  @media screen and (max-width: 768px) {
    background-color: rgb(242, 242, 242, 0);
  }
`;
export const CloseModal = styled.button`
  border: none;
  background-color: transparent;
  color: white;
  cursor: pointer;
  svg {
    font-size: 30px;
  }
`;
export const CartContainer = styled.div`
  color: white;
  border-radius: 5px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--success);
  }
  button {
    background-color: transparent;
    border: none;
    svg {
      font-size: 30px;
      color: white;
    }
  }
  @media screen and (max-width: 768px) {
  }
`;