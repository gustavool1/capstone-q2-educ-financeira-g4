import { VideoContainer, HowItWorks, KnowMore, Content } from "./style";
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

        <h3>Lisa de desejos</h3>
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
    </>
  );
};
