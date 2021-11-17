import React from "react"
import { useContext, useEffect } from "react";
import ListChildren from "../../Components/ListChildren";
import { ActivitiesContext } from "../../Providers/Activities";
import FormCreatingActivity from "../../Components/FormCreatingActivity";
import {Container, EditingContainer } from './style'
import { ModalContext } from "../../Providers/Modal";
import FormEditingActivity from "../../Components/FormEditingActivity";

import ProfileBarParents from "../../Components/ProfileBarParents";
import { useHistory } from "react-router";
import { UserContext } from "../../Providers/Users";

export const DashboardParents = () => {
  const { getYourChildrens, childrenArr } = useContext(ActivitiesContext)
  const { isEditing, isAdding } = useContext(ModalContext) 
  const { userData } = useContext(UserContext)
  const history = useHistory();

  useEffect(()=>{
    if(localStorage.getItem('token')){

      getYourChildrens()
    }
  },[])

 
  return(
    
    <Container>
          {
          isAdding &&
            <EditingContainer>
              <FormCreatingActivity/>
            </EditingContainer>
          }
          {
          isEditing &&
            <EditingContainer>
              <FormEditingActivity/>
            </EditingContainer>
          }

      <ProfileBarParents/>
      {childrenArr.length !==0&&
        <ListChildren children={childrenArr}/>
      }

    </Container>
  )

};
