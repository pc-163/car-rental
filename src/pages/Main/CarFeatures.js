import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import Audi1 from "../../assets/images/2022.png";
import Audi2 from "../../assets/images/etroncatalunyared_sv.png";
import Audi3 from "../../assets/images/2021.png";
import Audi4 from "../../assets/images/A6firmamemntblue_sv.png";

const CarFeatures = () => {
    return (
        <section className="pt-5 pb-5">
            <Container className="pt-5 pb-5">
                <h6 className='text-center fw-bold text-black fs-1 pb-5 mb-5'>Our Feature cars</h6>
                <Row>
                    <Col md={4}>
                        <Card className='p-5 border-0'>
                        <Card.Img src={Audi1} alt='Audi1' />
                            <Card.Title className='fw-bold fs-1 pt-4 pb-3'>Audi e-tron GT</Card.Title>
                            <Card.Body className='p-0 pb-3'>
                                <p className='fs-5 fw-bold'><Icon.CheckSquareFill /> &nbsp; Air Conditioned</p>
                                <p className='fs-5 fw-bold'><Icon.CheckSquareFill /> &nbsp; Bluetooth sound System</p>
                                <p className='fs-5 fw-bold'><Icon.CheckSquareFill /> &nbsp; Sunroof Available</p>
                            </Card.Body>
                            <Button variant="dark">Rent Now</Button>
                        </Card>
                    </Col>
                    <Col md={4}>
                    <Card className='p-5 border-0'>
                    <Card.Img src={Audi1} alt='Audi1' />
                        <Card.Title className='fw-bold fs-1 pt-4 pb-3'>Audi e-tron GT</Card.Title>
                        <Card.Body className='p-0 pb-3'>
                            <p className='fs-5 fw-bold'><Icon.CheckSquareFill /> &nbsp; Air Conditioned</p>
                            <p className='fs-5 fw-bold'><Icon.CheckSquareFill /> &nbsp; Bluetooth sound System</p>
                            <p className='fs-5 fw-bold'><Icon.CheckSquareFill /> &nbsp; Sunroof Available</p>
                        </Card.Body>
                        <Button variant="dark">Rent Now</Button>
                    </Card>
                </Col>
                <Col md={4}>
                <Card className='p-5 border-0'>
                <Card.Img src={Audi1} alt='Audi1' />
                    <Card.Title className='fw-bold fs-1 pt-4 pb-3'>Audi e-tron GT</Card.Title>
                    <Card.Body className='p-0 pb-3'>
                        <p className='fs-5 fw-bold'><Icon.CheckSquareFill /> &nbsp; Air Conditioned</p>
                        <p className='fs-5 fw-bold'><Icon.CheckSquareFill /> &nbsp; Bluetooth sound System</p>
                        <p className='fs-5 fw-bold'><Icon.CheckSquareFill /> &nbsp; Sunroof Available</p>
                    </Card.Body>
                    <Button variant="dark">Rent Now</Button>
                </Card>
            </Col>
            <a href="/" className='text-center pt-5 fw-bold fs-3 text-black text-decoration-none'> See The Store</a>

                </Row>
            </Container>
        </section>
    )
}

export default CarFeatures