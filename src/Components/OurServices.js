import SimpleCar from "../assets/images/car5.png";
import * as Icon from 'react-bootstrap-icons';
import { Row, Col } from 'react-bootstrap';

const OurServices = () => {
  return (
    <Row className="pt-5 pb-5 align-items-md-center">
                <Col md={7}>
                    <img src={SimpleCar} alt="My car" />
                </Col>
                <Col md={5}>
                    <h2 className="fw-bold fs-1 pb-3">Our Services</h2>
                    <Row className="align-items-md-center">
                        <Col md={3}>
                            <div className="class1">
                                <Icon.HCircle className='fs-1' />
                            </div>
                        </Col>
                        <Col md={9}>
                            <p className="fw-bold fs-2 mb-0">Car Hire</p>
                            <p className="fs-5">Elevate your travel experience with our premium car hire services.</p>
                        </Col>
                    </Row>
                    <Row className="align-items-md-center">
                        <Col md={3}>
                            <div className="class1">
                                <Icon.Percent className='fs-1' />
                            </div>
                        </Col>
                        <Col md={9}>
                            <p className="fw-bold fs-2 mb-0">Car Sales</p>
                            <p className="fs-5">Drive your dreams home with our exceptional selection of quality cars for sale</p>
                        </Col>
                    </Row>

                    <Row className="align-items-md-center">
                        <Col md={3}>
                            <div className="class1">
                                <Icon.Person className='fs-1' />
                            </div>
                        </Col>
                        <Col md={9}>
                            <p className="fw-bold fs-2 mb-0">Hire a Driver</p>
                            <p className="fs-5">Simplify your journey - hire a driver for a stress-free and
                            comfortable ride</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
  )
}

export default OurServices