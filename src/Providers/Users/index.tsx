import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../Services/api";
import { toast } from "react-toastify";

const UserContext = createContext<UserProviderData>({} as UserProviderData);

interface UserProps {
  children: ReactNode;
}

interface UserData {
  email: string;
  password: string;
}

interface RegisterUserData {
  name: string;
  email: string;
  password: string;
  type: string;
  children?: [];
  wallet?: string;
  wishList?: [];
  balance?: [];
}

interface UserProviderData {
  Login: (userData: UserData) => void;
  Logout: () => void;
  Register: (userData: RegisterUserData) => void;
  UserToken: string;
}

export const UserProvider = ({ children }: UserProps) => {
  toast.configure();

  const history = useHistory();
  const [UserToken, setUserToken] = useState(
    () => localStorage.getItem("token") || ""
  );

  const Login = (userData: UserData) => {
    api
      .post("login", userData)
      .then((response) => {
        localStorage.setItem("token", response.data.accessToken);
        toast.success("Parabéns, você esta logado!");
        setUserToken(response.data.accessToken);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro, ao tentar logar!");
      });
  };

  const Logout = () => {
    localStorage.clear();
    toast.success("Você esta deslogado!");
    setUserToken("");
  };

  const Register = (ParentUserData: RegisterUserData) => {
    api
      .post("register", ParentUserData)
      .then(() => {
        history.push("/login");
        toast.success("Parabéns, você criou uma conta!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro, ao criar logar!");
      });
  };

  return (
    <UserContext.Provider value={{ UserToken, Login, Logout, Register }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
