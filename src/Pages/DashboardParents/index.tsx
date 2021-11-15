import { useContext, useEffect } from "react";
import ListChildren from "../../Components/ListChildren";
import { ActivitiesContext } from "../../Providers/Activities";
import ProfileBarParents from "../../Components/ProfileBarParents";

export const DashboardParents = () => {
  const { getYourChildrens, childrenArr } = useContext(ActivitiesContext)
  useEffect(()=>{
    getYourChildrens()
  },[])

  return(
    <div>
      <ProfileBarParents/>
      aaa
      {childrenArr.length &&
        <ListChildren children={childrenArr}/>
      }
    </div>
  )

};
