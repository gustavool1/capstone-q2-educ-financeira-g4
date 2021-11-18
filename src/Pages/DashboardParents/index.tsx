import React from "react";
import { useContext, useEffect } from "react";
import ListChildren from "../../Components/ListChildren";
import { ActivitiesContext } from "../../Providers/Activities";
import FormCreatingActivity from "../../Components/FormCreatingActivity";
import { Container, EditingContainer } from "./style";
import { ModalContext } from "../../Providers/Modal";
import FormEditingActivity from "../../Components/FormEditingActivity";

import ProfileBarParents from "../../Components/ProfileBarParents";
import { UserContext } from "../../Providers/Users";
import FormEditingProfile from "../../Components/FormEditingProfile";
import { BiHappyBeaming } from "react-icons/bi";
import { useHistory } from "react-router-dom";

export const DashboardParents = () => {
  const { getYourChildrens, childrenArr } = useContext(ActivitiesContext);

  const { isTokenValid, userData } = useContext(UserContext);

  const { isEditing, isAdding, isEditingProfile } = useContext(ModalContext);

  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getYourChildrens();
    }
  }, []);

  useEffect(() => {
    isTokenValid();
  }, []);

  return (
    <Container>
      {isAdding && (
        <EditingContainer>
          <FormCreatingActivity />
        </EditingContainer>
      )}
      {isEditing && (
        <EditingContainer>
          <FormEditingActivity />
        </EditingContainer>
      )}
      {isEditingProfile && (
        <EditingContainer>
          <FormEditingProfile />
        </EditingContainer>
      )}
      <ProfileBarParents />
      {childrenArr.length < 1 ? (
        <div className="warnning">
          <h1>Você ainda não tem dependentes cadastrados, </h1>
          <p>cadastre-os e acompanhe o desenvlvimento deles.</p>
        </div>
      ) : (
        <ListChildren children={childrenArr} />
      )}
    </Container>
  );
};
