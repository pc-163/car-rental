import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import Logo from "../../assets/images/gbautos.png";
import * as Icon from 'react-bootstrap-icons';
import '../../assets/styles/header.css';

const Header = () => {
    return (
        <header className='bg-white'>
            <Container fluid="md">
                <Row fixed="top" className='align-items-md-center'>
                    <Col md={2}>
                        <Navbar.Brand href="#home"> <img src={Logo} alt="Main Logo" /></Navbar.Brand>

                    </Col>
                    <Col md={7}>
                        <Navbar>
                            <Nav className="m-auto fw-bold fs-5 text-black">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#services">Services</Nav.Link>
                                <Nav.Link href="#blog">Blog</Nav.Link>
                                <Nav.Link href="#contact">Contact Us</Nav.Link>
                            </Nav>
                        </Navbar>
                    </Col>
                    <Col md={3} className='coln-right'>

                        <Icon.Search className='fs-4'/>
                        <Icon.BoxArrowDown className='fs-4'/>
                        <Icon.PersonCircle className='fs-4'/>
                        <Nav.Link href="#signin" className="fw-bold fs-5 text-black">Sign in</Nav.Link>

                    </Col>

                </Row>
            </Container>
        </header>
    )
}

export default Header