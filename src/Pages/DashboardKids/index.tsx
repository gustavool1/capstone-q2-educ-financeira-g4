import { useContext, useEffect } from "react";
import ProfileBarChildren from "../../Components/ProfileBarChildren";
import { UserContext } from "../../Providers/Users";

export const DashboardKids = () => {

  const { getUserData, userData } = useContext(UserContext)

  useEffect(() => {
    getUserData()
    console.log(userData)
  }, [])

  return (
    <>
      <ProfileBarChildren/>
    </>);
};
