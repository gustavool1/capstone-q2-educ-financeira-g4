import styled from "styled-components";

export const Container = styled.div`

    .warnning {
        text-align: center;      
        margin-top: 50px;
        color: gray;  

        .svg {
            margin: auto 0;
        }

        p {
            font-weight: 500px;
        }

        @media screen and (max-width: 768px) {
            margin-top: 210px;
        }
    }


`

export const EditingContainer = styled.div`
    background-color: rgb(242, 242, 242, 0.85);
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    top:0;
    position: fixed;
    z-index: 3;



`
