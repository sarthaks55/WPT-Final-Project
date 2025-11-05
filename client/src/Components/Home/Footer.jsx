import logo from "../../assets/Images/lotus_logo_svg.svg";
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

const Footer = () => {
  return (
    <footer
      className="text-light pt-5 pb-4"
      style={{ backgroundColor: "#0d0d0d", position: "relative" }}
    >
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6">
            <img
              src={logo}
              alt="The Yoga Institute"
              className="mb-3"
              style={{ width: "220px" }}
            />
            <p className="text-secondary mb-4" style={{ lineHeight: "1.7" }}>
              The Yoga Institute, Santacruz (East), Mumbai, India was founded in
              1918 by Shri Yogendraji, and is the oldest centre of yoga in the
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
          </div>

          <div className="col-lg-4 col-md-6 d-flex flex-column justify-content-center">
            <div className="d-flex align-items-center gap-3 mb-3">
              <FaCalendarAlt color="#E74C3C" size={30} />
              <div>
                <h5 className="mb-0 text-light fw-bold">105+</h5>
                <small className="text-secondary">Number of Years</small>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3 mb-3">
              <FaHeart color="#E74C3C" size={30} />
              <div>
                <h5 className="mb-0 text-light fw-bold">10cr+</h5>
                <small className="text-secondary">Lives Touched</small>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3 mb-3">
              <FaChalkboardTeacher color="#E74C3C" size={30} />
              <div>
                <h5 className="mb-0 text-light fw-bold">1L+</h5>
                <small className="text-secondary">Teachers Certified</small>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <FaBookOpen color="#E74C3C" size={30} />
              <div>
                <h5 className="mb-0 text-light fw-bold">500+</h5>
                <small className="text-secondary">Publications</small>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="row">
              <div className="col-6">
                <ul className="list-unstyled">
                  <li className="fw-bold mb-2">Corporate wellness</li>
                  <li className="fw-bold mb-2">Affiliations</li>
                  <li className="fw-bold mb-2">Careers</li>
                  <li className="fw-bold mb-2">CSR</li>
                  <li className="fw-bold mb-2">Blog Journal</li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled">
                  <li className="fw-bold mb-2">News & Media</li>
                  <li className="fw-bold mb-2">Terms & Conditions</li>
                  <li className="fw-bold mb-2">Privacy Policy</li>
                  <li className="fw-bold mb-2">Locate us</li>
                </ul>
              </div>
            </div>

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
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <p className="mb-0 small text-secondary">
            <FaRegCopyright /> 2025{" "}
            <span className="text-danger">The Yoga Center.</span> All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
