import { createContext, ReactNode, useState } from "react";
import api from '../../Services/api'

interface ActivitiesProviderData {
    getYourChildrens: ()=> void,
    userId:string,
    childrenArr: Children[],
    updateActivitie: (task:Activities) => void
    amountToPay: any;
    getAmountToPay: () => void;
} 

interface ActivitiesProviderProps {
    children:ReactNode
}

interface Children {
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
    id:number
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
    const [ childrenArr, setChildrenArr ] = useState<Children[]>([])
    const [amountToPay, setAmountToPay] = useState<any>(0)
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

    return(
        <ActivitiesContext.Provider
            value={{getYourChildrens, 
            userId, 
            childrenArr,
            updateActivitie,
            getAmountToPay,
            amountToPay 
        }}>
            { children }
        </ActivitiesContext.Provider>
    )
}