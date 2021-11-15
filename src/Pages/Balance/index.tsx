import React from "react";
import { HiInformationCircle } from "react-icons/hi";
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
  ModalWish,
} from "./styles";
import { useState } from "react";

export const Balance = () => {
  const [isOpenBalance, setIsOpenBalance] = useState(false);
  const [isOpenWish, setIsOpenWish] = useState(false);

  const [moves, setMoves] = useState("");

  const HandleClick = () => {};

  return (
    <Container>
      <LeftSide>
        <h2>Patrimônio Total Acumulado</h2>
        <Chart></Chart>
        <Button onClick={() => setIsOpenBalance(!isOpenBalance)}>
          Movimentações
        </Button>
        {isOpenBalance && (
          <ModalBalance>
            <h2>Balanço Financeiras</h2>
            <BankStatement></BankStatement>
            <h2>Total </h2>
            <Input
              placeholder="entrada"
              onChange={(e) => setMoves(e.target.value)}
            />
            <Input placeholder="saida" />
            <Button onClick={() => HandleClick()}>Enviar</Button>
            <Button onClick={() => setIsOpenBalance(!isOpenBalance)}>
              Sair
            </Button>
          </ModalBalance>
        )}
      </LeftSide>
      <RightSide>
        <WishList>
          <WishListHeader>
            <h3>Lista de desejos</h3>
          </WishListHeader>
          <ul>
            <li>
              <HiInformationCircle />
              <h3>Skate</h3>
              <h4>R$200,00</h4>
            </li>
            <li>
              <HiInformationCircle />
              <h3>playstation 5</h3>
              <h4>R$5.000,00</h4>
            </li>
          </ul>
        </WishList>
        {isOpenWish && (
          <ModalWish>
            <WishListHeader>
              <h3>Criar novo desejo</h3>
            </WishListHeader>
            <Input
              placeholder="nome"
              onChange={(e) => setMoves(e.target.value)}
            />
            <Input placeholder="valor" />
            <Button onClick={() => HandleClick()}>Enviar</Button>
          </ModalWish>
        )}
        <Button onClick={() => setIsOpenWish(!isOpenWish)}>
          {isOpenWish ? "Fechar criar desejo" : "Criar desejo"}
        </Button>
      </RightSide>
    </Container>
  );
};
