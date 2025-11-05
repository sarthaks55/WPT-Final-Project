import offer1 from "../../assets/homeImages/offer1.jpeg";
import offer2 from "../../assets/homeImages/offer2.jpg";

const YogaHighlights = () => {
  const cards = [
    {
      id: 1,
      title: "Fellowship in Yoga Therapy",
      img: offer1,
      info: "The goal of this 'Fellowship in Yoga Therapy' course is to provide value added qualification.",
      link: "#",
    },
    {
      id: 2,
      title: "Alibaug Retreat",
      img: offer2,
      info: "The Yoga Institute's Alibaug retreat offers serene getaways where nature heals and yoga rests.",
      link: "#",
    },
  ];

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left side - Cards */}
        <div className="col-lg-8">
          <div className="row g-4">
            {cards.map((card) => (
              <div key={card.id} className="col-md-6">
                <div className="card border-0 shadow-sm h-100">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="card-img-top"
                    style={{
                      height: "280px",
                      objectFit: "cover",
                      borderTopLeftRadius: "0.5rem",
                      borderTopRightRadius: "0.5rem",
                    }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold">{card.title}</h5>
                    <p className="card-text text-muted" style={{ fontSize: "0.95rem" }}>
                      {card.info}
                    </p>
                    <a href={card.link} className="text-primary fw-semibold text-decoration-none">
                      Explore in detail &gt;&gt;
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-4 mt-5 mt-lg-0">
          <div className="text-center text-lg-start px-3">
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start mb-2">
              <i className="bi bi-person-raised-hand fs-3 me-2 text-primary"></i>
              <h3 className="fw-bold m-0">Our Highlights</h3>
            </div>
            <p className="text-muted mt-3">
              These wellness initiatives will harmonize your energies and bring that
              much-needed balance and peace into your life. Explore them now!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YogaHighlights;
