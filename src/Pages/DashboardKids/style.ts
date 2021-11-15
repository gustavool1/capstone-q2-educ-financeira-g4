import styled from "styled-components";
export const Container = styled.div`
  h2 {
    font-size: 40px;
    text-align: center;
    margin: 50px;
  }
`;

export const CardList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  li {
    width: 300px;
    height: 587px;
    background-color: #302f4d;
    border-radius: 20px;
    display: flex;
    flex-direction: column;

    h2 {
      color: #ffffff;
      margin: 50px 0;
    }
  }
`;
