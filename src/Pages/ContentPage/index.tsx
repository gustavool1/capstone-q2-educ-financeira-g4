import LottieMaker from "../../Components/LottieMaker";
import { Container, Nav, NavButton } from "./style";
import SpaceShip from "../../assets/images/foguete.gif";
import { useState } from "react";

const ContentPage = () => {
  const [navegationIsOpen, setNavegationIsOpen] = useState(false);
  return (
    <>
      <Container background="#9B5DE5" color="#fff">
        <h2 className="first" id="ofertaEprocura">
          A lei da oferta e da procura !
        </h2>
        <div className="content">
          <div className="textContent">
            <p>
              Todos os produtos que existem estão sujeitos a lei da oferta e da
              procura mas afinal o que é isso ?
            </p>
            <p>
              Tudo que está no mercado tem a oferta (quantidade de produtos
              disponíveis para vender) e a procura (pessoas querendo comprar
              este produto) e a lei do mercado estabiliza a procura e a oferta.
            </p>
            <p>
              Não se preocupe se não entender isso de primeira, você deve
              entender que produtos que quase ninguém quer e existem muitos para
              vender serão baratos e que produtos com muita procura e pouca
              oferta serão caros
            </p>
            <p>Agora você sabe como a lei da oferta e da procura funciona !!</p>
          </div>
          <LottieMaker
            lottieImage="https://assets10.lottiefiles.com/packages/lf20_s5aOgS.json"
            width={400}
            height={400}
            playerAreVisible={false}
          />
        </div>
      </Container>

      <Container background="#302F4D" color="#ffffff" id="inflacao">
        <h2 className="title"> O que é a inflação ?</h2>
        <div className="content">
          <div className="textContent">
            <h3>Vamos entender o que é a inflação</h3>
            <p>
              A inflação acontece quando tudo que você pode comprar aumenta o
              preço, se só o preço de um produto aumenta isso não é inflação !
            </p>
            <p>
              Se a inflação aumenta 10% o brinquedo que você queria que custava
              100 reais agora custa 110 reais
            </p>
            <p>
              Se a inflação aumenta 5% seu sanduíche favorito que custava 20
              reais agora custa 21 reais
            </p>
          </div>
          <LottieMaker
            lottieImage="https://assets9.lottiefiles.com/packages/lf20_ys2X9P.json"
            width={400}
            height={400}
            playerAreVisible={false}
          />
        </div>
      </Container>

      <Container background="#00BBF9">
        <div className="content">
          <LottieMaker
            lottieImage="https://assets4.lottiefiles.com/packages/lf20_SyUX5x.json"
            width={400}
            height={400}
            playerAreVisible={false}
          />
          <div className="textContent">
            <h3>
              Quando o país está com a economia ruim, porque não imprimir mais
              dinheiro?
            </h3>

            <p>Quando se imprime mais dinheiro a inflação sobe</p>

            <p>
              Por exemplo no governo de José Sarney (1985-1990) para melhorar a
              crise foi impresso mais dinheiro e a inflação chegou a 1972,91%
            </p>

            <p>
              Com 1972,91% de inflação o brinquedo que você queria que antes
              custava 100 reais depois de imprimir o dinheiro custa 2072,71
              reais
            </p>
          </div>
        </div>
      </Container>
      <Container background="#8C218E" color="#ffffff" id="juros">
        <h2>O poder dos Juros !</h2>
        <div className="content">
          <div className="textContent">
            <h3> O que são juros ?</h3>
            <p>
              Nos nossos investimentos nós “empretsamos ” nosso dinheiro para um
              banco ou empresa e eles nos devolvem o que emprestamos e um pouco
              a mais.
            </p>
            <p>
              Esse pouco a mais é chamado juros e são combinados entre quem
              empresta e quem recebe o dinheiro.
            </p>

            <p>Vamos conhecer o poder dos Juros!!!</p>
          </div>
          <LottieMaker
            lottieImage="https://assets8.lottiefiles.com/packages/lf20_R5I6iR.json"
            width={400}
            height={400}
            playerAreVisible={false}
          />
        </div>
      </Container>
      <Container background="#FEE440">
        <h2>Como Funcionam os Juros</h2>

        <div className="content">
          <LottieMaker
            lottieImage="https://assets3.lottiefiles.com/packages/lf20_de909vf3.json"
            width={400}
            height={400}
            playerAreVisible={false}
          />
          <div className="textContent">
            <p>
              Geralmente os juros são dados em %, então, supondo que você
              emprestou 1000 reais pro banco com 15% de juros. isso quer dizer
              que você vai receber seus 1000 reais e mais 150 reais depois de um
              mês .
            </p>
            <p>1000 * 1,15 = R$ 1150</p>
          </div>
        </div>
      </Container>
      <Container background="#00F5D4">
        <h3>E se eu deixar por um ano? </h3>

        <div className="content">
          <div className="textContainer">
            <p>
              Vamos imaginar que você emprestou os mesmos 1000 reais com 15% de
              juros para o banco mas dessa vez por um ano
            </p>

            <p>Depois de 12 meses o banco te pagará 5350,20 reais, !</p>

            <p>
              Isso acontece por que no segundo mês além dos R$ 1000 você terá
              emprestado os 150 reais também.
            </p>

            <p>É isso que acontece no Juros Composto !!</p>
          </div>
          <LottieMaker
            lottieImage="https://assets4.lottiefiles.com/private_files/lf30_aXRkcv.json"
            width={400}
            height={400}
            playerAreVisible={false}
          />
        </div>
      </Container>
      {!navegationIsOpen && (
        <NavButton onClick={() => setNavegationIsOpen(true)}>
          <img src={SpaceShip} alt="SpaceShip" />
        </NavButton>
      )}

      {navegationIsOpen && (
        <Nav className="NAVBAR">
          <button className="exit" onClick={() => setNavegationIsOpen(false)}>
            <img
              alt="exit"
              src="https://img.icons8.com/color/48/000000/delete-sign--v2.png"
            />
          </button>

          <a href="#ofertaEprocura" onClick={() => setNavegationIsOpen(false)}>
            Lei da oferta o procura
          </a>

          <a href="#inflacao" onClick={() => setNavegationIsOpen(false)}>
            Inflação
          </a>

          <a href="#juros" onClick={() => setNavegationIsOpen(false)}>
            Juros
          </a>
        </Nav>
      )}
    </>
  );
};
export default ContentPage;
