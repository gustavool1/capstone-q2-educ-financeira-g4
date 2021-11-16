import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:768px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        
        margin: 180px 0px ;

    }

    
    
`