import { Container, IntroduceContainer }from './style.js'
import LottieMaker from '../../Components/LottieMaker/';
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
        <LottieMaker lottieImage={"https://assets8.lottiefiles.com/packages/lf20_4Zy7ka.json"} height={300} width={300} playerAreVisible={false}/>
        </div>
      </IntroduceContainer>
    </Container>
  )
};
