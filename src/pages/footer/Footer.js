import { Container, Row, Col, Card } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import FooterLogo from "../../assets/images/footer_logo.png";

const Footer = () => {
    return (
        <footer className='pt-5 pb-5'>
            <Container>
                <Row className='pb-4'>
                    <Col md={4}>
                        <Card.Title className='fw-bold fs-2 text-white'>Reservation</Card.Title>
                        <ul className='fw-500 pt-4 fs-4 footer_list'>
                            <li><a href="/">Car Hire</a></li>
                            <li><a href="/">Modify Or Cancel</a></li>
                            <li><a href="/">Get A Receipt</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <Card.Title className='fw-bold fs-2 text-white'>Customer Services</Card.Title>
                        <ul className='fw-500 pt-4 fs-4 footer_list'>
                            <li><a href="/">Help / FAQS</a></li>
                            <li><a href="/">Press</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">Contact Us</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <Card.Title className='fw-bold fs-2 text-white'>Company</Card.Title>
                        <ul className='fw-500 pt-4 fs-4 footer_list'>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Carrier</a></li>
                            <li><a href="/">Report & Gorvenance</a></li>
                        </ul>
                    </Col>
                </Row>

                <Row className='ft_border pt-4 align-items-center'>
                    <Col md={3}>
                        <a href='/'><img src={FooterLogo} alt="FooterImage" />
                        </a>
                    </Col>
                    <Col md={6} className='text-center text-white'>
                        Developed By <a href="https://github.com/pc-163/" target='_blank' className='text-white'>Pc Web Tech</a>
                    </Col>
                    <Col md={3}>
                    <p className='text-end fw-500 mt-1'>
                        <Icon.Facebook className='text-white' />
                        <Icon.Twitter className='text-white' />
                        <Icon.Instagram className='text-white' />
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer