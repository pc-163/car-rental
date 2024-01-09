import FilterForm from "../../Components/filterform";
//import '../../assets/styles/main.css'
import { Tab, Tabs, Row } from 'react-bootstrap';

const TabFilter = () => {
    return (
        <>

            <Row className="tabs-set pb-5">
                <Tabs
                    defaultActiveKey="prices"
                    id="uncontrolled-tab-example"
                    className="mb-5 fs-3 fw-bold">

                    <Tab eventKey="prices" title="Prices">
                        <FilterForm />
                    </Tab>
                    <Tab eventKey="offers" title="Offers">
                        <FilterForm />
                    </Tab>
                    <Tab eventKey="delivery" title="Delivery">
                        <FilterForm />
                    </Tab>
                </Tabs>
            </Row>
            
        </>
    )
}

export default TabFilter