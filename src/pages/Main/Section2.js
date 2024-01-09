import { Container, Row, Col, Card } from 'react-bootstrap';
import book from "../../assets/images/book.png";
import trust from "../../assets/images/trust.png";
import travel from "../../assets/images/travel.png";

const Section2 = () => {
    return (
        <section className="bg-white pt-5 pb-5">
            <Container className="pt-5 mt-5 pb-5">
                <h5 className='text-center fw-bold text-black fs-1 pb-5 mb-5'>Fill The Best Experience<br />With our luxury car</h5>
                <Row>
                    <Col md={4} className='text-center car-boxes'>
                        <img src={book} alt="book" />
                        <Card.Title className='fw-bold fs-1 pt-4 pb-3'>Book with Flexibility</Card.Title>
                        <p className='fw-600 fs-4'>Easily Find car and book with no change fees.</p>
                    </Col>
                    <Col md={4} className='text-center car-boxes'>
                        <img src={trust} alt="trust" />
                        <Card.Title className='fw-bold fs-1 pt-4 pb-3'>Trusted and Free</Card.Title>
                        <p className='fw-600 fs-4'>we're completely free to use-no charges fees.</p>
                    </Col>
                    <Col md={4} className='text-center car-boxes'>
                        <img src={travel} alt="travel" />
                        <Card.Title className='fw-bold fs-1 pt-4 pb-3'>We know travel</Card.Title>
                        <p className='fw-600 fs-4'>with 10 years of experience. we're ready to help find your perfect car</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Section2