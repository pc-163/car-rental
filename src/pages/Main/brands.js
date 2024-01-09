import { Row, Col } from 'react-bootstrap';
import audi from "../../assets/images/audi.png";
import landrover from "../../assets/images/landrover.png";
import tesla from "../../assets/images/tesla.png";
import ferrari from "../../assets/images/ferrari.png";


const Brands = () => {
  return (
    <Row className='pt-5 pb-5'>
    <h4 className='text-center fw-bold text-black fs-1 pb-5'>Our Luxury Brand</h4>
            <Col md={3}>
                <img src={audi} alt="audi" />
            </Col>
            <Col md={3}>
                <img src={landrover} alt="landrover" />
            </Col>
            <Col md={3}>
                <img src={tesla} alt="tesla" />
            </Col>
            <Col md={3}>
                <img src={ferrari} alt="ferrari" />
            </Col>

            <a href="/" className='text-center pt-5 fw-bold fs-3 text-black text-decoration-none'> See Our Store</a>
    </Row>
  )
}

export default Brands