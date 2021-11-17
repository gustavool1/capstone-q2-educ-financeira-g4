import styled from "styled-components";

export const ButtonChart = styled.button`
    width: 130px;
    height: 40px;
    border-radius: 6px;
    border: none;
    font-weight: 500;
    transition: 1s;
    cursor: pointer;
    color: #FFFFFF;
    font-size: 16px;
    background: var(--color-primary);
    margin-right: 10px;

    :hover {
        background-color: var(--color-quaternary);
        transition: 0.5s;
    }

`