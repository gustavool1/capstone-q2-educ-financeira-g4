import styled from "styled-components";
export const ContainerDesktop = styled.div`

  display: none;
  h2 {
    font-size: 40px;
    text-align: center;
    margin: 20px;
    margin-top: 100px;
  }
  @media (min-width: 768px) {
    display: block;
    width: 100%;
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
      margin: 50px 0 0 0;
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
  h3 + div {
    display: flex;
    flex-direction: column;
    align-items: center;
    svg {
      font-size: 24px;
      color: green;
      margin: 0 auto;
      margin: 15px;
    }
    p {
      color: green;
      font-weight: bold;
    }
  }

  h3 + div {
    .sadIcon {
      color: red;
      font-size: 34px;
    }
    .nothingDone {
      color: red;
    }
  }
  
`;

export const ContainerMobile = styled.div`
  h2 {
    font-size: 40px;
    text-align: center;
    margin: 20px;
    margin-top: 200px;
  }
  .cardMobile {
    width: 300px;
    height: 400px;
    background-color: #302f4d;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
    h2 {
      font-size: 40px;
      text-align: center;
      margin: 20px;
      color: #fff;
    }
  }
  .navegateButton {
    font-size: 44px;
    background-color: transparent;
    border: none;
  }
  .passLeft {
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
export const MobileContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;


export const ContainerPage = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;

  

  @media (max-width: 768px) {
    display: none;
  } 

`

export const NotAchivied = styled.div`
  height: 200px;
  overflow: auto;
  
  li{
    display: flex;
    text-align: center;
    align-items: center;
    width: 90%;
    p{
      width: 40%;
      max-width: 10ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
   
  }
  ::-webkit-scrollbar {
        width: 10px;
        margin:10px;
    }
    
    ::-webkit-scrollbar-track {
    
        border-radius: 10px;
    }
    
    ::-webkit-scrollbar-thumb {
        height: 30px;
        border-radius: 10px;
        background-color: #fff;
    }
    div{
      text-align: center;
    }
`

export const Achivied = styled.div`
  margin-top: 30px;
  height: 100px;
  overflow: auto;
  
  li{
    display: flex;
    text-align: center;
    align-items: center;
    width: 90%;
    p{
      width: 40%;
      max-width: 10ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  ::-webkit-scrollbar {
        width: 10px;
        margin:10px;
        padding: 10px;
    }
    
    ::-webkit-scrollbar-track {
    
        border-radius: 10px;
        padding: 10px;

    }
    
    ::-webkit-scrollbar-thumb {
        height: 30px;
        border-radius: 10px;
        background-color: #fff;
        padding: 10px;

    }

    div{
      text-align: center;
    }
`

export const AchiviedMobile = styled.div`
  height: 100px;
  overflow: auto;
  div{
    text-align: center;
  }
`
export const NotAchiviedMobile = styled.div`
  height: 100px;
  overflow: auto;
  li{
    display: flex;
    text-align: center;
    align-items: center;
    width: 90%;
    p{
      width: 40%;
      max-width: 10ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  div{
    text-align: center;
  }
`