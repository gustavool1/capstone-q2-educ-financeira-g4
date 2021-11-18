import React from "react";
import {
  Container,
  IntroduceContainer,
  SpendsContainer,
  CharityContainer,
  WaistContainer,
  EntrepreneurContainer,
} from "./style";
import LottieMaker from "../../Components/LottieMaker/";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export const ContentHome = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("#div1", {
      x: -700,
      opacity: 0,
    });
    gsap.to("#div1", {
      x: 0,
      opacity: 1,
      duration: 3,
      scrollTrigger: {
        trigger: "#div1",
        toggleActions: "restart play",
      },
    });

    gsap.from("#div1", {
      x: 700,
      opacity: 0,
    });
    gsap.to("#div1-img", {
      x: 0,
      opacity: 1,
      duration: 3,
      scrollTrigger: {
        trigger: "#div1",
        toggleActions: "restart play",
      },
    });

    gsap.from("#div2", {
      x: 700,
      opacity: 0,
    });
    gsap.to("#div2", {
      x: 0,
      opacity: 1,
      duration: 3,
      scrollTrigger: {
        trigger: "#div2",
        toggleActions: "restart play",
      },
    });

    gsap.from("#div2-img", {
      x: -700,
      opacity: 0,
    });
    gsap.to("#div2-img", {
      x: 0,
      opacity: 1,
      duration: 3,
      scrollTrigger: {
        trigger: "#div2",
        toggleActions: "restart play ",
      },
    });

    gsap.from("#div3", {
      x: -700,
      opacity: 0,
    });
    gsap.to("#div3", {
      x: 0,
      opacity: 1,
      duration: 3,
      scrollTrigger: {
        trigger: "#div3",
        toggleActions: "restart play ",
      },
    });

    gsap.from("#div3-img", {
      x: 700,
      opacity: 0,
    });
    gsap.to("#div3-img", {
      x: 0,
      opacity: 1,
      duration: 3,
      scrollTrigger: {
        trigger: "#div3",
        toggleActions: "restart play ",
      },
    });

    gsap.from("#div4", {
      scrollTrigger: "#div4",
      x: 700,
      opacity: 0,
    });
    gsap.to("#div4", {
      x: 0,
      opacity: 1,
      duration: 3,
      scrollTrigger: {
        trigger: "#div4",
        toggleActions: "restart play ",
      },
    });

    gsap.from("#div4-img", {
      x: -700,
      opacity: 0,
    });
    gsap.to("#div4-img", {
      x: 0,
      opacity: 1,
      duration: 3,
      scrollTrigger: {
        trigger: "#div4",
        toggleActions: "restart play play play",
      },
    });

    gsap.from("#div5", {
      x: -500,
      opacity: 0,
    });
    gsap.to("#div5", {
      x: 0,
      opacity: 1,
      duration: 3,
      scrollTrigger: {
        trigger: "#div5",
        toggleActions: "restart play play play",
      },
    });
    gsap.from("#div5-img", {
      x: 500,
      opacity: 0,
    });
    gsap.to("#div5-img", {
      x: 0,
      opacity: 1,
      duration: 3,
      scrollTrigger: {
        trigger: "#div5",
        toggleActions: "restart play play play",
      },
    });
  }, []);
  return (
    <Container>
      <IntroduceContainer>
        <h1 id="title">Como introduzir seus filhos a educação financeira</h1>
        <div className="text-introduce" id="div1">
          <h2>Dê a ele um porquinho ou algo similar</h2>
          <p>
            Dê um cofrinho a ele ou ensine e apoie na utilização de ferramentas
            que se assemelhe a um.No nosso aplicativo você poderá criar tarefas
            e recompensa-lo pela feitura das mesmasEle também poderá criar uma
            lista de desejos e acompanhar o próprio dinheiro para tentar chegar
            ao valor dos itens da lista.Aos pouquinhos chegando ao valor
            desejado e podendo então comprar o item, sentindo na pele o valor do
            dinheiro e ainda realizando tarefas que podem ser desde auxiliar em
            casa como manter os estudos em dia.
          </p>
        </div>
        <div className="lottie-container" id="div1-img">
          <LottieMaker
            lottieImage={
              "https://assets4.lottiefiles.com/packages/lf20_ihxIYc.json"
            }
            height={300}
            width={300}
            playerAreVisible={false}
          />
        </div>
      </IntroduceContainer>
      <SpendsContainer>
        <div className="text-introduce" id="div2">
          <h2>Anote os gastos</h2>
          <p>
            Faça o acompanhar quanto ganhou e quanto tem gastado, mostre o valor
            de guardar dinheiro para poder comprar algo que possa vir a querer,
            dar valor a ter dinheiro guardado e tentar prever possíveis gastos
            futuros.
          </p>
        </div>
        <div className="lottie-container" id="div2-img">
          <LottieMaker
            lottieImage={
              "https://assets5.lottiefiles.com/packages/lf20_boxe3lx3.json"
            }
            height={400}
            width={375}
            playerAreVisible={false}
          />
        </div>
      </SpendsContainer>
      <CharityContainer>
        <div className="text-introduce" id="div3">
          <h2>Ensine a doar</h2>
          <p>
            A doação, neste caso, funciona como um aprendizado para não acumular
            objetos, roupas e brinquedos, que podem ter um uso melhor do que
            ficar no fundo do armário. Esse hábito evita que a criança se torne
            um adulto egoísta e consumista, que junta sem necessidade e não sabe
            dividir. Mostre à criança quem irá se beneficiar da doação feita por
            ela e diga que essa ação terá valor e impacto positivo na vida de
            outra pessoa.
          </p>
        </div>
        <div className="image-container" id="div3-img">
          <img
            src="data:image/png;base64,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"
            alt="charity"
          />
        </div>
      </CharityContainer>
      <WaistContainer>
        <div className="text-introduce" id="div4">
          <h2>Evite desperdício</h2>
          <p>
            Mostre que desperdiçar é perder dinheiro, além de ser uma prática
            com alto custo ambiental e mesmo social. Por isso, ensine a criança
            a dizer “não” ao desperdício de energia, água e comida. A criança
            deve aprender a cuidar e a zelar de tudo o que tem, seja dinheiro ou
            não.
          </p>
        </div>
        <div id="div4-img">
          <LottieMaker
            lottieImage={
              "https://assets10.lottiefiles.com/packages/lf20_CIPL1V.json"
            }
            height={400}
            width={375}
            playerAreVisible={false}
          />
        </div>
      </WaistContainer>
      <EntrepreneurContainer>
        <div className="text-introduce" id="div5">
          <h2>Incentive o empreendedorismo</h2>
          <p>
            Algumas crianças adoram vender objetos, brinquedos, revistinhas e
            tudo o que puderem para os amigos e colegas de classe! Se o seu
            filho tiver este espírito empreendedor, estimule-o! Mais importante
            do que a quantia de dinheiro adquirida, é o aprendizado e a postura
            de fazer algo para mudar determinada situação.{" "}
          </p>
        </div>
        <div id="div5-img">
          <LottieMaker
            lottieImage={
              "https://assets5.lottiefiles.com/packages/lf20_jt4mhmk1.json"
            }
            height={400}
            width={375}
            playerAreVisible={false}
          />
        </div>
      </EntrepreneurContainer>
    </Container>
  );
};
