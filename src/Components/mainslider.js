import Carousel from 'react-bootstrap/Carousel';
import SliderImage1 from "../assets/images/car1.jpg";
import SliderImage2 from "../assets/images/car2.jpg";
import SliderImage3 from "../assets/images/car3.jpg";
import SliderImage4 from "../assets/images/car4.jpg";
import "../assets/styles/slider.css";

const MainSlider = () => {

  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SliderImage1}
          alt="SliderImage1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SliderImage2}
          alt="SliderImage2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SliderImage3}
          alt="SliderImage3"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SliderImage4}
          alt="SliderImage4"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default MainSlider;