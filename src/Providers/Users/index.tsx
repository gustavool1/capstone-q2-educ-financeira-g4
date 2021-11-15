import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../Services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserContext = createContext<UserProviderData>(
  {} as UserProviderData
);

interface UserProps {
  children: ReactNode;
}

interface UserData {
  email: string;
  password: string;
}

interface UserDataItens {
  name: string;
  email: string;
  password: string;
  type: string;
  wallet: number;
  wishlist: Wish[];
  balance: Balance[];
  children: Children[];
  parentId: number;
  id?: number;
}

interface Wish {
  name: string;
  value: number;
}

interface Balance {
  date?: string;
  move?: number;
}

interface Children {
  childrenId: number;
}

interface UserProviderData {
  Login: (userData: UserData) => void;
  Logout: () => void;
  Register: (userData: UserDataItens) => void;
  UserToken: string;
  userData: UserDataItens;
  AddWishList: (data: UserDataItens, wish: Wish) => void;
  SpendBalance: (data: UserDataItens, number: number) => void;
  ReceivedBalance: (data: UserDataItens, number: number) => void;
  getUserData: () => void;
}

export const UserProvider = ({ children }: UserProps) => {
  toast.configure();
  const [userData, setUserData] = useState<UserDataItens>({} as UserDataItens);
  const history = useHistory();
  const [UserToken, setUserToken] = useState(
    () => localStorage.getItem("token") || ""
  );

  const Login = (userData: UserData) => {
    api
      .post("login", userData)
      .then((response) => {
        localStorage.setItem("userId", response.data.user.id);
        localStorage.setItem("token", response.data.accessToken);
        toast.success("Parabéns, você esta logado!");
        setUserToken(response.data.accessToken);
        setUserData(response.data.user);
        response.data.user.type === "parent"
          ? history.push("/dashboardparents")
          : history.push("/dashboardkids");
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

  const Register = (ParentUserData: UserDataItens) => {
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

  const AddWishList = (data: UserDataItens, wish: Wish) => {
    data.wishlist.push(wish);
    console.log(data);
    api
      .patch(`users/${data.id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const ReceivedBalance = (data: UserDataItens, value: number) => {
    const send = { date: new Date().toLocaleString(), move: value };
    data.balance.push(send);
    data.wallet += value;
    api
      .patch(`users/${data.id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const SpendBalance = (data: UserDataItens, value: number) => {
    const send = { date: new Date().toLocaleString(), move: value };
    data.balance.push(send);
    data.wallet += value;
    api
      .patch(`users/${data.id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUserData = () => {
    api
      .get(`users/${localStorage.getItem("userId")}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((reponse) => {
        setUserData(reponse.data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <UserContext.Provider
      value={{
        UserToken,
        Login,
        Logout,
        Register,
        userData,
        AddWishList,
        SpendBalance,
        ReceivedBalance,
        getUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
