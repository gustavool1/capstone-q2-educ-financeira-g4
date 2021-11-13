import { Form } from './style'
import { IoMdClose } from "react-icons/io";
import { useContext } from 'react';
import { ModalContext } from '../../Providers/Modal';
const FormCreatingActivity = () =>{
    const {handleModal} = useContext(ModalContext)

    const handleSubmit = (e:any) =>{
        e.preventDefault()
        handleModal()
    }
    return(
        <Form onSubmit={(e)=>handleSubmit(e)}
        initial={{ scale: 0, opacity:0 }}
        animate={{ scale: 1,opacity:1 }}
        transition={{
          type: "spring",
          stiffness: 80,

        }}
        >
            <div>
                <h2>Adicione uma nova atividade</h2>
                <button><IoMdClose/></button>
            </div>
            <input type="text" name="" id="" placeholder='Insira o Nome' />
            <input type="text" name="" id="" placeholder='Insira o valor'/>
            <input type="text" name="" id="" placeholder='Insira a frequência'/>
            <button className='add-button'  type='submit'> Adicionar</button>
        </Form>
    )
}
export default FormCreatingActivity