import React from "react";
import {
  Container,
  Form,
  FormContainer,
  ImageContainer,
  Button,
} from "./styles";
import Image from "../../Assets/RegisterParentsImage.svg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@material-ui/core";
import { useUser } from "../../Providers/Users";

interface RegisterUserData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterParents = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup.string().required("Campo obrigatório!").email("Email inválido"),
    password: yup.string().min(6, "Mínimo de 6 dígitos"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes"),
  });

  const { Register } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserData>({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data: RegisterUserData) => {
    const { email, name, password } = data;
    const ParentUserData = {
      name,
      email,
      password,
      type: "parent",
      wallet: 0,
      wishlist: [],
      balance: [],
      children: [],
      parentId: 0,
    };
    Register(ParentUserData);
  };

  return (
    <>
      <Container>
        <ImageContainer
          initial={{x:-250, opacity:0 }}
          animate={{ x:0, opacity:1 }}
          transition={{duration:2}}
         
        >
          <img src={Image} alt="imagem de registro" />
        </ImageContainer>
        <FormContainer
           initial={{x:250, opacity:0 }}
           animate={{ x:0, opacity:1 }}
           transition={{duration:2}}
        >
          <Form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Cadastrar </h1>
            <TextField
              margin="dense"
              type="text"
              id="name"
              label="Nome"
              variant="outlined"
              {...register("name")}
            />
            <span> {errors.name?.message}</span>
            <TextField
              margin="dense"
              type="text"
              id="email"
              label="Email"
              variant="outlined"
              {...register("email")}
            />
            <span>{errors.email?.message}</span>
            <TextField
              margin="dense"
              type="password"
              id="password"
              label="Senha"
              variant="outlined"
              {...register("password")}
            />
            <p>{errors.password?.message}</p>
            <TextField
              margin="dense"
              type="password"
              id="confirmPassword"
              label="Confirmação de senha"
              variant="outlined"
              {...register("confirmPassword")}
            />
            <span>{errors.confirmPassword?.message}</span>
            <Button type="submit">Cadastrar</Button>
          </Form>
        </FormContainer>
      </Container>
    </>
  );
};
