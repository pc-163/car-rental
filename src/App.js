//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/header/header';
import Section1 from './pages/Main/Section1';
import Section2 from './pages/Main/Section2';
import CarFeatures from './pages/Main/CarFeatures';
import Section3 from './pages/Main/section3';
import Footer from './pages/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <CarFeatures />
      <Section3 />
      <Footer/>
    </>
  );
}

export default App;
