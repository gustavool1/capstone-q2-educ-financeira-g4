import { createContext, ReactNode,  useState } from "react";

interface ModalProviderProps{
    children:ReactNode
}
interface ModalProviderData{
    handleModal : () => void,
    
    isOpen: boolean
}

export const ModalContext = createContext <ModalProviderData>({} as ModalProviderData)

export const ModalProvider = ({ children }: ModalProviderProps) =>{
    const [ isOpen, setIsOpen ] = useState(false)
    const handleModal = () =>{
        console.log('a')
        setIsOpen(!isOpen)
    }
    return(
        <ModalContext.Provider value={{ handleModal, isOpen }}>
            { children }
        </ModalContext.Provider>
    )
}