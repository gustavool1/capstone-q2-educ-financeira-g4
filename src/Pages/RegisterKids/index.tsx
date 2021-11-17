import React, { useContext, useEffect } from "react";
import {
  Container,
  Form,
  FormContainer,
  ImageContainer,
  Button,
} from "./styles";
import LottieMaker from "../../Components/LottieMaker";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@material-ui/core";
import { UserContext, useUser } from "../../Providers/Users";
import { useHistory } from "react-router";

interface RegisterUserData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterKids = () => {
  const history = useHistory();
  const { userData, isTokenValid } = useContext(UserContext)

  useEffect(() => {
    isTokenValid()
  }, [])

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
      type: "children",
      wallet: 0,
      wishlist: [],
      balance: [],
      children: [],
      parentId: Number(userData.id),
    };
     Register(ParentUserData);
  };

  return (
    <>
      <Container>
        <FormContainer>
          <Form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Cadastrar dependente</h1>
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
        <ImageContainer>
          <LottieMaker
            lottieImage={
              "https://assets6.lottiefiles.com/packages/lf20_0qrzy1vy.json"
            }
            height={500}
            width={500}
            playerAreVisible={false}
          />
        </ImageContainer>
      </Container>
    </>
  );
};
