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
  const [isChoosed, setIsChoosed] = React.useState<boolean>(false);

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório!").email("Email inválido"),
    password: yup.string(),
  });

  const { Login } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: RegisterUserData) => {
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
              <h3 onClick={() => setIsChoosed(!isChoosed)}>voltar</h3>
              <Form onClick={handleSubmit(onSubmit)}>
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
                <Button type="submit">Logar</Button>
              </Form>
            </FormContainer>
          </>
        </FormSide>
      </Container>
    </>
  );
};
