import { createContext, ReactNode,  useContext,  useState } from "react";
import { ActivitiesContext } from "../Activities";
import { ChildrenContext } from "../Children";

interface ModalProviderProps{
    children:ReactNode
}
interface ModalProviderData{
    handleEditing : (activitieId:number) => void,
    isEditing: boolean

    handleAdding : (childrenId:number) => void
    isAdding: boolean 
}
interface Children{
    email:string,
    name: string,
    wallet: number,
    type: string,
    wishlist?: [],
    balance?: [],
    id: number,
    parentId: number

    
}

export const ModalContext = createContext <ModalProviderData>({} as ModalProviderData)

export const ModalProvider = ({ children }: ModalProviderProps) =>{
    const {  changingActualChildren} = useContext(ChildrenContext)
    const { changingActualIdActivitie} = useContext(ActivitiesContext)
    const [ isEditing, setIsEditing ] = useState(false)
    const [ isAdding, setIsAdding ] = useState(false)
    
    const handleEditing = (activitieId:number) =>{
        changingActualIdActivitie(activitieId)
        setIsEditing(!isEditing)
    }

    const handleAdding = (childrenId:number) =>{
        changingActualChildren(childrenId)
        setIsAdding(!isAdding)
    }
    return(
        <ModalContext.Provider value={{ handleEditing, isEditing, handleAdding, isAdding}}>
            { children }
        </ModalContext.Provider>
    )
}
