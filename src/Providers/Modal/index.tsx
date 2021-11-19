import { createContext, ReactNode, useContext, useState } from "react";
import { showToast } from "../../Components/Toast/style";
import api from "../../Services/api";
import { ActivitiesContext } from "../Activities";
import { ChildrenContext } from "../Children";
import { useUser } from "../Users";

interface ModalProviderProps {
  children: ReactNode;
}

interface Wish {
  name: string;
  value: number;
  kitty: number;
}

interface ModalProviderData {
  handleEditing: (activitieId: number) => void;
  isEditing: boolean;

  handleAdding: (childrenId: number) => void;
  isAdding: boolean;

  HandleClickDetails: (item: Wish) => void;
  isWish: boolean;
  setIsWish: (isWish: boolean) => void;
  wish: Wish;

  handleEditingProfile: () => void;
  isEditingProfile: boolean;

  AddtoKitty: (wish: Wish, value: number) => void;
}



export const ModalContext = createContext<ModalProviderData>(
  {} as ModalProviderData
);

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const { SpendBalance } = useUser();
  const { changingActualChildren } = useContext(ChildrenContext);
  const { changingActualIdActivitie } = useContext(ActivitiesContext);
  const [wish, setWish] = useState<Wish>({} as Wish);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isWish, setIsWish] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const handleEditing = (activitieId: number) => {
    changingActualIdActivitie(activitieId);
    setIsEditing(!isEditing);
  };
  const { userData } = useUser();

  const handleEditingProfile = () => {
    setIsEditingProfile(!isEditingProfile);
  };

  const handleAdding = (childrenId: number) => {
    changingActualChildren(childrenId);
    setIsAdding(!isAdding);
  };

  const HandleClickDetails = (item: Wish) => {
    setIsWish(!isWish);
    setWish(item);
  };

  const AddtoKitty = (wish: Wish, value: number) => {
    if (value + wish.kitty > wish.value) {
      showToast({ type: "warn", message: "Passou de 100%" });
      return;
    }
    if (value + wish.kitty === wish.value) {
      showToast({ type: "sucess", message: "Parabéns, chegou a 100%" });
    }
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
    const data = { wishlist: el };
    const id = localStorage.getItem("userId");
    SpendBalance(userData, -value);
    console.log(data);

    api
      .patch(`users/${id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log("response", response);
        const newWish = response.data.wishlist.filter(
          (wishes: any) => wishes.name === wish.name
        );
        setWish(newWish[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ModalContext.Provider
      value={{
        handleEditing,
        isEditing,
        handleAdding,
        isAdding,
        HandleClickDetails,
        setIsWish,
        isWish,
        wish,
        handleEditingProfile,
        isEditingProfile,
        AddtoKitty,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
