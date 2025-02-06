
import { Col, Row } from 'react-bootstrap';
import ContentLoader from 'react-content-loader';

const ProductsSkeleton = () => {
  const skeletonList= Array(6).fill(0).map((_,i)=> {
  return ( 
     <Col key={i} xs={6} sm={4} md={3} lg={2} xl={2}
   className="d-flex justify-content-center mb-5 mt-2 p-2">
   <ContentLoader 
    speed={1}
    width="100%"
    height='100%'
    viewBox="0 0 234 800"
     backgroundColor="#4f4f4f"
    foregroundColor="#e3d9d9"
  >
    <rect x="0" y="198" rx="5" ry="5" width="250" height="40" />
    <rect x="0" y="308" rx="5" ry="5" width="250" height="38" /> 
    <rect x="0" y="279" rx="5" ry="5" width="250" height="10" /> 
    <rect x="0" y="252" rx="5" ry="5" width="250" height="15" /> 
    <rect x="0" y="6" rx="5" ry="5" width="250" height="180" />
  </ContentLoader>
    </Col>
    )
  });
  return <Row className='justify-content-center'>{skeletonList}</Row>
}

export default ProductsSkeleton;


