
import { ReactNode } from "react";
import { ActivitiesProvider } from "./Activities";
import { ChildrenProvider } from "./Children";
import { ModalProvider } from "./Modal";
import { UserProvider } from "./Users";

interface UserProps {
  children: ReactNode;
}

export const Provider = ({ children }: UserProps) => {
  return(
    <UserProvider>
      <ActivitiesProvider>
        <ChildrenProvider>
          <ModalProvider>
              {children}
          </ModalProvider>
        </ChildrenProvider>
      </ActivitiesProvider>
    </UserProvider>
  )
};
