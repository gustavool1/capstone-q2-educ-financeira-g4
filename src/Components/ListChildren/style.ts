import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1110px;
    margin: 0 auto;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width:1110px){
        max-width: 740px;
    }

    @media screen and (max-width:768px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        
        margin: 180px 0px ;

    }

    
    
`