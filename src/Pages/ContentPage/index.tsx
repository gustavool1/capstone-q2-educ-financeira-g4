import { Container } from "./style";
const ContentPage = () => {
  return (
    <>
      <Container background="#9B5DE5" color="#fff">
        <h2>A lei da oferta e da procura !</h2>
        <div className="content">
          <div className="TextContent">
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
        </div>
      </Container>
      <Container background="#302F4D"></Container>
      <Container background="#00BBF9"></Container>
      <Container background="#8C218E"></Container>
      <Container background="#FEE440"></Container>
      <Container background="#00F5D4"></Container>
      <Container background="#302F4D"></Container>
    </>
  );
};
export default ContentPage;
