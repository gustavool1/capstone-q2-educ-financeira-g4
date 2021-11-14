import { createContext, ReactNode } from "react";
import api from "../../Services/api";

interface ChildrenUser {
  email: string;
  name: string;
  wallet: number;
  type: string;
  wishlist?: [];
  balance?: [];
  id: number;
  parentId: number;
}

interface ChildrenProviderData {
  updateWallet: (childrenUser: ChildrenUser, amount: number) => void;
}

interface ChildrenProviderProps {
  children: ReactNode;
}

export const ChildrenContext = createContext<ChildrenProviderData>(
  {} as ChildrenProviderData
);

export const ChildrenProvider = ({ children }: ChildrenProviderProps) => {
  const updateWallet = (childrenUser: ChildrenUser, amount: number) => {
    const { id } = childrenUser;
    childrenUser.wallet += amount;
    api.patch(`users/${id}`, childrenUser, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  };

  return (
    <ChildrenContext.Provider value={{ updateWallet }}>
      {children}
    </ChildrenContext.Provider>
  );
};
