
import { ReactNode } from "react";
import { ActivitiesProvider } from "./Activities";
import { ChildrenProvider } from "./Children";
import { UserProvider } from "./Users";

interface UserProps {
  children: ReactNode;
}

export const Provider = ({ children }: UserProps) => {
  return(
    <UserProvider>
      <ActivitiesProvider>
        <ChildrenProvider>
          {children}
        </ChildrenProvider>
      </ActivitiesProvider>
    </UserProvider>
  )
};
