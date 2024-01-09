import { Row, Col } from 'react-bootstrap';

const FilterForm = () => {
    return (
        <div md={12} className="bg-white filter-main border-radius-50">
            <Row className='p-4 align-items-md-center'>
                <Col md={3} className='drop-col text-center'>
                    <p className='fw-bold'>Pick Up Location</p>
                    <select name="" id="" className='drop-btn'>
                        <option value="Select Location">Select Location</option>
                        <option value="Shimla">Shimla</option>
                        <option value="Kangra">Kangra</option>
                    </select>
                </Col>
                <Col md={3} className='drop-col text-center'>
                    <p className='fw-bold'>Pick Up Date</p>
                    <input type="date" name="date" placeholder="Select Date" className='drop-btn' />
                </Col>
                <Col md={3} className='drop-col text-center'>
                    <p className='fw-bold'>Return Date</p>
                    <input type="date" name="date" placeholder="Select Date" className='drop-btn' />
                </Col>
                <Col md={3} className='drop-col text-center'>
                   <button type="button" className='bg-black text-white submit-btn'>Search for car</button>
                </Col>
            </Row>
        </div>
    )
}

export default FilterForm