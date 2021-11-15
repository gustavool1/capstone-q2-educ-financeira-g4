import styled from 'styled-components'

export const Container = styled.div`
    width: 350px;
    height: 570px;
    margin: 10px;
    padding: 2%;
    border-radius: 15px;
    background-color: #302F4D;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    img{
        border-radius:50%;
    }
    p{
        font-size:22px;
    }
    color: white;
    .create-activity {
      padding: 10px;
      background-color: transparent;
      border: 2px solid #fff;
      color: #fff;
      margin: 0 auto;
      border-radius: 50px;
      font-size: 28px;
      width: 240px;
      :hover {
      transition: 1.3s;
      color: #000;
      scale: 1.5;
      background-color: #fff;
        }
    }
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const Achivied = styled.div`
    height: 170px;
    overflow: auto;
    overflow-x:hidden;
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin:5px;
        button{
            width: 20px; 
            height: 20px;
            transition: 3s;
            border: none;
            background-color: transparent;

            svg{
                color: white;
                font-size: 20px;
            }
        }
        
        p:nth-child(1){
            width: 50%;
        }
        p:nth-child(2), p:nth-child(3){
            
        }
        
       
    }
    
`
export const NotAchivied = styled.div`
   height: 170px;
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
      
    }
`