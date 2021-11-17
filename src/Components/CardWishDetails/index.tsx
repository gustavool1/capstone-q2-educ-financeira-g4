import { ModalWish, WishListHeader, WishContent, Porcent } from "./styles";
import { BsFillPencilFill } from "react-icons/bs";
import { useModal } from "../../Providers/Modal";
import { useEffect, useState } from "react";
import { BiSend } from "react-icons/bi";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useUser } from "../../Providers/Users";

export const CardWishDetails = () => {
  const { isWish, setIsWish, wish } = useModal();

  const { AddtoKitty, userData } = useUser();

  const percentage = (wish.kitty / wish.value) * 100;

  const [valuekitty, setValueKitty] = useState(0);

  const send = userData.wishlist.filter(
    (element) => element.name === wish.name
  );

  // useEffect(() => {

  //   }
  // }, [userData])

  return (
    <ModalWish>
      <WishListHeader>
        <h3>{wish.name}</h3>
        <button onClick={() => setIsWish(!isWish)}>x</button>
      </WishListHeader>
      <WishContent>
        <h2>Valor atual: {wish.kitty.toFixed(2).replace(".", ",")}</h2>
        <Porcent>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            className="circle-progress"
            styles={buildStyles({
              textColor: "#000000",
              pathColor: "#FF715B",
              trailColor: "#19b9b9",
            })}
          />
        </Porcent>
        <h4>Meta: {wish.value.toFixed(2).replace(".", ",")}</h4>
        <div>
          <label>Vaquinha</label>
          <input
            type="number"
            placeholder="Adicionar"
            onChange={(e) => setValueKitty(Number(e.target.value))}
          />
          <button onClick={() => AddtoKitty(wish, valuekitty)}>
            <BiSend />
          </button>
        </div>
      </WishContent>
    </ModalWish>
  );
};
