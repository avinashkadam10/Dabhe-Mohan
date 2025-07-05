import { useState, useEffect } from "react";

const projectData = [
  {
    title: "जलसंवर्धन प्रकल्प",
    description: "गावात पाण्याची कमतरता दूर करण्यासाठी नवीन जलसाठा बांधण्यात आला आहे.",
    url: "https://images.unsplash.com/photo-1581091012184-7e0cdfbb6791",
  },
  {
    title: "वाचनालय",
    description: "गावातील मुलांसाठी आणि नागरिकांसाठी नवे वाचनालय उभारण्यात आले आहे.",
    url: "https://images.unsplash.com/photo-1581090700227-1d94d38b4d2a",
  },
  {
    title: "सीसी रस्ता विकास",
    description: "मुख्य रस्त्यावर काँक्रिट रस्त्याचे बांधकाम पूर्ण झाले.",
    url: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d",
  },
  {
    title: "स्वच्छता गृह",
    description: "गावात स्वच्छ भारत अभियान अंतर्गत नवीन शौचालयांची निर्मिती झाली आहे.",
    url: "https://images.unsplash.com/photo-1581574209873-5c3be8759075",
  },
  {
    title: "एलईडी लाईट्स",
    description: "गावात रात्रीसाठी एलईडी लाईट्स बसविण्यात आल्या आहेत.",
    url: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9",
  },
  {
    title: "आरोग्य केंद्र",
    description: "गावासाठी एक लघु आरोग्य केंद्र कार्यान्वित झाले आहे.",
    url: "https://images.unsplash.com/photo-1588776814546-cfe1a1be0ed1",
  },
];

export default function Projects() {
  useEffect(() => {
    const items = document.querySelectorAll(".project-card");
    items.forEach((item, i) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(20px)";
      setTimeout(() => {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
        item.style.transition = "all 0.5s ease-in-out";
      }, i * 100);
    });
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center text-primary fw-bold display-5 mb-4">
        गावातील नवे प्रकल्प
      </h1>

      <p className="text-center mb-5 text-muted fs-5">
        दाभे मोहन गावात जलसंवर्धन, आरोग्य, वाचनालय, स्वच्छता आणि रस्ते विकास अशा
        विविध प्रकल्पांचे काम चालू असून, या प्रकल्पांनी गावाचा चेहरामोहरा बदलण्यास
        मदत केली आहे.
      </p>

      {/* Stylish Project Grid */}
      <div className="row g-4">
        {projectData.map((proj, idx) => (
          <div key={idx} className="col-12 col-sm-6 col-md-4">
            <div
              className="project-card card border-0 h-100 shadow-lg"
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <div
                style={{
                  background: "linear-gradient(to right, #6EE7B7, #3B82F6)",
                  padding: "10px 16px",
                }}
              >
                <h5 className="text-white m-0">{proj.title}</h5>
              </div>
              <img
                src={proj.url}
                alt={proj.title}
                className="card-img-top"
                style={{
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "0",
                }}
              />
              <div className="card-body">
                <p className="card-text text-muted">{proj.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
