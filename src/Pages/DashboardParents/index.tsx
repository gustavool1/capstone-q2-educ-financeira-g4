import { useContext, useEffect } from "react";
import ListChildren from "../../Components/ListChildren";
import { ActivitiesContext } from "../../Providers/Activities";
import Modal from '../../Components/Modal'
import FormCreatingActivity from "../../Components/FormCreatingActivity";
export const DashboardParents = () => {
  const { getYourChildrens, childrenArr } = useContext(ActivitiesContext)
  useEffect(()=>{
    getYourChildrens()
  },[])

  return(
    
    <div>
       <Modal component={FormCreatingActivity}/> 
      {childrenArr.length &&
        <ListChildren children={childrenArr}/>
      }
    </div>
  )
};
