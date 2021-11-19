import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Providers/Users";
import { MenuListContainer } from "./style";
interface MenuListProps {
  handleClick: () => void;
}
const MenuChildrensLogin = ({ handleClick }: MenuListProps) => {
  const { Logout, typeUser } = useContext(UserContext);
  return (
    <MenuListContainer>
      <div className={typeUser === "children" ? "links children" : "links"}>
        <Link onClick={() => handleClick()} to="/dashboardkids">
          Dashboard
        </Link>

        <Link onClick={() => handleClick()} to="/balance">
          Balanço Financeiro
        </Link>

        <Link onClick={() => handleClick()} to="/content">
          Conteúdo
        </Link>
      </div>

      <div
        className={
          typeUser === "children" ? "btnContainer btnChildren" : "btnContainer"
        }
      >
        <button
          className="btnLogin"
          onClick={() => {
            handleClick();
            Logout();
          }}
        >
          Logout
        </button>
      </div>
    </MenuListContainer>
  );
};

export default MenuChildrensLogin;
