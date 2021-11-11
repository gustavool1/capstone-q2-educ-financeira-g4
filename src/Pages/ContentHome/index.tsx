import { Container, IntroduceContainer }from './style.js'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import pig from '../../assets/lottie/15418-imix-pig.json'
export const ContentHome = () => {
  return(
   
    <Container>
      <IntroduceContainer>
        <h1>Como introduzir seus filhos a educação financeira</h1>
        <div className='text-introduce'>
          <h2>Dê a ele um porquinho ou algo similar</h2>
          <p>Dê um cofrinho a ele ou ensine e apoie na utilização de ferramentas que se assemelhe a um.No nosso aplicativo você poderá criar tarefas e recompensa-lo pela feitura das mesmasEle também poderá criar uma lista de desejos e acompanhar o próprio dinheiro para tentar chegar ao valor dos itens da lista.Aos pouquinhos chegando ao valor desejado e podendo então comprar o item, sentindo na pele o valor do dinheiro e ainda realizando tarefas que podem ser desde auxiliar em casa como manter os estudos em dia.</p>
        </div>
        <div>
        <Player
        autoplay
        loop
        src={pig}
        style={{ height: '300px', width: '300px' }}
        >
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
      </Player>
        </div>
      </IntroduceContainer>
    </Container>
  )
};
