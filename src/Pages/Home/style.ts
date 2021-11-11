import styled from "styled-components";

export const VideoContainer = styled.div`
  height: 500px;
`;

export const HowItWorks = styled.div`
  padding: 30px;
  background-color: #9b5de5;
  h2 {
    color: #fff;
    text-align: center;
    margin-bottom: 10px;
  }
  p {
    color: #fff;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: -0.015em;
  }
`;

export const KnowMore = styled.div`
  background-color: #302f4d;
  padding: 65px 30px;
  display: flex;
  flex-direction: column;

  p {
    font-size: 28px;
    text-align: center;
    color: #fff;
    width: 220px;
    margin: 0 auto 45px auto;
  }
  button {
    padding: 20px;
    background-color: transparent;
    border: 2px solid #fff;
    color: #fff;
    margin: 0 auto;
    border-radius: 50px;
    font-size: 28px;
    width: 100%;
  }
`;

export const Content = styled.div`
  padding: 30px;
  background-color: #00bbf9;
  h2 {
    margin: 0 0 65px 0;
    color: #fff;
    font-size: 48px;
  }
  p {
    font-size: 18px;
    color: #fff;
  }
  h3 {
    text-align: left;
    margin-top: 40px;
    font-size: 28px;
    margin-bottom: 5px;
  }
`;
