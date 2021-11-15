import { HiInformationCircle } from "react-icons/hi";
import { Li } from "./styles";

interface WishProps {
  item: { name: string; value: number };
}

export const CardWish = ({ item }: WishProps) => {
  return (
    <Li>
      <HiInformationCircle />
      <h3>{item.name}</h3>
      <h4>R${item.value.toFixed(2).replace(".", ",")}</h4>
    </Li>
  );
};
