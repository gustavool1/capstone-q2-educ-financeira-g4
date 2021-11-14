import { createContext, ReactNode, useState } from "react";
import api from "../../Services/api";

interface ChildrenUser {
  email: string;
  name: string;
  wallet: number;
  type: string;
  wishlist?: [];
  balance?: [];
  id: number;
  parentId: number;
}

interface ChildrenProviderData{
    updateWallet: (childrenUser:ChildrenUser, amount:number) => void,
    actualChildren: number,
    changingActualChildren: (childrenId:number) => void
}

interface ChildrenProviderProps {
  children: ReactNode;
}


export const ChildrenContext = createContext<ChildrenProviderData>({} as ChildrenProviderData)

export const ChildrenProvider = ({ children }:ChildrenProviderProps) =>{
    
    const [actualChildren, setActualChildren] = useState(0)
    const updateWallet = (childrenUser:ChildrenUser, amount:number) =>{
        const { id } = childrenUser
        childrenUser.wallet+=Number(amount)
        api
         .patch(`users/${id}`, childrenUser,{
             headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
         })
    }
    const changingActualChildren = (childrenId:number) =>{
        setActualChildren(childrenId)
    }
    
    
    return(
        <ChildrenContext.Provider value={{updateWallet, actualChildren, changingActualChildren}}>
            {children}
        </ChildrenContext.Provider>
    )
}
