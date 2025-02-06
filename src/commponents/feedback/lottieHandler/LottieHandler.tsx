import Lottie from "lottie-react";
import notFound from '@assets/lottie/notFound.json';
import error from '@assets/lottie/error.json';
import empty from '@assets/lottie/empty.json';
import loading from '@assets/lottie/loading.json';
import favorite from '@assets/lottie/favorite.json';
import success from '@assets/lottie/success.json';

const lottifiles = {
    notFound,
    error,
    empty,
    loading,
    favorite,
    success,
  };
  type TlottieHandler = {
    type : keyof typeof lottifiles,
    message?: string
  }
const LottieHandler = ({type, message} : TlottieHandler) => {
    const error = {width : '250px',margin: 'auto', fontSize: '25px'}
    const lottie = lottifiles[type]
  return (
    <div style={error}>
      <Lottie animationData={lottie} />
      {message && <p style={{color:'red', textAlign: 'center'}}>{message}</p>}
    </div>
  )
}

export default LottieHandler;
