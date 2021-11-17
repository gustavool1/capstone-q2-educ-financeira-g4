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
    height: 100%;
    align-items: center;
    justify-content: space-around;

    .textContent {
      height: 100%;

      h3 {
        margin-bottom: 40px;
        font-size: 28px;
        text-align: center;
      }
    }
  }

  p {
    max-width: 500px;
    font-size: 20px;
    margin: 15px;
    text-align: center;
  }
`;
