import {
  VideoContainer,
  HowItWorks,
  KnowMore,
  Content,
  Steps,
  JoinToday,
  WhoWeAre,
  AnimatedSection,
  PersonCard,
} from "./style";
import Dollar from "../../assets/images/Dollar.svg";
import LottieMaker from "../../Components/LottieMaker";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".left", {
      x: -700,
      opacity: 0,
    });
    gsap.to(".left", {
      x: 0,
      opacity: 1,
      duration: 3,
      scrollTrigger: {
        trigger: ".left",
        toggleActions: "restart play",
      },
    });

    gsap.from(".right", {
      x: 700,
      opacity: 0,
    });
    gsap.to(".right", {
      x: 0,
      opacity: 1,
      duration: 3,
      scrollTrigger: {
        trigger: ".right",
        toggleActions: "restart play",
      },
    });

    gsap.from(".visibleAnimation", {
      opacity: 0,
    });
    gsap.to(".visibleAnimation", {
      opacity: 1,
      duration: 5,
      scrollTrigger: {
        trigger: ".visibleAnimation",
        toggleActions: "restart play",
      },
    });

    gsap.from(".visibleAnimation1", {
      x: 700,

      opacity: 0,
    });
    gsap.to(".visibleAnimation1", {
      x: 0,

      opacity: 1,
      duration: 4,
      scrollTrigger: {
        trigger: ".visibleAnimation1",
        toggleActions: "restart play",
      },
    });

    gsap.from(".up", {
      y: -100,
      opacity: 0,
    });
    gsap.to(".up", {
      y: 0,
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: ".up",
        toggleActions: "restart play",
        markers: true,
      },
    });
    gsap.from(".upLeft", {
      x: -200,
      y: -100,
      opacity: 0,
    });
    gsap.to(".upLeft", {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: ".upLeft",
        toggleActions: "restart play",
        markers: true,
      },
    });
    gsap.from(".upRight", {
      x: 200,
      y: -100,
      opacity: 0,
    });
    gsap.to(".upRight", {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: ".upLeft",
        toggleActions: "restart play",
        markers: true,
      },
    });
  });

  return (
    <>
      <VideoContainer />

      <HowItWorks>
        <div className="Animation visibleAnimation">
          <LottieMaker
            lottieImage="https://assets9.lottiefiles.com/packages/lf20_89z7ku.json"
            height={500}
            width={500}
            playerAreVisible={false}
          />
        </div>
        <div className="Content visibleAnimation">
          <h2>Como Funciona ?</h2>
          <p>
            Você pode criar a uma conta para seu filho e adicionar atividades
            para serem feitas com um devido valor a ser recebido pela atividade
            realizada, além disso, possuímos conteúdos interativos para as
            crianças aprenderem mais sobre economia e conseguir acompanhar o
            próprio balanço financeiro.
          </p>
        </div>
      </HowItWorks>

      <KnowMore>
        <div className="Content left">
          <p>Saiba agora porque vocês precisam da gente!</p>
          <button>Saiba Mais</button>
        </div>
        <div className="Animation right">
          <LottieMaker
            lottieImage="https://assets9.lottiefiles.com/packages/lf20_jjokptgh.json"
            width={500}
            height={500}
            playerAreVisible={false}
          />
        </div>
      </KnowMore>

      <Content>
        <h2>Conteúdos</h2>
        <div>
          <h3 className="visibleAnimation1">Atividades</h3>
          <p className="visibleAnimation1">
            Você cria atividades para seus filhos e valores a serem dados pela
            realização das tarefas.
          </p>

          <h3 className="visibleAnimation1">Lista de desejos</h3>
          <p className="visibleAnimation1">
            Seu filho poderia registrar uma lista de coisas que deseja comprar e
            colocaria o valor estipulado do item.
          </p>
        </div>
        <div>
          <h3 className="visibleAnimation1">Balanço economico</h3>
          <p className="visibleAnimation1">
            No site o seu filho registraria o dinheiro recebido e os próprios
            gastos, podendo acompanhar seu dinheiro em caixa.
          </p>

          <h3 className="visibleAnimation1">Tutorial básico de finanças</h3>
          <p className="visibleAnimation1">
            Uma página interativa ensinando o básico de economia.
          </p>
        </div>
      </Content>

      <Steps>
        <h2>Passos</h2>
        <div className="Content">
          <div className="upLeft">
            <h4>1. Crie a conta do seu filho</h4>
            <p>
              Crie a conta do dependente, posteriormente ele pode logar
              diretamente com a própria conta e você poderá acompanhar os dados
              do seu filho
            </p>
          </div>

          <div className="up">
            <h4>2. Crie atividades para ele(s)</h4>
            <p>
              Dentro de sua conta crie as atividade para seus filhos e coloque
              os valores de recompensa
            </p>
          </div>

          <div className="upRight">
            <h4>3. Pague seu filho e acompanhe os gastos deles</h4>
            <p>
              Quando a tarefa por concluida ele vai receber o valor e vai
              colocar o quanto recebeu e o quanto gastou na parte de balanço
              financeiro.
            </p>
          </div>
        </div>
      </Steps>

      <AnimatedSection>
        <LottieMaker
          lottieImage="https://assets5.lottiefiles.com/private_files/lf30_tcuqw7ib.json"
          width={500}
          height={500}
          playerAreVisible={false}
        />
        <h2>Um aplicativo bem interativo e animado</h2>
      </AnimatedSection>

      <JoinToday>
        <img src={Dollar} alt="Dollar representation" />
        <button>Cadastre-se</button>
      </JoinToday>

      <WhoWeAre>
        <h2>Quem somos</h2>
        <p>
          Uma equipe de desenvolvedores comprometidos com a sociedade buscando
          um mundo melhor e mais justo por meio da democratização do
          conhecimento
        </p>
        <div>
          <PersonCard>Guilhermino</PersonCard>
        </div>
      </WhoWeAre>
    </>
  );
};
