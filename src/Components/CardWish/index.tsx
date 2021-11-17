import { HiInformationCircle } from "react-icons/hi";
import { Li } from "./styles";
import { useModal } from "../../Providers/Modal";

interface WishProps {
  item: { name: string; value: number; kitty: number };
  id?: string;
}

export const CardWish = ({ item }: WishProps) => {
  const { HandleClickDetails } = useModal();

  return (
    <Li>
      <button
        onClick={() => {
          HandleClickDetails(item);
        }}
      >
        <HiInformationCircle />
      </button>
      <h3>{item.name}aa</h3>
      <h4>R${item.value.toFixed(2).replace(".", ",")}</h4>
    </Li>
  );
};
