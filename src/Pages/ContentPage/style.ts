import styled from "styled-components";

export const Container = styled.div<{ background?: string; color?: string }>`
  background: ${(props) => props.background || "red"};
  color: ${(props) => props.color || "#000000"};
  min-height: 100vh;
  box-sizing: border-box;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-around;

  h3 {
    margin-bottom: 40px;
    font-size: 28px;
    text-align: center;
    max-width: 500px;
    margin: 0 auto 40px auto;
  }
  .first {
    margin-top: 50px;
  }
  h2 {
    margin-bottom: 50px;
    font-size: 48px;
    text-align: center;
    font-weight: normal;
  }
  .title {
    margin-top: 0;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    align-items: center;
    justify-content: space-around;

    .textContent {
      height: 100%;
    }
  }

  p {
    max-width: 500px;
    font-size: 20px;
    margin: 15px;
    text-align: center;
  }
`;

export const NavButton = styled.button`
  position: fixed;
  width: 100px;
  height: 100px;
  z-index: 2;
  bottom: 1%;
  left: 1%;
  border-radius: 50%;
  border: none;
  /* background: rgba(255, 255, 255, 0);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(11.5px);
  -webkit-backdrop-filter: blur(11.5px);
  border: 1px solid rgba(255, 255, 255, 0.18); */
  background: #fff;
  img {
    border-radius: 50%;

    width: 100%;
    background: transparent;
  }
`;
export const Nav = styled.nav`
  position: fixed;
  left: -300px;
  bottom: 0;
  height: calc(100vh - 80px);
  width: 300px;
  background: red;
  background: rgba(255, 255, 255, 0);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(11.5px);
  -webkit-backdrop-filter: blur(11.5px);
  border-radius: 0 10px 10px 0;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .exit {
    position: fixed;
    top: 0;
    right: 0;
    border: none;
    background: transparent;
    width: fit-content;
  }
  @keyframes Entering {
    0.0% {
      opacity: 0;
      margin: 0 0 0 0;
    }
    100% {
      opacity: 1;
      margin: 0 0 0 300px;
    }
  }
  animation: Entering 1s ease 0s normal forwards;
`;
