import { useForm } from 'react-hook-form'
import { Form } from './style'
import { IoMdClose } from "react-icons/io";
import { useContext } from 'react';
import { ModalContext } from '../../Providers/Modal';
import { ActivitiesContext } from '../../Providers/Activities';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
interface FormProps {
    childAchivied: boolean,
    parentAchivied: boolean,
    frequency: string;
    name: string;
    reward: number;
    userId: number;
    id: number;
}
const FormEditingActivity = () =>{
    const schema = yup.object().shape({
        name:yup.string().required("Nome obrigatório"),
        reward:yup.number().required("Recompensa obrigatória")
    })
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver:yupResolver(schema)
    })

    const {handleEditing} = useContext(ModalContext)
    const { actualActivitieId, updateActivitie} = useContext(ActivitiesContext)


    const onSubmitFunction = (data:FormProps) =>{
        data.id = actualActivitieId
        console.log(data)
        updateActivitie(data)
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
                <h2>Editar atividade</h2>
                <button onClick={()=>handleEditing(0)}><IoMdClose/></button>
            </div>
            <section>
                <p>{errors.name?.message}</p>
                <input type='text' placeholder='Editar Nome'{...register('name')}/>
            </section>
            <section>
                <p>{errors.reward?.message}</p>
                <input type='text' placeholder='Recompensa pela atividade'{...register('reward')}/>
            </section>
            <select {...register('frequency')} >
                <option value="Diaria">Diaria</option>
                <option value="Semanal">Semanal</option>
                <option value="Mensal">Mensal</option>
            </select>
            <button className='add-button'>Editar</button>
        </Form>
    )
}
export default FormEditingActivity