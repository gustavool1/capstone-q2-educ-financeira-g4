
import { ReactNode } from "react";
import { UserProvider } from "./Users";

interface UserProps {
  children: ReactNode;
}

export const Provider = ({ children }: UserProps) => {
  return <UserProvider>{children}</UserProvider>;
};
