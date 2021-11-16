import styled from "styled-components";

export const Container = styled.div<{ background?: string; color?: string }>`
  background: ${(props) => props.background || "red"};
  color: ${(props) => props.color || "#000000"};
  min-height: 100vh;
  box-sizing: border-box;
  padding-top: 80px;
  h2 {
    margin: 30px;
    font-size: 48px;
    text-align: center;
    font-weight: normal;
  }
  .content {
    display: flex;
  }

  p {
    font-size: 20px;
    margin: 15px;
  }
`;
