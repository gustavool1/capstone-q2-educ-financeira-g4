import {
  VideoContainer,
  HowItWorks,
  KnowMore,
  Content,
  Steps,
  JoinToday,
  WhoWeAre,
  AnimatedSection,
} from "./style";
import Dollar from "../../assets/images/Dollar.svg";
import LottieMaker from "../../Components/LottieMaker";

export const Home = () => {
  return (
    <>
      <VideoContainer />

      <HowItWorks>
        <div className="Animation">
          <LottieMaker
            lottieImage="https://assets9.lottiefiles.com/packages/lf20_89z7ku.json"
            height={500}
            width={500}
            playerAreVisible={false}
          />
        </div>
        <div className="Content">
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
        <div className="Content">
          <p>Saiba agora porque vocês precisam da gente!</p>
          <button>Saiba Mais</button>
        </div>
        <div className="Animation">
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
          <h3>Atividades</h3>
          <p>
            Você cria atividades para seus filhos e valores a serem dados pela
            realização das tarefas.
          </p>

          <h3>Lista de desejos</h3>
          <p>
            Seu filho poderia registrar uma lista de coisas que deseja comprar e
            colocaria o valor estipulado do item.
          </p>
        </div>
        <div>
          <h3>Balanço economico</h3>
          <p>
            No site o seu filho registraria o dinheiro recebido e os próprios
            gastos, podendo acompanhar seu dinheiro em caixa.
          </p>

          <h3>Tutorial básico de finanças</h3>
          <p>Uma página interativa ensinando o básico de economia.</p>
        </div>
      </Content>

      <Steps>
        <h2>Passos</h2>
        <div className="Content">
          <div>
            <h4>1. Crie a conta do seu filho</h4>
            <p>
              Crie a conta do dependente, posteriormente ele pode logar
              diretamente com a própria conta e você poderá acompanhar os dados
              do seu filho
            </p>
          </div>

          <div>
            <h4>2. Crie atividades para ele(s)</h4>
            <p>
              Dentro de sua conta crie as atividade para seus filhos e coloque
              os valores de recompensa
            </p>
          </div>

          <div>
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
      </WhoWeAre>
    </>
  );
};
