import React, { useContext } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import {
  Container,
  ModalBalance,
  Button,
  BankStatement,
  Input,
  Chart,
  LeftSide,
  RightSide,
  WishList,
  WishListHeader,
  WishListContent,
} from "./styles";
import { useState, useEffect } from "react";
import { CardWish } from "../../Components/CardWish";
import { CardWishDetails } from "../../Components/CardWishDetails";
import { useModal } from "../../Providers/Modal";
import { useUser } from "../../Providers/Users";
import Demo from "../../Components/Chart";
interface BalanceProp {
  date?: string;
  move?: number;
}

interface Wish {
  name: string;
  value: number;
  kitty: number;
}

export const Balance = () => {
  const [isOpenBalance, setIsOpenBalance] = useState(false);
  const [isOpenWish, setIsOpenWish] = useState(false);

  const {
    userData,
    getUserData,
    ReceivedBalance,
    SpendBalance,
    AddWishList,
    isTokenValid,
  } = useUser();

  const [isParent] = useState<boolean>(
    userData.type === "parent" ? true : false
  );
  const [received, setReceived] = useState(0);
  const [spend, setSpend] = useState(0);
  const [wishName, setWishName] = useState("");
  const [wishPrice, setWishPrice] = useState(0);
  const { isWish } = useModal();

  const HandleClickBalance = () => {
    spend !== 0 && SpendBalance(userData, spend);
    received !== 0 && ReceivedBalance(userData, received);
    setSpend(0);
    setReceived(0);
  };

  const HandleClickWish = () => {
    const wish = { name: wishName, value: wishPrice, kitty: 0 };
    console.log(wish);
    AddWishList(userData, wish);
  };

  // useEffect(() => {
  //   getUserData();
  // }, []);

  useEffect(() => {
    isTokenValid();
  }, []);

  console.log(userData);
  return (
    <Container>
      <LeftSide>
        <h2>Patrimônio Total Acumulado</h2>
        <Chart>
          <Demo />
        </Chart>
        <Button
          className="moves"
          onClick={() => setIsOpenBalance(!isOpenBalance)}
        >
          Movimentações
        </Button>
        {isOpenBalance && (
          <ModalBalance>
            <h2>Balanço Financeiras</h2>
            <BankStatement>
              {userData.balance ? (
                userData.balance.map((item: BalanceProp, index: number) => (
                  <li key={index}>
                    <span>{item.date}</span>
                    <strong className={Number(item.move) < 0? 'red' : 'green'}>
                      {" R$ "}
                      {item.move && item.move.toFixed(2).replace(".", ",")}
                    </strong>
                  </li>
                ))
              ) : (
                <p>"Sem movimentações!"</p>
              )}
            </BankStatement>
            <h2>{`Saldo:   ${userData.wallet
              .toFixed(2)
              .replace(".", ",")}`}</h2>
            {!isParent && <label>Recebido</label>}
            {!isParent && (
              <Input
                placeholder="Recebido"
                onChange={(e) => {
                  setReceived(Number(e.target.value));
                  console.log(e.target.value);
                }}
              />
            )}
            {!isParent && <label className="secondLabel">Pago</label>}
            {!isParent && (
              <Input
                placeholder="Pago"
                onChange={(e) => setSpend(Number(e.target.value) * -1)}
              />
            )}
            {!isParent && (
              <Button onClick={() => HandleClickBalance()}>Enviar</Button>
            )}
            <Button onClick={() => setIsOpenBalance(!isOpenBalance)}>
              Sair
            </Button>
          </ModalBalance>
        )}
      </LeftSide>
      <RightSide>
        <WishList>
          <WishListHeader>
            {isOpenWish ? (
              <h3>Criar novo desejo</h3>
            ) : (
              <h3>Lista de desejos</h3>
            )}
          </WishListHeader>
          {isOpenWish ? (
            <WishListContent>
              <label>Nome do item</label>
              <Input
                placeholder="nome"
                onChange={(e) => setWishName(e.target.value)}
              />
              <label>Valor do item</label>
              <Input
                placeholder="valor"
                onChange={(e) => setWishPrice(Number(e.target.value))}
              />
              <Button onClick={() => HandleClickWish()}>Enviar</Button>
            </WishListContent>
          ) : (
            <WishListContent>
              {userData.wishlist?.map((item: Wish, index: number) => (
                <CardWish id="wishlist" key={index} item={item} />
              ))}
            </WishListContent>
          )}
          {isWish && <CardWishDetails />}
        </WishList>
        {!isParent && (
          <Button onClick={() => setIsOpenWish(!isOpenWish)}>
            {isOpenWish ? "Fechar criar desejo" : "Criar desejo"}
          </Button>
        )}
      </RightSide>
    </Container>
  );
};
