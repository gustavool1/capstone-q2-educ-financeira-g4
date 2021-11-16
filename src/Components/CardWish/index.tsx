import { HiInformationCircle } from "react-icons/hi";
import { Li } from "./styles";
import { useModal } from "../../Providers/Modal";
import { CardWishDetails } from "../CardWishDetails";

interface WishProps {
  item: { name: string; value: number };
  id?: string;
}

export const CardWish = ({ item }: WishProps) => {
  const { isWish, HandleClickDetails } = useModal();

  return (
    <Li>
      <button
        onClick={() => {
          HandleClickDetails(item);
        }}
      >
        <HiInformationCircle />
      </button>
      <h3>{item.name}</h3>
      <h4>R${item.value.toFixed(2).replace(".", ",")}</h4>
      {isWish && <CardWishDetails item={item} />}
    </Li>
  );
};
