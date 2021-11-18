import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Providers/Users";
import { MenuListContainer } from "./style";

const MenuChildrensLogin = ({ setshowMenu }: any) => {
  const { Logout, userData, typeUser } = useContext(UserContext);
  return (
    <MenuListContainer>
      <div className={typeUser === "children" ? "links children" : "links"}>
        <Link onClick={() => setshowMenu(false)} to="/dashboardkids">
          Dashboard
        </Link>

        <Link onClick={() => setshowMenu(false)} to="/balance">
          Balanço Financeiro
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
            setshowMenu(false);
          }}
        >
          Logout
        </button>
      </div>
    </MenuListContainer>
  );
};

export default MenuChildrensLogin;
