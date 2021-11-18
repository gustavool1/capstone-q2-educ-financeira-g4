import { Form } from './style'
import { IoMdClose } from "react-icons/io";
import { useContext } from 'react';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { ActivitiesContext } from '../../Providers/Activities';
import { ModalContext } from "../../Providers/Modal";
import { ChildrenContext } from '../../Providers/Children';

interface FormProps {
    childAchivied: boolean,
    parentAchivied: boolean,
    frequency: string;
    name: string;
    reward: number;
    userId: number;
    id: number;
}

const FormCreatingActivity = () =>{
    const { handleAdding } = useContext(ModalContext)
    const schema = yup.object().shape({
        name: yup.string().required("Nome da atividade obrigatório"),
        reward: yup.string().required("Recompensa da atividade obrigatória"),

    })
    const { register, handleSubmit, formState:{errors} } = useForm({
        resolver: yupResolver(schema)
    })
    const { createActivie,getYourChildrens } = useContext(ActivitiesContext)
    const {actualChildren} = useContext(ChildrenContext)
    const onSubmitFunction = (data:FormProps) =>{
        console.log(data)
        data.userId=actualChildren
        data.childAchivied= false 
        data.parentAchivied= false
        createActivie(data)
        getYourChildrens()
        
    }
    return(
        <Form onSubmit={handleSubmit(onSubmitFunction)}
            initial={{ scale: 0, opacity:0 }}
            animate={{ scale: 1,opacity:1 }}
            transition={{
            type: "spring",
            stiffness: 80,

            }}
        >
            <div>
                <h2>Adicione uma nova atividade</h2>
                <button onClick={()=>handleAdding(actualChildren)} ><IoMdClose/></button>
            </div>
            <section className='input-container'>
                <p>{errors.name?.message}</p>
                <input type="text"   placeholder='Insira o Nome' {...register('name')}/>
            </section>
            <section className='input-container'>
                <p>{errors.name?.message}</p>
                <input type="number"  placeholder='Insira o valor'{...register('reward')}/>
            </section>
            <select {...register("frequency")} >
                <option value="Diaria">Diaria</option>
                <option value="Semanal">Semanal</option>
                <option value="Mensal">Mensal</option>
            </select>
            <button className='add-button'  type='submit'  > Adicionar</button>
        </Form>
    )
}
export default FormCreatingActivity