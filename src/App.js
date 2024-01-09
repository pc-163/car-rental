//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Container, Row, Col } from 'react-bootstrap';
import Header from './pages/header/header';
import Section1 from './pages/Main/Section1';
import Section2 from './pages/Main/Section2';
import CarFeatures from './pages/Main/CarFeatures';

function App() {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <CarFeatures />
    </>
  );
}

export default App;
