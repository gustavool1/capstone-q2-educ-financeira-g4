import { useContext, useEffect, useState } from "react"
import { ActivitiesContext } from "../../Providers/Activities"
import { Container, InfoContainer, ActivitiesContainer, Achivied, NotAchivied }from "./style.js"
import api from '../../Services/api'
import { IoIosCreate } from "react-icons/io";
import { ChildrenContext } from "../../Providers/Children"
import { ModalContext } from "../../Providers/Modal";
interface Children{
    balance:[],
    email:string,
    id:number,
    parentId:number,
    wallet:number,
    wishlist:[],
    name:string,
    type: string
}

interface CardChildrenProps{
    children:Children
}

interface Activities {
    achivied: boolean
    frequency: string
    name: string
    reward: number
    userId: number,
    id:number
}
const CardChildren = ({children}:CardChildrenProps) =>{
       
    const [childrenActivies, setChildrenActivities] = useState<Activities[]>([])
    const { updateActivitie, getYourChildrens } = useContext(ActivitiesContext)
    const { handleModal } = useContext(ModalContext)
    
    const { updateWallet } = useContext(ChildrenContext)
    const FinishingTask = (e:any,task:Activities) =>{
        task.achivied=false
        updateActivitie(task)
        updateWallet(children,task.reward)
        getYourChildrens()
        setTimeout(()=>{
            getYourActivities(children.id)
            e.target.checked=false

        }, 500)

    }
    const getYourActivities = (userId:number) =>{
        api
         .get(`activities/?userId=${userId}`,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
          .then((response)=>{
              setChildrenActivities(response.data)
          })
           .catch((err)=>console.log('geyourActivies', err))
    }
    useEffect(()=>{
        getYourActivities(children.id)
    },[])
    return(
        <Container>
            <InfoContainer>
                <img src='https://d3ugyf2ht6aenh.cloudfront.net/stores/001/829/347/themes/amazonas/img-1347263166-1629736427-e77800fdb2094c2bcc4fb6f44d82ce1d1629736428.jpg?1211721950' alt='img'/>
                <div>
                    <p>{children.name}</p>
                    <p>R${children.wallet}</p>
                </div>
            </InfoContainer>
            <ActivitiesContainer>
                <Achivied>
                    <h2>Tarefas Concluídas: {childrenActivies.filter((item)=>item.achivied === true).length}</h2>
                    {childrenActivies.filter((item)=>item.achivied === true).map((achivied,key)=>(
                        <div key={key}>
                            <p>{achivied.name}</p>
                            <p>R${achivied.reward}</p>
                            <button><IoIosCreate/></button>
                        </div>
                    ))}
                </Achivied>
                <NotAchivied>
                    <h2>Tarefas a concluir: {childrenActivies.filter((item)=>item.achivied === false).length}</h2>
                    {childrenActivies.filter((item)=>item.achivied === false).map((achivied,key)=>(
                       <div key={key}>
                            <p>{achivied.name}</p>
                            <p>R${achivied.reward}</p>
                            <input type="checkbox"  onClick={(e)=>FinishingTask(e,achivied)}/>
                       </div>
                    ))}
                </NotAchivied>
                <button className='create-activity' onClick={handleModal}>Criar Atividade</button>
            </ActivitiesContainer>
        </Container>
    )
}
export default CardChildren