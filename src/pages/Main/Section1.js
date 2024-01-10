import OurServices from "../../Components/OurServices";
import MainSlider from "../../Components/mainslider";
import { Container, Row, Col } from 'react-bootstrap';
import TabFilter from "./TabFilter";
import RentalCars from "./RentalCars";
import Brands from "./brands";
import '../../assets/styles/main.css';


const Section1 = () => {
    return (
        <section>
            <Container fluid="md">
                <Row className='pt-5 pb-5 align-items-md-center'>
                    <Col md={4}>
                        <h1 className="fw-bold">Car <br />Rentals</h1>
                        <p className="text-white bg-black text-bg">The Lowest Rent For Car Hire</p>
                        <p>Unlock the road to adventure with our diverse fleet of rental cars. Your journey, your choice - experience hassle-free mobility with us
                            <br /><a href="#home" className="fw-bold text-black">See More...</a></p>
                    </Col>
                    <Col md={2}></Col>
                    <Col md={6}>
                        <MainSlider />
                    </Col>
                </Row>

                <TabFilter />

                <OurServices />

                <RentalCars />

                <Brands />
            </Container>
        </section>
    )
}

export default Section1