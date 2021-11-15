import styled from "styled-components";
export const Container = styled.div`
  h2 {
    font-size: 40px;
    text-align: center;
    margin: 20px;
    margin-top: 100px;
  }
`;

export const CardList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  .card {
    width: 300px;
    height: 587px;
    background-color: #302f4d;
    border-radius: 20px;
    display: flex;
    flex-direction: column;

    h2 {
      color: #ffffff;
      margin-top: 50px;
    }
  }
`;

export const ActivitiesList = styled.ul`
  h3 {
    color: #fff;
    text-align: center;
    margin-top: 30px;
  }
  li {
    margin: 20px 10px;
    display: flex;
    justify-content: space-between;
    p {
      color: #fff;
    }
    b {
      color: #fff;
    }
    button {
      background-color: transparent;
      margin: 0;
      border: none;
      width: fit-content;
    }
    svg {
      color: green;
      font-size: 24px;
    }

    .trashIcon {
      color: red;
    }
  }
`;
