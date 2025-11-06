import { Carousel } from "react-bootstrap";
import modi from "../../assets/homeImages/modi.png";
import kovind from "../../assets/homeImages/kovind.jpg";
import bachchn from "../../assets/homeImages/Bachchan.jpg";

const ExperienceSlider = () => {
  const slides = [
    {
      id: 1,
      name: "Shri Narendra Modi",
      title: "Honorable Prime Minister of India",
      quote:
        "Yoga has been a traditional lifestyle in every household of our country since ancient times. It enhances inner calm, peace, and brotherhood among the people. Heartiest congratulations and best wishes to The Yoga Institute.",
      image: modi,
    },
    {
      id: 2,
      name: "Ram Nath Kovind",
      title: "Former President of India",
      quote:
        "Yoga is an invaluable gift of India's ancient tradition. It unites mind and body, thought and action, restraint and fulfillment, harmony between man and nature.",
      image: kovind,
    },
    {
      id: 3,
      name: "Amitabh Bachchan",
      title: "Legendary Bollywood Actor",
      quote:
        "Yoga is a way to discover your inner self and achieve mental peace. It is a spiritual discipline that brings harmony between mind and body.",
      image: bachchn,
    },
  ];

  return (
    <div
      className="py-5"
      style={{
        backgroundColor: "#f7d8c4",
        minHeight: "550px",
      }}
    >
      <div className="container">
        <Carousel
          fade
          interval={3000}
          indicators
          controls
          className="experience-carousel"
        >
          {slides.map((slide) => (
            <Carousel.Item key={slide.id}>
              <div className="row align-items-center">
                {/* Left Section - Text */}
                <div className="col-lg-7 col-md-12 mb-4 mb-lg-0">
                  <div className="px-3 px-lg-5">
                    <h3 className="fw-bold mb-3">
                      <i className="bi bi-chat-quote-fill me-2 text-dark"></i>
                      The Yoga{" "}
                      <span className="fw-bold text-dark">Experience</span>
                    </h3>

                    <h5 className="fw-bold mt-4">{slide.name}</h5>
                    <p
                      className="text-danger fw-semibold"
                      style={{ fontSize: "1.05rem" }}
                    >
                      {slide.title}
                    </p>
                    <p
                      className="mt-3 fs-5 text-dark"
                      style={{
                        lineHeight: "1.8",
                        textAlign: "justify",
                      }}
                    >
                      “{slide.quote}”
                    </p>
                  </div>
                </div>

                {/* Right Section - Image */}
                <div className="col-lg-5 col-md-12 text-center">
                  <img
                    src={slide.image}
                    alt={slide.name}
                    className="img-fluid rounded-4 shadow-lg"
                    style={{
                      maxHeight: "420px",
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "15px",
                    }}
                  />
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ExperienceSlider;
  