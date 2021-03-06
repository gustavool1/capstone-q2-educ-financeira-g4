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
  VideoBg,
  Container,
} from "./style";
import Dollar from "../../assets/images/Dollar.svg";
import LottieMaker from "../../Components/LottieMaker";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Video from "../../assets/Videos/HomePage.mp4";
import React from "react";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const history = useHistory();
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
      },
    });
  });

  return (
    <Container>
      <VideoContainer>
        <VideoBg autoPlay loop muted src={Video} />
      </VideoContainer>

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
            Voc?? pode criar a uma conta para seu filho e adicionar atividades
            para serem feitas com um devido valor a ser recebido pela atividade
            realizada, al??m disso, possu??mos conte??dos interativos para as
            crian??as aprenderem mais sobre economia e conseguir acompanhar o
            pr??prio balan??o financeiro.
          </p>
        </div>
      </HowItWorks>

      <KnowMore>
        <div className="Content left">
          <p>Saiba agora porque voc??s precisam da gente!</p>
          <button
            onClick={() => {
              window.scrollTo(0, 0);
              history.push("/contenthome");
            }}
          >
            Saiba Mais
          </button>
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
        <h2>Conte??dos</h2>
        <div>
          <h3 className="visibleAnimation1">Atividades</h3>
          <p className="visibleAnimation1">
            Voc?? cria atividades para seus filhos e valores a serem dados pela
            realiza????o das tarefas.
          </p>

          <h3 className="visibleAnimation1">Lista de desejos</h3>
          <p className="visibleAnimation1">
            Seu filho poderia registrar uma lista de coisas que deseja comprar e
            colocaria o valor estipulado do item.
          </p>
        </div>
        <div>
          <h3 className="visibleAnimation1">Balan??o economico</h3>
          <p className="visibleAnimation1">
            No site o seu filho registraria o dinheiro recebido e os pr??prios
            gastos, podendo acompanhar seu dinheiro em caixa.
          </p>

          <h3 className="visibleAnimation1">Tutorial b??sico de finan??as</h3>
          <p className="visibleAnimation1" id="myServices">
            Uma p??gina interativa ensinando o b??sico de economia.
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
              diretamente com a pr??pria conta e voc?? poder?? acompanhar os dados
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
              colocar o quanto recebeu e o quanto gastou na parte de balan??o
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
        <button onClick={() => history.push("/registerparents")}>
          Cadastre-se
        </button>
      </JoinToday>

      <WhoWeAre>
        <h2>Quem somos</h2>
        <p>
          Uma equipe de desenvolvedores comprometidos com a sociedade buscando
          um mundo melhor e mais justo por meio da democratiza????o do
          conhecimento
        </p>
        <div>
          <PersonCard
            href="https://www.linkedin.com/in/guilherminolucas/"
            whileHover={{
              scale: [1, 1.2, 1],
              transition: { duration: 3, repeat: Infinity },
            }}
            id="whoWeAre"
          >
            <img
              src="https://ca.slack-edge.com/TQZR39SET-U022FLKLUGK-44a5f12ab113-512"
              alt=" Guilhermino Profile"
            />
            <h3>Guilhermino - SM</h3>
          </PersonCard>

          <PersonCard
            href="https://www.linkedin.com/in/gustavo-oliveira-a2837b1a3/"
            whileHover={{
              scale: [1, 1.2, 1],
              transition: { duration: 3, repeat: Infinity },
            }}
          >
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQEjlnu8OI6BLw/profile-displayphoto-shrink_200_200/0/1629588814155?e=1642032000&v=beta&t=rWbc6eiA4fZWTDdAJmEeMqCpy1tC__Cks5FTbpTZZLY"
              alt="Gustavo Profile"
            />
            <h3>Gustavo - PO</h3>
          </PersonCard>
        </div>
        <div>
          <PersonCard
            href="https://www.linkedin.com/in/matheus-gomes-de-almeida96/"
            whileHover={{
              scale: [1, 1.2, 1],
              transition: { duration: 3, repeat: Infinity },
            }}
          >
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQFMSTeLTHkKbg/profile-displayphoto-shrink_200_200/0/1516657902718?e=1642032000&v=beta&t=GEBW7mTMXpTd63v77NuWRR31YC404MzNIKljeuD0G6s"
              alt="Matheus Profile"
            />
            <h3>Matheus - TL</h3>
          </PersonCard>

          <PersonCard
            href="https://www.linkedin.com/in/ericestevesmartins/"
            whileHover={{
              scale: [1, 1.2, 1],
              transition: { duration: 3, repeat: Infinity },
            }}
          >
            <img
              src="https://ca.slack-edge.com/TQZR39SET-U023TBBCVED-238fd4e90dbd-512"
              alt="Eric Profile"
            />
            <h3>Eric - QA</h3>
          </PersonCard>
        </div>
      </WhoWeAre>
    </Container>
  );
};
