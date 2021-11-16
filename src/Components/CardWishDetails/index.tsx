import { ModalWish, WishListHeader, WishContent } from "./styles";
import { BsFillPencilFill } from "react-icons/bs";
import { useModal } from "../../Providers/Modal";
import { useState } from "react";
import { BiSend } from "react-icons/bi";

interface Wish {
  item: { name: string; value: number };
}

export const CardWishDetails = ({ item }: Wish) => {
  const { isWish, setIsWish } = useModal();

  const [kitty, setKitty] = useState(0);
  return (
    <ModalWish>
      <WishListHeader>
        <h3>{item.name}</h3>
        <button onClick={() => setIsWish(!isWish)}>x</button>
      </WishListHeader>
      <WishContent>
        <h3>
          Quantia atual <BsFillPencilFill />
        </h3>
        <h4>Meta: {item.value.toFixed(2).replace(".", ",")}</h4>
        <div>
          <label>Vaquinha</label>
          <input
            type="number"
            placeholder="Adicionar"
            onChange={(e) => setKitty(Number(e.target.value))}
          />
          <button>
            <BiSend />
          </button>
        </div>
      </WishContent>
    </ModalWish>
  );
};
