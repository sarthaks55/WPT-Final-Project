import logo from "../../assets/Images/lotus_logo_svg.svg";
import {Row,Col} from "react-bootstrap"
import {
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
  FaHeart,
  FaBookOpen,
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegCopyright,
  FaWhatsapp,
} from "react-icons/fa";
import "../../assets/css/footer.css";

const Footer = () => {
  return (
    <footer
      className="text-light pt-5 pb-4 "
      style={{ backgroundColor: "#0d0d0d", position: "relative" }}
    >

      <Row className="mx-2 my-2 justify-content-evenly">
        <Col className="col-lg-4 col-md-6">
          
            <img
              src={logo}
              alt="The Yoga Center"
              className="mb-3"
              style={{ width: "220px" }}
            />
            <p className="text-secondary mb-4" style={{ lineHeight: "1.7" }}>
              The Yoga Center, Santacruz (East), Mumbai, India was founded in
              2025 by Shri Sarthakji, and is the oldest centre of yoga in the
              world.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-light fs-5">
                <FaTwitter />
              </a>
              <a href="#" className="text-light fs-5">
                <FaYoutube />
              </a>
              <a href="#" className="text-light fs-5">
                <FaLinkedin />
              </a>
              <a href="#" className="text-light fs-5">
                <FaFacebookF />
              </a>
              <a href="#" className="text-light fs-5">
                <FaInstagram />
              </a>
            </div>
          
        </Col>

        <Col className="col-lg-2 col-md-4 mt-3">
        
              <ul className="list-unstyled">
                <li className="fw-bold mb-4 text-danger">Quick Links</li>
                <li className="fw-bold mb-2"><a href="/" className="text-light fs-6">Home</a></li>
                <li className="fw-bold mb-2"> <a href="/courses" className="text-light fs-6">Courses</a></li>
                <li className="fw-bold mb-2"> <a href="/aboutus" className="text-light fs-6">About Us</a></li>
                <li className="fw-bold mb-2"> <a href="/contactus" className="text-light fs-6">Contact Us</a></li>
              </ul>
            

        </Col>



        <Col className="col-lg-4 col-md-6">
          
            <div className="mt-3">
              <div className="d-flex align-items-start gap-2 mb-2">
                <FaMapMarkerAlt className="mt-1" />
                <p className="mb-0 small text-secondary">
                  Shri Yogendra Marg, Prabhat Colony, Santacruz East, Mumbai -
                  400055 India
                </p>
              </div>
              <div className="d-flex align-items-start gap-2 mb-2">
                <FaPhoneAlt className="mt-1" />
                <p className="mb-0 small text-secondary">
                  +91-7738155500, +91-22-26110506,
                  <br />
                  +91-22-26103568, +91-7045558181
                </p>
              </div>
              <div className="d-flex align-items-start gap-2">
                <FaEnvelope className="mt-1" />
                <a
                  href="mailto:info@theyogainstitute.org"
                  className="text-light small"
                >
                  info@theyogacenter.org
                </a>
              </div>
            </div>
          

          

          
        </Col>
        <Row className="justify-content-center">
          <hr className="border-secondary my-4" />
          <div className="d-flex justify-content-center align-items-center flex-wrap">
            <p className="mb-0 small text-secondary">
              <FaRegCopyright /> 2025{" "}
              <span className="text-danger">The Yoga Center.</span> All rights
              reserved.
            </p>
          </div>
        </Row>
        
      </Row>
    </footer>
  );
};

export default Footer;
