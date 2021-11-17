import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  scroll-behavior: smooth;
`;
export const VideoContainer = styled.div`
  height: fit-content;
  background-color: #9b5de5;
  margin-top: 80px;
`;

export const HowItWorks = styled.div`
  overflow-x: hidden;
  padding: 30px;
  background-color: #9b5de5;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .Animation {
    display: none;
  }
  .Content {
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      color: #fff;
      text-align: center;
      margin-bottom: 25px;
      font-size: 24px;
    }
    p {
      color: #fff;
      font-size: 18px;
      line-height: 30px;
      letter-spacing: -0.015em;
      max-width: 600px;
    }
  }
  @media (min-width: 768px) {
    .Animation {
      display: initial;
    }
    .Content {
      h2 {
        width: 100%;
        text-align: left;
      }
    }
  }
`;

export const KnowMore = styled.div`
  overflow-x: hidden;

  display: flex;
  background-color: #302f4d;
  padding: 65px 30px;
  justify-content: space-around;
  align-items: center;
  .Animation {
    display: none;
  }
  .Content {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 28px;
      text-align: center;
      color: #fff;
      margin: 0 auto 45px auto;
      max-width: 313px;
    }
    button {
      padding: 20px;
      background-color: transparent;
      border: 2px solid #fff;
      color: #fff;
      margin: 0 auto;
      border-radius: 50px;
      font-size: 28px;
      width: 240px;
      :hover {
        transition: 0.3s;
        color: #000;
        scale: 1.5;
        background-color: #fff;
      }
    }
  }
  @media (min-width: 768px) {
    .Animation {
      display: initial;
    }
  }
`;

export const Content = styled.div`
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: #00bbf9;
  align-items: center;

  h2 {
    margin: 0 0 65px 0;
    color: #fff;
    font-size: 48px;
    font-weight: normal;
    width: 100%;
  }
  p {
    font-size: 18px;
    color: #fff;
    width: 100%;
  }
  h3 {
    text-align: left;
    margin-top: 40px;
    font-size: 28px;
    margin-bottom: 5px;
    width: 100%;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 80px;
    padding-bottom: 200px;
    justify-content: space-between;
    div {
      width: 40%;
    }
  }
`;

export const Steps = styled.div`
  overflow-x: hidden;

  padding: 20px;
  background-color: #8c218e;
  h2 {
    margin: 45px 0;
    color: #fff;
    font-size: 48px;
    font-weight: normal;
    text-align: center;
  }
  .Content {
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      border: 3px solid #ffffff;
      border-radius: 10px;
      height: 237px;
      margin: 30px auto;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 100%;
      h4 {
        color: #fff;
        margin-bottom: 20px;
        text-align: center;
        font-size: 20px;
      }
      p {
        color: #fff;
        text-align: center;
      }
    }
  }
  @media (min-width: 768px) {
    .Content {
      flex-direction: row;
      div {
        width: 360px;
        height: 400px;
        :hover {
          scale: 1.3;
        }
      }
    }
  }
`;
export const AnimatedSection = styled.div`
  overflow-x: hidden;

  display: none;
  background: #fee440;
  align-items: center;
  justify-content: space-around;
  height: 615px;
  h2 {
    font-size: 48px;
    width: 600px;
  }
  @media (min-width: 768px) {
    display: flex;
  }
`;
export const JoinToday = styled.div`
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 45px 30px;
  background-color: #302f4d;
  img {
    width: 240px;
    height: 253px;
    margin-bottom: 40px;
  }
  button {
    transition: 0.3s;

    padding: 20px;
    background-color: transparent;
    border: 2px solid #fff;
    color: #fff;
    border-radius: 50px;
    font-size: 28px;
    width: 240px;
    :hover {
      transition: 0.3s;
      color: #000;
      scale: 1.5;
      background-color: #fff;
    }
  }
  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-around;
  }
`;

export const WhoWeAre = styled.div`
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 45px 30px;
  background: #00f5d4;
  h2 {
    font-weight: normal;
    font-size: 48px;
    text-align: center;
  }

  p {
    font-size: 36px;
    text-align: center;
    margin: 50px 0;
    max-width: 1300px;
  }
  div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  @media (min-width: 768px) {
    div {
      flex-direction: row;
    }
  }
`;

export const PersonCard = styled(motion.a)`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    margin: auto;
  }
  h3 {
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 1px #000;
    font-size: 28px;
  }
`;
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
`;
