import { useContext } from "react"
import { ModalContext } from "../../Providers/Modal"
import { Container, CartContainer }from "./style.js"

interface ModalProps{
    component: () => JSX.Element;
}
const Modal = ({component:Component}:ModalProps) =>{
    const { isOpen } = useContext(ModalContext)
    return(
            <>
            {isOpen &&
                <Container>
                        <Component/>
                </Container>
            }
            </>
    )
}

export default Modal