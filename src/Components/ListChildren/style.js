import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: center;

    @media screen and (max-width:768px){
        margin-top: 170px;
        flex-direction: column;
        width: 90%;
        margin: 0 auto;
    }

    
    
`