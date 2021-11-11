import { VideoContainer, HowItWorks, KnowMore } from "./style";
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
    </>
  );
};
