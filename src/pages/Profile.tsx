import { useAppSelector } from "@/store/hooks";
import { Container } from "react-bootstrap";


const Profile = () => {
  const accountInfo = useAppSelector((state) => state.auth?.user);
  return (
    <Container className='global pt-5'>
     <ul>
        <li className="info">Name : {accountInfo?.name}</li>
        <li className="info">Email : {accountInfo?.email}</li>
      </ul>
      </Container>
  )
}

export default Profile;
