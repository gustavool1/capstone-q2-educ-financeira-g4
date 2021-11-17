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
import FormEditingProfile from "../../Components/FormEditingProfile";

export const DashboardParents = () => {
  const { getYourChildrens, childrenArr } = useContext(ActivitiesContext)

  const { isTokenValid} = useContext(UserContext)

  const { isEditing, isAdding, isEditingProfile } = useContext(ModalContext) 
  const { userData } = useContext(UserContext)
  const history = useHistory();


  useEffect(()=>{
    if(localStorage.getItem('token')){

      getYourChildrens()
    }
  },[])

  useEffect(() => {
    isTokenValid()
   }, [])
 
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
          {
            isEditingProfile && 
            <EditingContainer>
              <FormEditingProfile/>
            </EditingContainer>
          }
      <ProfileBarParents/>
      {childrenArr.length !==0&&
        <ListChildren children={childrenArr}/>
      }

    </Container>
  )

};
