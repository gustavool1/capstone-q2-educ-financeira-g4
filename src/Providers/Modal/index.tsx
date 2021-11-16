import { createContext, ReactNode, useContext, useState } from "react";
import { ActivitiesContext } from "../Activities";
import { ChildrenContext } from "../Children";

interface ModalProviderProps {
  children: ReactNode;
}

interface Wish {
  name: string;
  value: number;
}

interface ModalProviderData {
  handleEditing: (activitieId: number) => void;
  isEditing: boolean;

  handleAdding: (childrenId: number) => void;
  isAdding: boolean;

  HandleClickDetails: (item: Wish) => void;
  isWish: boolean;
  setIsWish: (isWish: boolean) => void;

  wish: Wish
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
  const [ wish, setWish ] = useState <Wish>({} as Wish)
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isWish, setIsWish] = useState(false);

  const handleEditing = (activitieId: number) => {
    changingActualIdActivitie(activitieId);
    setIsEditing(!isEditing);
  };

  const handleAdding = (childrenId: number) => {
    changingActualChildren(childrenId);
    setIsAdding(!isAdding);
  };

  const HandleClickDetails = (item: Wish) => {

    setIsWish(!isWish);
    setWish(item)
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
        wish
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
