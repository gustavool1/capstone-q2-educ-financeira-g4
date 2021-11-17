import {
  MenuDesktop,
  MenuMobile,
  MobileMenu,
  NavContainer,
  NavSubContainer,
} from "./style";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuList from "./menuList";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Providers/Users";
import MenuParentsLogin from "./menuParentsLogin";
import MenuChildrensLogin from "./menuChildrensLogin";
import icon from "../../assets/images/iconProfile.jpg";
import { motion } from "framer-motion";
import { ActivitiesContext } from "../../Providers/Activities";
import { ToastContext } from "../../Providers/Toasts";

const NavbarHome = () => {
  const [showMenu, setshowMenu] = useState<boolean>(false);
  const { UserToken, userData } = useContext(UserContext);
  const { amountToPay } = useContext(ActivitiesContext)
  
  return (
    <NavContainer>
      <div className={!!UserToken ? "isLog" : "logOff"}>
        <NavSubContainer>
          <h1>FinanceKids</h1>

          <MenuDesktop>
            {!!UserToken ? (
              userData.type === "parent" ? (
                <MenuParentsLogin />
              ) : (
                <MenuChildrensLogin />
              )
            ) : (
              <MenuList />
            )}
          </MenuDesktop>

          {!!UserToken && <MobileMenu>
            {userData.type === "children" ? (
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
          </MobileMenu>}

          {showMenu && (
            <MenuMobile
              
            >
              <motion.div className={!!UserToken ? "menuMobLogin" : "menuMobOff"}
              initial={{ opacity: 0, x: -300 }}
              transition={{ duration: 1 }}
              animate={{ opacity: 1, x: 0 }}>
                {!UserToken && <MenuList />}
                {UserToken && userData.type === "parent" && (
                  <MenuParentsLogin />
                )}
                {UserToken && userData.type === "children" && (
                  <MenuChildrensLogin />
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
