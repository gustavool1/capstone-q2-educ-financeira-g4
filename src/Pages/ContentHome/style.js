
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: 0;
    h2{
        margin-bottom: 20px;
        font-size: 28px;
    }

`
export const IntroduceContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 10px;
    line-height: 1.8;
    align-items: center;
    h1{
        width: 100%;
        text-align: center;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .text-introduce{
        width: 650px;
        margin-right: 50px;
        h2{
            font: 26px;
            text-align:center;
        }
        p{
            font-size: 22px;
            text-align:justify;
        }
       
       
    }
    @media screen and (max-width:768px){
        height: auto;
        .text-introduce{
            width: 90%;
            margin: 0 auto;
        }
        
    }
`

export const SpendsContainer = styled.div`
    line-height: 1.8;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    background-color: #00F5D4;
    
    
    .text-introduce{
        margin-top: 20px;
        margin-right: 20px;
        width: 600px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h2{
            font: 26px;
        }
        p{
            font-size: 22px;
            text-align:justify;
        }
       
    }
    @media screen and (max-width:768px){
        height: auto;
        .text-introduce{
            width: 90%;
            margin: 0 auto;
        }
        
    }
`
export const CharityContainer = styled.div`
    margin-top: 30px;
    height: 600px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    line-height: 1.8;

    align-items: center;
    img{
        width: 300px;
    }
    .text-introduce{
        h2{
            font: 26px;
        }
        p{
            font-size: 22px;
            text-align:justify;
        }
        width: 600px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .img-container{
        margin: 0 auto;
    }
    @media screen and (max-width:768px){
        height: auto;

        .text-introduce{
            width: 90%;
            margin: 0 auto;

            img{
                width: 200px;
            }
        }
    }
`
export const WaistContainer = styled.div`
    height: 600px;
    line-height: 1.8;
    background-color:#00F5D4 ;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    .text-introduce{
        width: 600px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        h2{
            font: 26px;
        }
        p{
            font-size: 22px;
            text-align:justify;
        }
        
    }
    @media screen and (max-width:768px){
        height: auto;
        
        .text-introduce{
            width: 90%;
        }
    }
`
export const EntrepreneurContainer = styled.div`
    height: 600px;
    line-height: 1.8;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 10px;

    align-items: center;
    h1{
        width: 100%;
        text-align: center;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .text-introduce{
        width: 600px;
        h2{
            font: 26px;
            text-align:center;
        }
        p{
            font-size: 22px;
            text-align: justify;
        }
        
    }
    @media screen and (max-width:768px){
        height: auto;
        .text-introduce{
            width: 90%;
            
        }
    }
`