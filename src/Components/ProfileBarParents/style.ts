import styled from "styled-components";


export const ProfileContainer = styled.div`
    width: 100%;
    height: 120px;
    background: #9b5de5;
    color: #FFFFFF;
    padding: 0 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    margin-top: 80px;

    a {
        color: #FFFFFF;
        font-weight: 500;
        transition: 1s;

        :hover {
            color: #fee440;
        }
    }

    .profideDescription {
        width: 400px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 500;

        img {            
            height: 100px;
            border-radius: 20%;
        }
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`