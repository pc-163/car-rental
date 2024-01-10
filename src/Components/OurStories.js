import { Row, Col, Card, Button } from 'react-bootstrap';
import imag1 from "../assets/images/car3.jpg";
import imag2 from "../assets/images/car2.jpg";
import imag3 from "../assets/images/car1.jpg";
import * as Icon from 'react-bootstrap-icons';


const OurStories = () => {
    return (
        <>
            <Col md={12} className='pt-5 pb-4'>
                <p className='text-center fw-bold text-black fs-1'>Read Our Stories</p>
            </Col>

            <Row className='pt-4 pb-5 blog_sec'>
                <Col md={4}>
                    <Card className='p-4 br-0 border-0'>
                        <Card.Img src={imag1} alt='imag1' className='border-radius-0 pb-4' />
                        <Button variant="dark">Tags</Button>
                        <Card.Title className='fw-700 fs-3 pt-4 pb-3'>Start a blog to reach your creative peak</Card.Title>
                        <Card.Title className='fs-6 text-dark'>They are ver soft and don't leave any pain. He likes to take care of his family
                        </Card.Title>

                        <Card.Title className='fw-bold fs-5 pt-3 pb-3'><a href="#findmore" className='text-black'>Find Out More <Icon.ArrowRight />  </a></Card.Title>

                    </Card>
                </Col>
                <Col md={4}>
                    <Card className='p-4 br-0 border-0'>
                        <Card.Img src={imag2} alt='imag2' className='border-radius-0 pb-4' />
                        <Button variant="dark">Tags</Button>
                        <Card.Title className='fw-700 fs-3 pt-4 pb-3'>Start a blog to reach your creative peak</Card.Title>
                        <Card.Title className='fs-6 text-dark'>They are ver soft and don't leave any pain. He likes to take care of his family
                        </Card.Title>

                        <Card.Title className='fw-bold fs-5 pt-3 pb-3'><a href="#findmore" className='text-black'>Find Out More <Icon.ArrowRight />  </a></Card.Title>

                    </Card>
                </Col>

                <Col md={4}>
                    <Card className='p-4 br-0 border-0'>
                        <Card.Img src={imag3} alt='imag3' className='border-radius-0 pb-4' />
                        <Button variant="dark">Tags</Button>
                        <Card.Title className='fw-700 fs-3 pt-4 pb-3'>Start a blog to reach your creative peak</Card.Title>
                        <Card.Title className='fs-6 text-dark'>They are ver soft and don't leave any pain. He likes to take care of his family
                        </Card.Title>

                        <Card.Title className='fw-bold fs-5 pt-3 pb-3'><a href="#findmore" className='text-black'>Find Out More <Icon.ArrowRight />  </a></Card.Title>

                    </Card>
                </Col>

            </Row>
        </>
    )
}

export default OurStories