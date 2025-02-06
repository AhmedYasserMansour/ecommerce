import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import LottieHandler from "@/commponents/feedback/lottieHandler/lottieHandler";

const Error = () => {
  return (
    <Container>
    <div className="notFound">
    <LottieHandler type='notFound'/>
      <Link to="/" replace={true}>
        How about going back to safety?
      </Link>
    </div>
    </Container>
  );
};

export default Error;