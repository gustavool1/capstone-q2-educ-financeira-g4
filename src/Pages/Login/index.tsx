import React from "react";
import {
  Container,
  FormContainer,
  Form,
  FormSide,
  ImageContainer,
  Button,
} from "./styles";
import LottieMaker from "../../Components/LottieMaker";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@material-ui/core";
import { useUser } from "../../Providers/Users";

interface RegisterUserData {
  email: string;
  password: string;
}

export const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório!").email("Email inválido"),
    password: yup.string().required("Campo obrigatório!"),
  });

  const { Login } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserData>({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data: RegisterUserData) => {
    Login(data);
  };

  return (
    <>
      <Container>
        <ImageContainer>
          <LottieMaker
            lottieImage={
              "https://assets10.lottiefiles.com/private_files/lf30_u4rzoljr.json"
            }
            height={700}
            width={700}
            playerAreVisible={false}
          />
        </ImageContainer>
        <FormSide>
          <>
            <FormContainer>
              <h1>Login</h1>
              <Form onSubmit={handleSubmit(onSubmitFunction)}>
                <TextField
                  margin="dense"
                  type="text"
                  id="email"
                  label="Email"
                  variant="outlined"
                  {...register("email")}
                  helperText={errors.email?.message}
                />
                
                <TextField
                  margin="dense"
                  type="password"
                  id="password"
                  label="Senha"
                  variant="outlined"
                  {...register("password")}
                  helperText={errors.password?.message}
                />
                <Button type="submit">Logar</Button>
              </Form>
            </FormContainer>
          </>
        </FormSide>
      </Container>
    </>
  );
};
