import styled from 'styled-components'

export const Container = styled.div`
   
   
    
`

export const Front = styled.div`
    width: 350px;
    height: 570px;
    margin: 10px;
    padding: 2%;
    border-radius: 15px;
    background-color: #302F4D;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid white;
    img{
        width: 250px;
        height: 250px;
        border-radius: 50%;
    }
    
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
    p{
        font-size: 25px;
    }
`
export const Back = styled.div`
    width: 350px;
    height: 570px;
    margin: 10px;
    padding: 2%;
    border-radius: 15px;
    background-color: #302F4D;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid white;
`
export const Achivied = styled.div`
    height: 170px;
    width: 90%;
    overflow: auto;
    overflow-x:hidden;
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin:5px;

       
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
   width: 90%;
   div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin:5px;
        input{
            width: 20px; 
            height: 20px;
            transition: 3s;
            cursor: pointer;
        }
        input:checked{
            opacity: 0;
        }
        p:nth-child(1){
            width: 50%;
        } 
        button{
            width: 20px; 
            height: 20px;
            transition: 3s;
            border: none;
            background-color: transparent;

            svg{
                color: white;
                font-size: 30px;
                margin-top: -8px;
            }
        }
        
      
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    .create-activity {
      padding: 10px;
      background-color: transparent;
      border: 2px solid #fff;
      color: #fff;
      margin: 0 auto;
      border-radius: 5px;
      font-size: 20px;
      margin: 5px;
      width: 50%;
      :hover {
        transition: 1.3s;
        color: #000;
        scale: 1.5;
        background-color: #fff;
        }
    }
`