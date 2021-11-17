import { createContext, ReactNode, useContext, useState } from "react";
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
}

interface Children {
  email: string;
  name: string;
  wallet: number;
  type: string;
  wishlist?: [];
  balance?: [];
  id: number;
  parentId: number;
}

export const ModalContext = createContext<ModalProviderData>(
  {} as ModalProviderData
);

export const ModalProvider = ({ children }: ModalProviderProps) => {
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
    const send = userData.wishlist.filter(
      (element) => element.name === wish.name
    );
    setWish(item);
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
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
