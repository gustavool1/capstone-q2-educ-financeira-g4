
import { ReactNode } from "react";
import { ActivitiesProvider } from "./Activities";
import { ChildrenProvider } from "./Children";
import { ModalProvider } from "./Modal";
import { ToastProvider } from "./Toasts";
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
            <ToastProvider>
              {children}
            </ToastProvider>
          </ModalProvider>
        </ChildrenProvider>
      </ActivitiesProvider>
    </UserProvider>
  )
};
