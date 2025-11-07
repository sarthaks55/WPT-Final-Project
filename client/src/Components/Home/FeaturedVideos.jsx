import React from "react";
import { FaPlay } from "react-icons/fa";

const FeaturedVideos = () => {
  const videos = [
    {
        id: 1,
        views: "2.2 MILLION+ VIEWS",
        title: "10 Minute Daily Yoga Routine for Flexibility & Strength",
        thumb: "https://img.youtube.com/vi/v7AYKMP6rOE/hqdefault.jpg",
        color: "#e74c3c",
        url: "https://www.youtube.com/watch?v=v7AYKMP6rOE",
    },
    {
      id: 2,
      views: "6 MILLION+ VIEWS",
      title: "Daily Yoga Routine for Hair & Skin Health",
      thumb:
        "https://img.youtube.com/vi/VaoV1PrYft4/hqdefault.jpg",
      color: "#c0392b",
      url: "https://www.youtube.com/watch?v=VaoV1PrYft4",
    },
    {
      id: 3,
      views: "3 MILLION+ VIEWS",
      title: "5 Asanas to Improve Digestion and Immunity",
      thumb:
        "https://img.youtube.com/vi/sTANio_2E0Q/hqdefault.jpg",
      color: "#c0392b",
      url: "https://www.youtube.com/watch?v=sTANio_2E0Q",
    },
  ];

  return (
    <div
      className="py-5"
      style={{
        backgroundColor: "#f7d8c4",
        borderRadius: "20px",
      }}
    >
      <div className="container">
        {/* Header Section */}
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
          <div className="d-flex align-items-center">
            <FaPlay
              size={30}
              className="text-dark me-2"
              style={{ marginTop: "-4px" }}
            />
            <div>
              <h5 className="fw-semibold mb-0">Featured</h5>
              <h2 className="fw-bold text-dark">Yoga Videos</h2>
              <hr
                style={{
                  width: "60px",
                  height: "2px",
                  backgroundColor: "#b55a30",
                  border: "none",
                  marginTop: "8px",
                }}
              />
            </div>
          </div>
          <p
            className="text-dark mt-3 mt-md-0"
            style={{
              maxWidth: "650px",
              fontSize: "1rem",
              lineHeight: "1.7",
              textAlign: "justify",
            }}
          >
            Explore timeless wisdom on yoga, health,
            wellness, and mindfulness. Watch these videos to learn simple
            yet powerful techniques for a healthier body and mind.
          </p>
        </div>

        <div className="row justify-content-center g-4">
          {videos.map((video) => (
            <div className="col-md-4 col-sm-6" key={video.id}>
              <div
                className="position-relative shadow-sm rounded-4 overflow-hidden"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "16px",
                  cursor: "pointer",
                }}
                onClick={() => window.open(video.url, "_blank")}
              >
                <img
                  src={video.thumb}
                  alt={video.title}
                  className="img-fluid w-100"
                  style={{
                    height: "280px",
                    objectFit: "cover",
                    borderRadius: "16px",
                  }}
                />

                <div
                  className="position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center"
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    transition: "0.3s",
                  }}
                >
                  <FaPlay size={28} className="text-dark" />
                </div>
              </div>

              <div className="mt-3 text-center">
                <p
                  className="fw-bold mb-1"
                  style={{ color: video.color, fontSize: "1rem" }}
                >
                  {video.views}
                </p>
                <h6
                  className="fw-bold text-dark"
                  style={{ textTransform: "uppercase" }}
                >
                  {video.title}
                </h6>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="fw-semibold text-dark text-decoration-none"
            style={{
              borderBottom: "2px solid #000",
              paddingBottom: "3px",
              fontSize: "1.05rem",
            }}
          >
            Explore More <span className="ms-1"><strong>{'>'}</strong></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedVideos;
