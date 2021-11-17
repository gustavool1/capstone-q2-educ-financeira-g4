import { createContext, ReactNode } from "react";
import { toast } from 'react-toastify'
import svgCry from '../../assets/images/crying.png'
import svgHappy from '../../assets/images/happy.png'
import svgWarning from '../../assets/images/wonder.png'

interface ToastProviderProps{
    children:ReactNode
}
interface ToastProviderData{
    toastSuccess: (text:string) => void,
    toastError:(text:string)=> void,
    toastWarning:(text:string) => void,
}
export const ToastContext = createContext({} as ToastProviderData)

export const ToastProvider = ({ children }:ToastProviderProps) =>{
    toast.configure()
    const toastSuccess = (text:string) =>{
        toast.success(`${text}`, {
            icon: () =>  <img src={svgHappy} alt='happy kid'/>
          });
    }
    const toastError = (text:string) =>{
        toast.error(`${text}`, {
            icon: () =>  <img src={svgCry} alt='crying kid'/>
          });
    }
    const toastWarning = (text:string) =>{
        toast.warning(`${text}`, {
            icon: () =>  <img src={svgWarning} alt='crying kid'/>
          });
    }

    return(
        <ToastContext.Provider value = {{toastSuccess,toastError,toastWarning}}>
            { children }
        </ToastContext.Provider>
    )
}