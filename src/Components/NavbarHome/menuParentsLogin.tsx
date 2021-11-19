import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Providers/Users";
import { MenuListContainer } from "./style";

interface MenuListProps {
  handleClick: () => void;
}

const MenuParentsLogin = ({ handleClick }: MenuListProps) => {
  const { Logout, typeUser } = useContext(UserContext);
  return (
    <MenuListContainer>
      <div className={typeUser === "parent" ? "links parents" : "links"}>
        <Link onClick={handleClick} to="/dashboardparents">
          Dashboard
        </Link>

        <Link onClick={handleClick} to="/registerkids">
          Cadastrar Dependente
        </Link>

        <Link onClick={() => handleClick()} to="/content">
          Conteúdo
        </Link>
      </div>

      <div
        className={
          typeUser === "parent" ? "btnContainer parents" : "btnContainer"
        }
      >
        <button
          className="btnLogin"
          onClick={() => {
            Logout();
            handleClick();
          }}
        >
          Logout
        </button>
      </div>
    </MenuListContainer>
  );
};

export default MenuParentsLogin;
