import { ModalWish, WishListHeader, WishContent, Porcent } from "./styles";
// import { BsFillPencilFill } from "react-icons/bs";
import { useModal } from "../../Providers/Modal";
import { useState } from "react";
import { BiSend } from "react-icons/bi";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useUser } from "../../Providers/Users";

interface Wish {
  name: string;
  value: number;
  kitty: number;
}

export const CardWishDetails = () => {
  const { isWish, setIsWish, wish, AddtoKitty } = useModal();

  const { userData } = useUser();

  const [isParent] = useState<boolean>(
    userData.type === "parent" ? true : false
  );

  const percentage = (wish.kitty / wish.value) * 100;

  const [valuekitty, setValueKitty] = useState(0);

  const handleClick = () => {
    AddtoKitty(wish, valuekitty);
  };
  return (
    <ModalWish
      initial={{ scale: 0, opacity:0 }}
        animate={{ scale: 1,opacity:1 }}
        transition={{
        type: "spring",
        stiffness: 80,
        duration:2
        }}
    >
      <WishListHeader>
        <h3>{wish.name}</h3>
        <button onClick={() => setIsWish(!isWish)}>x</button>
      </WishListHeader>
      <WishContent>
        <h2>Valor atual: {wish.kitty?.toFixed(2).replace(".", ",")}</h2>
        <Porcent>
          <CircularProgressbar
            value={percentage}
            className="circle-progress"
            styles={buildStyles({
              textColor: "#000000",
              pathColor: "#FF715B",
              trailColor: "#19b9b9",
            })}
          />
        </Porcent>
        <h4>Meta: {wish.value?.toFixed(2).replace(".", ",")}</h4>
        {!isParent && (
          <div>
            <label>Vaquinha</label>
            <input
              type="number"
              placeholder="Adicionar"
              onChange={(e) => setValueKitty(Number(e.target.value))}
            />
            <button onClick={handleClick}>
              <BiSend />
            </button>
          </div>
        )}
      </WishContent>
    </ModalWish>
  );
};
