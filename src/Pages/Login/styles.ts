import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: Calc(100vh - 80px);
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  align-content: center;
`;

export const ImageContainer = styled.div`
  display: none;
  @media screen and (min-width: 700px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 60%;
    height: 100%;
    img {
      width: 90%;
      height: 90%;
    }
  }
`;

export const FormSide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 500px) {
    width: 40%;
  }
`;
export const FormContainer = styled.div`
  padding: 5rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  height: auto;
  background: var(--color-quaternary);
  border-radius: 10px;
  border: none;
  h1 {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }
  span {
    position: absolute;
    top: 1.5rem;
    right: 1rem;
    color: var(--gray-500);
  }
`;

export const Form = styled.form``;

export const ChooseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 272px;
  height: 280px;
  background: var(--color-quaternary);
  border-radius: 10px;
  border: none;
`;

export const Button = styled.button`
  margin: 20px 0;
  height: 60px;
  background-color: var(--color-primary);
  border: none;
  border-radius: 5px;
  color: var(--white);
  font-weight: 700;
  font-size: 16px;
  width: 240px;
  :hover {
    color: var(--color-primary);
    background-color: var(--white);
    transition: 0.5s;
  }
`;
