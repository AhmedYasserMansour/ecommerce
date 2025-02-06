import { Col, Container, Row } from "react-bootstrap"
import { Outlet } from "react-router-dom"

const ProfileLayout = () => {
  return (
    <Container>
    <Row>
      <Col>
      <Outlet/>
      </Col>
    </Row>
    </Container>
  )
}

export default ProfileLayout;
