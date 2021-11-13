
import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../Services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserContext = createContext<UserProviderData>({} as UserProviderData);

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

interface UserDataResponse {
  email: string;
  name: string;
  children?: [];
  wallet?: [];
  type: string;
  wishList?: [];
  balance?: [];
  parentId?: number;
  id: number;
}

interface UserProviderData {
  Login: (userData: UserData) => void;
  Logout: () => void;
  Register: (userData: RegisterUserData) => void;
  UserToken: string;
  userData: UserDataResponse;
  getUserData: () => void;
}

export const UserProvider = ({ children }: UserProps) => {
  toast.configure();
  const [userData, setUserData] = useState<UserDataResponse>({} as UserDataResponse)
  const history = useHistory();
  const [UserToken, setUserToken] = useState(
    () => localStorage.getItem("token") || ""
  );

  const Login = (userData: UserData) => {
    api
      .post("login", userData)
      .then((response) => {        
        localStorage.setItem("userId", response.data.user.id)
        localStorage.setItem("token", response.data.accessToken);
        toast.success("Parabéns, você esta logado!");
        setUserToken(response.data.accessToken);

        response.data.user.type === 'parent'? (
          history.push('/dashboardparents')
            ): (
          history.push('/dashboardkids')
          )
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

  const getUserData = () => {
    api
    .get(`users/${localStorage.getItem('userId')}`, {
      headers:{
          Authorization:`Bearer ${localStorage.getItem('token')}`
      }})
    .then((reponse) => {
      setUserData(reponse.data)
    })
    .catch(e => console.log(e))
  }

  return (
    <UserContext.Provider value={{ 
        UserToken, 
        Login, 
        Logout, 
        Register, 
        userData,
        getUserData 
        }}
      >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
