
import { Col, Row } from 'react-bootstrap';
import ContentLoader from 'react-content-loader';

const Categoryskeleton = () => {
  const skeletonList= Array(5).fill(0).map((_,i)=> {
  return ( 
     <Col key={i}  xs={6} sm={4} md={3} lg={2} xl={2}
     className="d-flex justify-content-center mb-5 mt-2 p-2">
        <ContentLoader 
    speed={1}
    width='100%'
    height='100%'
    viewBox="0 0 400 800"
    backgroundColor="#4f4f4f"
    foregroundColor="#e3d9d9"
  >
    <rect x="45" y="35" rx="10" ry="10" width="350" height="450" /> 
    <rect x="87" y="358" rx="3" ry="3" width="100" height="8" />
  </ContentLoader>
    </Col>
    )
  });
  return <Row className="justify-content-center">{skeletonList}</Row>
}

export default Categoryskeleton;
