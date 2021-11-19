import { createContext, ReactNode, useState } from "react";
import { toast } from "react-toastify";
import { showToast } from "../../Components/Toast/style";
import api from '../../Services/api'
import { useUser } from "../Users";

interface ActivitiesProviderData{
    getYourChildrens: ()=> void,
    userId:string,
    childrenArr: Children[],
    updateActivitie: (task:Activities) => void,
    createActivie: (task:Activities) => void,
    actualActivitieId:number
    changingActualIdActivitie: (activitieId:number ) => void,
    getAmountToPay: (number:number) => void
    amountToPay: number,

    deleteActivitie: (activitie:Activities) => void
} 
interface ActivitiesProviderProps{
    children:ReactNode
}
interface Children{
        balance:[],
        email:string,
        id:number,
        parentId:number,
        password:string,
        wallet:number,
        wishlist:[],
        name:string,
        type: string
}
interface Activities {
    childAchivied: boolean,
    parentAchivied: boolean,
    frequency: string;
    name: string;
    reward: number;
    userId: number;
    id: number;
}



export const ActivitiesContext = createContext<ActivitiesProviderData>({} as ActivitiesProviderData)

export const ActivitiesProvider = ({ children }:ActivitiesProviderProps) =>{
    toast.configure()
    const [ childrenArr, setChildrenArr ] = useState<Children[]>([])
    const [ actualActivitieId, setActualActivitieId ]  = useState(0) 
    const [amountToPay, setAmountToPay] = useState(
        Number(localStorage.getItem("amountToPay")) || 0 
    )
    const { userId } = useUser()
    const getYourChildrens = () =>{
        api
         .get(`users?parentId=${userId}`,{
             headers:{
                 Authorization:`Bearer ${localStorage.getItem('token')}`
             }
         })
          .then((response)=> {
            setChildrenArr([ ...response.data])
          })
           .catch((err)=>{
               console.log('getyourChildrens', err)
               localStorage.clear();
            })
           
    }
    const updateActivitie = (task:Activities) =>{
        api
         .patch(`activities/${task.id}`, task, {
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
         .then(()=> showToast({type:"success", message:"Atividade concluída com sucesso"}))
         
    }
    const createActivie = (task:Activities) =>{
        task.reward = Number(task.reward)
        api
         .post('activities',  task, {
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
         .then(()=>{
             showToast({type:"success", message:"Atividade adicionada com sucesso"})
         })
    }

    const getAmountToPay = (number:number) => {
        const total = Number(localStorage.getItem('amountToPay')) + number
        setAmountToPay(total)
        localStorage.setItem('amountToPay', total.toString())
    }

    const deleteActivitie = (activitie:Activities) =>{
        api
         .delete(`activities/${activitie.id}`,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
         })
          .then((response) => {
            console.log(response)
            showToast({type:"success", message:"Pagamento concluído"})
          })
    }

    const changingActualIdActivitie = (activitieId:number) =>{
        setActualActivitieId(activitieId)
    }
    
    return(
        <ActivitiesContext.Provider value={{getYourChildrens, userId, childrenArr,updateActivitie, createActivie, changingActualIdActivitie, actualActivitieId, getAmountToPay, amountToPay, deleteActivitie}}>
            { children }
        </ActivitiesContext.Provider>
    )
}