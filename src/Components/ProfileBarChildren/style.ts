import styled from "styled-components"

export const ProfileContainerChildren = styled.aside`
    width: 260px;
    margin-top: 80px;
    min-height: calc(100vh - 80px);  
    background-color: #9b5de5;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding-top: 60px;
    color: white;

    .wallet {
        margin-top: 300px;
        
        svg {
            color: #fee440;
            margin-left: 10px; 
        }

        @media screen and (max-height: 800px) {
            margin-top: 50%;
        }
    }


    .profileDescriptions {
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;


        img {
            width: 150px;
            height: 150px;
            border-radius: 100%;
        }
    }

    button {
        width: 180px;
        height: 60px;
        border-radius: 6px;
        border: none;
        margin-left: 5px;               
        font-weight: 500; 
        transition: 1s;
        cursor: pointer;
        color: #FFFFFF;
        font-size: 16px;
        background: #f15bb5;
        font-family: 'Montserrat', sans-serif;
        margin-top: 20px;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
    
`