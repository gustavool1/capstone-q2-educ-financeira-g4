import {
  MenuDesktop,
  MenuMobile,
  MobileMenu,
  NavContainer,
  NavSubContainer,
} from "./style";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuList from "./menuList";
import { useContext, useState } from "react";
import { UserContext } from "../../Providers/Users";
import MenuParentsLogin from "./menuParentsLogin";
import MenuChildrensLogin from "./menuChildrensLogin";
import icon from "../../assets/images/iconProfile.jpg";
import { motion } from "framer-motion";
import { ActivitiesContext } from "../../Providers/Activities";

const NavbarHome = () => {
  const [showMenu, setshowMenu] = useState<boolean>(false);
  const { UserToken, userData, typeUser } = useContext(UserContext);
  const { amountToPay } = useContext(ActivitiesContext);

  const handleClick = () => {
    setshowMenu(false);
  };
  return (
    <NavContainer>
      <div className={!!UserToken ? "isLog" : "logOff"}>
        <NavSubContainer>
          <h1>FinanceKids</h1>
          <MenuDesktop>
            {!!UserToken ? (
              typeUser === "parent" ? (
                <MenuParentsLogin handleClick={handleClick} />
              ) : typeUser === "children" ? (
                <MenuChildrensLogin handleClick={handleClick} />
              ) : (
                <MenuList handleClick={handleClick} />
              )
            ) : (
              <MenuList handleClick={handleClick} />
            )}
          </MenuDesktop>

          {!!UserToken && (
            <MobileMenu>
              {typeUser === "children" ? (
                <div className="userLog">
                  <img src={icon} alt="profile face" />

                  <span>
                    <h3>{userData.name}</h3>
                    <p>Saldo: R$ {Number(userData.wallet).toFixed(2)} </p>
                  </span>
                </div>
              ) : (
                <div className="userLog">
                  <img src={icon} alt="profile face" />

                  <span>
                    <h3>{userData.name}</h3>
                    <p>A pagar: R$ {Number(amountToPay).toFixed(2)} </p>
                  </span>
                </div>
              )}
            </MobileMenu>
          )}

          {showMenu && (
            <MenuMobile>
              <motion.div
                className={!!UserToken ? "menuMobLogin" : "menuMobOff"}
                initial={{ opacity: 0, x: -300 }}
                transition={{ duration: 1 }}
                animate={{ opacity: 1, x: 0 }}
              >
                {!UserToken && <MenuList handleClick={handleClick} />}
                {UserToken && typeUser === "parent" && (
                  <MenuParentsLogin handleClick={handleClick} />
                )}
                {UserToken && typeUser === "children" && (
                  <MenuChildrensLogin handleClick={handleClick} />
                )}
              </motion.div>
            </MenuMobile>
          )}
        </NavSubContainer>

        <button className="btnMenu" onClick={() => setshowMenu(!showMenu)}>
          <GiHamburgerMenu />
        </button>
      </div>
    </NavContainer>
  );
};

export default NavbarHome;
