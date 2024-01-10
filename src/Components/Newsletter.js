import { Row, Col} from 'react-bootstrap';

const Newsletter = () => {
    return (
        <>
            <Col md={12} className='pt-5 pb-4'>
                <p className='text-center fw-bold text-black fs-1'>Subscribe To Our Newsletters</p>
            </Col>
            <Row>
                <Col md={2}></Col>
                <Col md={8}>
                    <div className="input-group home-newsletter">
                        <input type="email" className="form-control" placeholder="Enter Your Email" />
                        <span className="input-group-btn">
                            <button className="btn btn-theme" type="submit">Subscribe</button>
                        </span>
                    </div>
                </Col>
                <Col md={2}></Col>
            </Row>


        </>
    )
}

export default Newsletter