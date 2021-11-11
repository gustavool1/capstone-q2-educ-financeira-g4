import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: Calc(100vh - 80px);
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  align-content: center;
`;

export const ImageContainer = styled.div`
  display: none;
  @media screen and (min-width: 500px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50%;
    height: 100%;
    img {
      width: 90%;
      height: 90%;
    }
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 500px) {
    width: 50%;
  }
`;
export const Form = styled.form`
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  height: auto;
  h1 {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }
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
