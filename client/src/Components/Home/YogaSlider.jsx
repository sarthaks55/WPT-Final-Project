import { Carousel } from "react-bootstrap";
import img1 from "../../assets/slider/img1.jpg";
import img2 from "../../assets/slider/img2.jpg";
import img3 from "../../assets/slider/img3.jpg";
import "../../assets/css/slider.css";

const YogaSlider = () => {
  return (
    <Carousel fade interval={3000} className="yoga-slider">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Yoga meditation"
          style={{
            height: "85vh",
            objectFit: "cover",
          }}
        />
        <Carousel.Caption>
          <h2 className="slider-title">Find Your Inner Peace</h2>
          <p className="slider-text">Experience the harmony of mind and body through yoga meditation.</p>
        </Carousel.Caption>

      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Yoga practice"
          style={{
            height: "85vh",
            objectFit: "cover",
          }}
        />
        <Carousel.Caption>
          <h2 className="slider-title">Strength and Balance</h2>
          <p className="slider-text">Enhance your flexibility and posture with daily yoga practice.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Yoga lifestyle"
          style={{
            height: "85vh",
            objectFit: "cover",
          }}
        />
        <Carousel.Caption>
          <h2 className="slider-title">A Lifestyle of Wellness</h2>
          <p className="slider-text">Live mindfully and embrace a healthier lifestyle through yoga.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default YogaSlider;
