import React from "react"
import { useContext, useEffect } from "react";
import ListChildren from "../../Components/ListChildren";
import { ActivitiesContext } from "../../Providers/Activities";
import FormCreatingActivity from "../../Components/FormCreatingActivity";
import {Container, EditingContainer } from './style'
import { ModalContext } from "../../Providers/Modal";
import FormEditingActivity from "../../Components/FormEditingActivity";

import ProfileBarParents from "../../Components/ProfileBarParents";

export const DashboardParents = () => {
  const { getYourChildrens, childrenArr } = useContext(ActivitiesContext)
  const { isEditing, isAdding } = useContext(ModalContext) 

  useEffect(()=>{
    getYourChildrens()
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
      {childrenArr.length &&
        <ListChildren children={childrenArr}/>
      }

    </Container>
  )

};
