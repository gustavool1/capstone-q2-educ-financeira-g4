import { useForm } from "react-hook-form";
import { Form } from "./style";
import { IoMdClose } from "react-icons/io";
import { useContext } from "react";
import { ModalContext } from "../../Providers/Modal";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUser } from "../../Providers/Users";

interface FormData {
  name: string;
  password: string;
}

const FormEditingProfile = () => {
  const { handleEditingProfile } = useContext(ModalContext);
  const { EditProfile } = useUser();

 
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .max(13, "Permitido apenas 13 caracteres")
      .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, "Somente letras"),
    password: yup.string().required("Senha obrigatória"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: FormData) => {
    const { name, password } = data;
    const toApi = { name, password };
    EditProfile(toApi);
  };
  return (
    <Form
      onSubmit={handleSubmit(onSubmitFunction)}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 80,
      }}
    >
      <div>
        <h2>Editar Perfil</h2>
        <button onClick={() => handleEditingProfile()}>
          <IoMdClose />
        </button>
      </div>
      <section>
        <p>{errors.name?.message}</p>
        <input type="text" placeholder="Editar Nome" {...register("name")} />
      </section>
      <section>
        <p>{errors.password?.message}</p>
        <input
          type="password"
          placeholder="Editar senha"
          {...register("password")}
        />
      </section>
      <section>
        <p>{errors.confirmPassword?.message}</p>
        <input
          type="password"
          placeholder="Confirmar senha"
          {...register("confirmPassword")}
        />
      </section>

      <button className="add-button">Editar</button>
    </Form>
  );
};

export default FormEditingProfile;
