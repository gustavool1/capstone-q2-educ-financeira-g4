import styled from 'styled-components'

export const Container = styled.div`
    width: 350px;
    height: 530px;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    background-color: #302F4D;
    display: flex;
    flex-direction: column;
    img{
        border-radius:50%;
    }
    p{
        font-size:22px;
    }
    color: white;
`

export const InfoContainer = styled.div`
    display: flex;
    padding: 10px;
    height: 25%;
    div{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-around;
        p{
            font-weight: bold;
        }
    }
`
export const ActivitiesContainer = styled.div`
    padding: 10px;
`
export const Achivied = styled.div`
    height: 150px;
    overflow: auto;

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin:5px;
        input{
            width: 20px; 
            height: 20px;
            transition: 3s;
        }
        input:checked{
            opacity: 0;
        }
        p:nth-child(1){
            width: 50%;
        }
        p:nth-child(2), p:nth-child(3){
            
        }
    }
    
`
export const NotAchivied = styled.div`
   height: 150px;
   overflow: auto;
`