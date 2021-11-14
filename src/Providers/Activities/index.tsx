import { createContext, ReactNode, useState } from "react";
import api from '../../Services/api'

interface ActivitiesProviderData{
    getYourChildrens: ()=> void,
    userId:string,
    childrenArr: Children[],
    updateActivitie: (task:Activities) => void,
    createActivie: (task:Activities) => void,
    actualActivitieId:number
    changingActualIdActivitie: (activitieId:number ) => void
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


export const ActivitiesContext = createContext<ActivitiesProviderData>({} as ActivitiesProviderData)

export const ActivitiesProvider = ({ children }:ActivitiesProviderProps) =>{
    const [ childrenArr, setChildrenArr ] = useState<Children[]>([])
    const [ actualActivitieId, setActualActivitieId ]  = useState(0) 

    const [ userId ] = useState(
        () => localStorage.getItem("userId") || ""
    )
    const getYourChildrens = () =>{
        api
         .get(`users?parentId=${userId}`,{
             headers:{
                 Authorization:`Bearer ${localStorage.getItem('token')}`
             }
         })
          .then((response)=> setChildrenArr([ ...response.data]))
           .catch((err)=>console.log('getyourChildrens', err))
           
    }
    const updateActivitie = (task:Activities) =>{
        api
         .patch(`activities/${task.id}`, task, {
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
         
    }
    const createActivie = (task:Activities) =>{
        api
         .post('activities',  task, {
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
         .then((response)=>console.log(response))
    }

    const changingActualIdActivitie = (activitieId:number) =>{
        setActualActivitieId(activitieId)
    }
    
    return(
        <ActivitiesContext.Provider value={{getYourChildrens, userId, childrenArr,updateActivitie, createActivie, changingActualIdActivitie, actualActivitieId}}>
            { children }
        </ActivitiesContext.Provider>
    )
}