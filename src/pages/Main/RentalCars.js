import { Row, Col, Button, Card } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import Audi1 from "../../assets/images/2022.png";
import Audi2 from "../../assets/images/etroncatalunyared_sv.png";
import Audi3 from "../../assets/images/2021.png";
import Audi4 from "../../assets/images/A6firmamemntblue_sv.png";


const RentalCars = () => {
    return (
        <Row className='pt-5 pb-5'>
            <h3 className='text-center fw-bold text-black fs-1 pb-5'>We Have Everything You Need</h3>
            <Col md={3}>
                <Card className='p-3 text-center border-0'>
                    <Card.Title className='fw-bold fs-3'>Audi e-tron GT</Card.Title>
                    <Card.Img src={Audi1} alt='Audi1' />
                    <Card.Title className='fw-bold fs-4 pt-5'>2023</Card.Title>
                    <Card.Body className='p-0 flex main-card-body'>
                        <Icon.Speedometer /> 15k
                        <Icon.EvFront /> Auto
                        <Icon.UniversalAccessCircle /> Auto
                    </Card.Body>
                    <Card.Title className='fw-bold fs-4 pt-3 pb-3'>10,000</Card.Title>
                    <Button variant="dark">Rent</Button>
                </Card>
            </Col>
            <Col md={3}>
                <Card className='p-3 text-center border-0'>
                    <Card.Title className='fw-bold fs-3'>Audi e-tron</Card.Title>
                    <Card.Img src={Audi2} alt='Audi2' />
                    <Card.Title className='fw-bold fs-4 pt-5'>2023</Card.Title>
                    <Card.Body className='p-0 flex'>
                        <Icon.Speedometer /> 15k
                        <Icon.EvFront /> Auto
                        <Icon.UniversalAccessCircle /> Auto
                    </Card.Body>
                    <Card.Title className='fw-bold fs-4 pt-3 pb-3'>10,000</Card.Title>
                    <Button variant="dark">Rent</Button>
                </Card>
            </Col>
            <Col md={3}>
                <Card className='p-3 text-center border-0'>
                    <Card.Title className='fw-bold fs-3'>Audi Sportback</Card.Title>
                    <Card.Img src={Audi3} alt='Audi3' />
                    <Card.Title className='fw-bold fs-4 pt-5'>2021</Card.Title>
                    <Card.Body className='p-0 flex'>
                        <Icon.Speedometer /> 15k
                        <Icon.EvFront /> Auto
                        <Icon.UniversalAccessCircle /> Auto
                    </Card.Body>
                    <Card.Title className='fw-bold fs-4 pt-3 pb-3'>10,000</Card.Title>
                    <Button variant="dark">Rent</Button>
                </Card>
            </Col>
            <Col md={3}>
                <Card className='p-3 text-center border-0'>
                    <Card.Title className='fw-bold fs-3'>Audi A6 Sedan</Card.Title>
                    <Card.Img src={Audi4} alt='Audi4' />
                    <Card.Title className='fw-bold fs-4 pt-5'>2023</Card.Title>
                    <Card.Body className='p-0 flex'>
                        <Icon.Speedometer /> 15k
                        <Icon.EvFront /> Auto
                        <Icon.UniversalAccessCircle /> Auto
                    </Card.Body>
                    <Card.Title className='fw-bold fs-4 pt-3 pb-3'>10,000</Card.Title>
                    <Button variant="dark">Rent</Button>
                </Card>
            </Col>
        </Row>
    )
}

export default RentalCars