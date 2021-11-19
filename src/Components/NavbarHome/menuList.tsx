import { Link } from "react-router-dom";
import React from "react";
import { MenuListContainer } from "./style";
import { useHistory } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

interface MenuListProps {
  handleClick: () => void;
}
const MenuList = ({ handleClick }: MenuListProps) => {
  const history = useHistory();

  return (
    <MenuListContainer>
      <div className="links">
        <Link onClick={handleClick} to="/contenthome">
          Saiba mais
        </Link>
        <HashLink
          onClick={handleClick}
          to="/#myServices"
          scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "end" })}
        >
          Serviços
        </HashLink>
        <HashLink
          onClick={handleClick}
          to="/#whoWeAre"
          scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "end" })}
        >
          Quem somos
        </HashLink>
      </div>

      <div className="btnContainer">
        <button
          onClick={() => {
            history.push("/registerparents");
            handleClick();
          }}
          className="btnRegister test"
        >
          <Link onClick={handleClick} to="/registerparents">
            Registrar
          </Link>
        </button>

        <button
          className="btnLogin test"
          onClick={() => {
            history.push("/login");
            handleClick();
          }}
        >
          <Link onClick={handleClick} to="/login">
            Login
          </Link>
        </button>
      </div>
    </MenuListContainer>
  );
};

export default MenuList;
