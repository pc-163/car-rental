import * as Icon from 'react-bootstrap-icons';
import { Row, Col, Card, Container } from 'react-bootstrap';
import OurStories from '../../Components/OurStories';
import Newsletter from '../../Components/Newsletter';

const Section3 = () => {
    const fs = "fnt-size";
    return (
        <section className='pb-5'>
            <Container>
                <Col md={12}>
                    <p className='text-center fw-bold text-black fs-1'>Why We Are Different</p>
                    <p className='text-center text-black fs-5'>Unlock the road to adventure with our diverse fleet of rental cars. <br />Your journey, your choice – experience hassle-free mobility with us</p>
                </Col>
                <Row className='pt-5 pb-5'>
                    <Col md={4}>
                        <Card className='p-5 px-0 text-black text-center border-0'>
                            <Icon.BookmarksFill className='m-auto' id={fs} />
                            <Card.Title className='fw-bold pt-5 fs-1'>Easy Booking</Card.Title>
                            <Card.Title className='fs-4 pt-1 mb-0'>Effortlessly book your next <br /> experience with Easy Booking</Card.Title>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='p-5 px-0 text-black text-center border-0'>
                            <Icon.CreditCardFill className='m-auto' id={fs} />
                            <Card.Title className='fw-bold pt-5 fs-1'>Secure payments</Card.Title>
                            <Card.Title className='fs-4 pt-1 mb-0'>Effortlessly book your next <br /> experience with Easy Booking</Card.Title>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='p-5 px-0 text-black text-center border-0'>
                            <Icon.GeoAltFill className='m-auto' id={fs} />
                            <Card.Title className='fw-bold pt-5 fs-1'>24/7 Tracking</Card.Title>
                            <Card.Title className='fs-4 pt-1 mb-0'>Effortlessly book your next <br /> experience with Easy Booking</Card.Title>
                        </Card>

                    </Col>
                </Row>
                <Col md={12} className='pt-5'>
                    <p className='text-center fw-bold text-black fs-1'>What Do People Say About Us?</p>
                    <p className='text-center text-black fs-5'>They are ver soft and don't leave any pain. He likes to take care
                        of his family</p>
                </Col>
                <Row className='pt-4 pb-5'>
                    <Col md={6} className='bg_image'>

                    </Col>
                    <Col md={6} className='bg-dark p-5 radius_s'>
                    <p className='text-white fs-4'>
                        Customers consistently praise us for our gentle approach, ensuring a pain-free experience with every interaction. Our commitment to care is reflected not just in our services but in the genuine concern we have for our clients. We take pride in fostering a soft and supportive environment that goes beyond transactions. The personal touch we provide is akin to taking care of one&#039;s family, creating lasting relationships built on trust and comfort.
                        <br/><br/>Amna De'suzo,
                        <br/>CEO at SpaceX
                        </p>
                    </Col>
                </Row>

                <OurStories />
                <Newsletter />
            </Container>
        </section>
    )
}

export default Section3