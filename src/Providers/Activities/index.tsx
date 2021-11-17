import { createContext, ReactNode, useState } from "react";
import { toast } from "react-toastify";
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
    getAmountToPay: () => void
    amountToPay: number
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
    achivied: boolean
    frequency: string
    name: string
    reward: number
    userId: number,
    id?:number
}
interface ChildrenObj {
    achivied: boolean,
    childrenId: number,
    frequency: string,
    id: number,
    name: string,
    reward: 1000,
    userId: 2
}


export const ActivitiesContext = createContext<ActivitiesProviderData>({} as ActivitiesProviderData)

export const ActivitiesProvider = ({ children }:ActivitiesProviderProps) =>{
    toast.configure()
    const [ childrenArr, setChildrenArr ] = useState<Children[]>([])
    const [ actualActivitieId, setActualActivitieId ]  = useState(0) 
    const [amountToPay, setAmountToPay] = useState<number>(0)
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
         .then(()=> toast.success(("Atividade editada com sucesso")))
         
    }
    const createActivie = (task:Activities) =>{
        api
         .post('activities',  task, {
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
         .then(()=>{
             toast.success("Atividade adicionada com sucesso")
         })
    }

    const getAmountToPay = () => {
        api
        .get(`/activities?userId=${userId}`, {
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => {
            setAmountToPay(response.data.filter((el: ChildrenObj) => el.achivied === true)
            .reduce((acc: number, val: ChildrenObj) => acc + val.reward, 0))
        })
        .catch(e => {
            console.log(e)
        })
        
    }

    const changingActualIdActivitie = (activitieId:number) =>{
        setActualActivitieId(activitieId)
    }
    
    return(
        <ActivitiesContext.Provider value={{getYourChildrens, userId, childrenArr,updateActivitie, createActivie, changingActualIdActivitie, actualActivitieId, getAmountToPay, amountToPay}}>
            { children }
        </ActivitiesContext.Provider>
    )
}