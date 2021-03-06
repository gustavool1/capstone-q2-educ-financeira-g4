import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../Services/api";
import "react-toastify/dist/ReactToastify.css";
import { showToast } from "../../Components/Toast/style";

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
  wallet: number;
  wishlist: Wish[];
  balance: Balance[];
  children: Children[];
  parentId: number;
  id?: number;
  type: string;
}

interface Wish {
  name: string;
  value: number;
  kitty: number;
}

export interface Balance {
  date: string;
  move: number;
}

interface Children {
  childrenId: number;
}
interface activity {
  childAchivied: boolean,
  parentAchivied: boolean,
  frequency: string;
  name: string;
  reward: number;
  userId: number;
  id: number;
}

interface EditProfileData {
  name?: string;
  password?: string;
}
interface UserProviderData {
  Login: (userData: UserData) => void;
  Logout: () => void;
  Register: (userData: UserDataItens) => void;
  UserToken: string;
  activities: activity[];
  GetActivities: (userId: number) => void;
  userData: UserDataItens;
  AddWishList: (data: UserDataItens, wish: Wish) => void;
  SpendBalance: (data: UserDataItens, number: number) => void;
  ReceivedBalance: (data: UserDataItens, number: number) => void;
  AddtoKitty: (item: Wish, value: number) => void;
  getUserData: () => void;
  isTokenValid: () => void;
  typeUser: string;
  userId: string;
  EditProfile: (data: EditProfileData) => void;
  SelectedChild: (id: number) => void;
}
export const UserContext = createContext<UserProviderData>(
  {} as UserProviderData
);

export const UserProvider = ({ children }: UserProps) => {
 
  const [userData, setUserData] = useState<UserDataItens>({} as UserDataItens);
  const history = useHistory();
  const [UserToken, setUserToken] = useState(
    () => localStorage.getItem("token") || ""
  );
  const [userId, setUserId] = useState(
    () => localStorage.getItem("userId") || ""
  );
  const [activities, setActivities] = useState([] as activity[]);

  const [typeUser, setTypeUser] = useState(
    () => localStorage.getItem("typeUser") || ""
  );

  const Login = (userData: UserData) => {
    api
      .post("login", userData)
      .then((response) => {
        localStorage.setItem("userId", response.data.user.id);
        localStorage.setItem("amountToPay", "0")
        setUserId(response.data.user.id);
        localStorage.setItem("typeUser", response.data.user.type);
        setTypeUser(response.data.user.type);
        localStorage.setItem("token", response.data.accessToken);
        showToast({ type: "success", message: "Sucesso ao logar" });
        setUserToken(response.data.accessToken);
        setUserData(response.data.user);
        response.data.user.type === "parent"
          ? history.push("/dashboardparents")
          : history.push("/dashboardkids");
      })
      .catch((err) => {
        console.log(err);
        showToast({ type: "error", message: "Erro, ao tentar logar!" });
      });
  };

  const Logout = () => {
    localStorage.clear();
    showToast({ type: "success", message: "Voc?? esta deslogado!" });
    setUserToken("");
    history.push("/");
  };

  const Register = (ParentUserData: UserDataItens) => {
    api
      .post("register", ParentUserData)
      .then(() => {
        history.push("/login");
        showToast({
          type: "success",
          message:
            ParentUserData.type === "children"
              ? "Agora seu dependente pode come??ar a aprender sobre educa????o financeira"!
              : "Parab??ns, voc?? criou uma conta!",
        });
      })
      .catch((err) => {
        console.log(err);
        showToast({ type: "error", message: "Erro, ao criar dependente!" });
      });
  };

  const AddWishList = (data: UserDataItens, wish: Wish) => {
    data.wishlist.push(wish);
    console.log(data);
    api
      .patch(`users/${data.id}`, data, {
        headers: {
          Authorization: `Bearer ${UserToken}`,
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
    const send = { date: new Date().toLocaleDateString('pt-br').slice(0,20), move: value };
    data.balance.push(send);
    data.wallet += value;
    api
      .patch(`users/${data.id}`, data, {
        headers: {
          Authorization: `Bearer ${UserToken}`,
        },
      })
      .then((response) => {
        getUserData();
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const SpendBalance = (data: UserDataItens, value: number) => {
    const send = { date: new Date().toLocaleDateString('pt-br').slice(0,20), move: value };
    data.balance.push(send);
    data.wallet += value;
    api
      .patch(`users/${data.id}`, data, {
        headers: {
          Authorization: `Bearer ${UserToken}`,
        },
      })
      .then((response) => {
        getUserData();
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
          Authorization: `Bearer ${UserToken}`,
        },
      })
      .then((reponse) => {
        setUserData(reponse.data);

        console.log("userdata", userData);
        console.log("response", reponse);
      })
      .catch((e) => {
        console.log(e);
        localStorage.clear();
      });
  };

  const AddtoKitty = (wish: Wish, value: number) => {
    const el = userData.wishlist.map((item) => {
      if (item.name === wish.name) {
        return {
          name: wish.name,
          value: wish.value,
          kitty: wish.kitty + value,
        };
      }
      return item;
    });
    const send = userData.wishlist.filter(
      (element) => element.name === wish.name
    );
    console.log("send", send);
    const data = { wishlist: el };
    const id = localStorage.getItem("userId");
    SpendBalance(userData, -value);
    console.log(data);
    api
      .patch(`users/${id}`, data, {
        headers: {
          Authorization: `Bearer ${UserToken}`,
        },
      })
      .then((response) => {
        console.log("response", response);
        getUserData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const GetActivities = (userId: number) => {
    api
      .get(`activities/?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setActivities(response.data);
      });
  };

  const isTokenValid = () => {
    api
      .get(`users/${localStorage.getItem("userId")}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((resp) => {
      })
      .catch((e) => {
        console.log("token expirado");
        Logout();
      });
  };
  const EditProfile = (data: EditProfileData) => {
    api
      .patch(`/users/${userData.id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setUserData(response.data);
        showToast({ type: "success", message: "Perfil editado" });
      });
  };

  const SelectedChild = (id: number) => {
    api
      .get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const data = {
          name: response.data.name,
          email: response.data.email,
          password: response.data.password,
          children: response.data.children,
          parentId: response.data.parentId,
          id: response.data.id,
          balance: [...response.data.balance],
          wishlist: [...response.data.wishlist],
          wallet: response.data.wallet,
          type: "parent",
        };
        console.log(data);
        setUserData(data);
        history.push("/balance");
      });
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
        AddtoKitty,
        activities,
        GetActivities,
        userId,
        isTokenValid,
        typeUser,
        EditProfile,
        SelectedChild,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
