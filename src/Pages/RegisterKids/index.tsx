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

interface RegisterUserData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterKids = () => {
  const { userData, isTokenValid } = useContext(UserContext)

  useEffect(() => {
    isTokenValid()
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <FormContainer
           initial={{x:-250, opacity:0 }}
           animate={{ x:0, opacity:1 }}
           transition={{duration:2}}
        >
          <Form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Cadastrar dependente</h1>
            <TextField
              margin="dense"
              type="text"
              id="name"
              label="Nome"
              variant="outlined"
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
            
            <TextField
              margin="dense"
              type="text"
              id="email"
              label="Email"
              variant="outlined"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            <TextField
              margin="dense"
              type="password"
              id="password"
              label="Senha"
              variant="outlined"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            />

            <TextField
              margin="dense"
              type="password"
              id="confirmPassword"
              label="Confirmação de senha"
              variant="outlined"
              {...register("confirmPassword")}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
            />

            <Button type="submit">Cadastrar</Button>
          </Form>
        </FormContainer>
        <ImageContainer
          initial={{x:250, opacity:0 }}
          animate={{ x:0, opacity:1 }}
          transition={{duration:2}}
        >
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
