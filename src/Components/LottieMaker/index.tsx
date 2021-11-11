import { Player, Controls } from '@lottiefiles/react-lottie-player';

interface LottieProps{
    lottieImage:string,
    height:number,
    width:number,
    playerAreVisible:boolean
}
const LottieMaker = ({lottieImage, height, width, playerAreVisible}:LottieProps) =>{
    return(
        <Player
        autoplay
        loop
        src={lottieImage}
        style={{ height:`${height}px`, width: `${width}px` }}
        >
          <Controls visible={playerAreVisible} buttons={['play', 'repeat', 'frame', 'debug']} />
      </Player>
    )
}

export default LottieMaker