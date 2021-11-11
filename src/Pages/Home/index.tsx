import {
  VideoContainer,
  HowItWorks,
  KnowMore,
  Content,
  Steps,
  JoinToday,
} from "./style";
import Dollar from "../../assets/images/Dollar.svg";
export const Home = () => {
  return (
    <>
      <VideoContainer />
      <HowItWorks>
        <h2>Como Funciona ?</h2>
        <p>
          Você pode criar a uma conta para seu filho e adicionar atividades para
          serem feitas com um devido valor a ser recebido pela atividade
          realizada, além disso, possuímos conteúdos interativos para as
          crianças aprenderem mais sobre economia e conseguir acompanhar o
          próprio balanço financeiro.
        </p>
      </HowItWorks>
      <KnowMore>
        <p>Saiba agora porque vocês precisam da gente!</p>
        <button>Saiba Mais</button>
      </KnowMore>
      <Content>
        <h2>Conteúdos</h2>
        <p>
          Você cria atividades para seus filhos e valores a serem dados pela
          realização das tarefas.
        </p>

        <h3>Lista de desejos</h3>
        <p>
          Seu filho poderia registrar uma lista de coisas que deseja comprar e
          colocaria o valor estipulado do item.
        </p>

        <h3>Balanço economico</h3>
        <p>
          No site o seu filho registraria o dinheiro recebido e os próprios
          gastos, podendo acompanhar seu dinheiro em caixa.
        </p>

        <h3>Tutorial básico de finanças</h3>
        <p>Uma página interatira ensinando o básico de ecônomia.</p>
      </Content>
      <Steps>
        <h2>Passos</h2>
        <div>
          <h4>1. Crie a conta do seu filho</h4>
          <p>
            Crie a conta do dependente, posteriormente ele pode logar
            diretamente com a própria conta e você poderá acompanhar os dados do
            seu filho
          </p>
        </div>

        <div>
          <h4>2. Crie atividades para ele(s)</h4>
          <p>
            Dentro de sua conta crie as atividade para seus filhos e coloque os
            valores de recompensa
          </p>
        </div>

        <div>
          <h4>3. Pague seu filho e acompanhe os gastos deles</h4>
          <p>
            Quando a tarefa por concluida ele vai receber o valor e vai colocar
            o quanto recebeu e o quanto gastou na parte de balanço financeiro.
          </p>
        </div>
      </Steps>

      <JoinToday>
        <img src={Dollar} alt="Dollar representation" />
        <button>Cadastre-se</button>
      </JoinToday>
    </>
  );
};
