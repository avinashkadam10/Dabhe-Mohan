import { useState } from "react";


const imageData = {
  2024: [
    {
      url: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
      title: "फुटबॉल स्पर्धा",
      description: "२०२४ च्या वार्षिक फुटबॉल स्पर्धेत स्थानिक संघ विजयी ठरले.",
    },
    {
      url: "https://images.pexels.com/photos/61129/pexels-photo-61129.jpeg",
      title: "व्हॉलीबॉल सामना",
      description: "महिला व्हॉलीबॉल टीमने उत्कृष्ट कामगिरी केली.",
    },
    // Add more...
  ],
  2023: [
    {
      url: "https://images.unsplash.com/photo-1566256651193-c9f2c03c6f94",
      title: "टेनिस टूर्नामेंट",
      description: "स्थानिक शाळेतील विद्यार्थ्यांनी सहभाग घेतला.",
    },
  ],
  2022: [
    {
      url: "https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg",
      title: "स्कीइंग इव्हेंट",
      description: "थंडीमध्ये प्रथमच स्कीइंग स्पर्धा आयोजित.",
    },
  ],
};

export default function SportsGallery() {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [modalData, setModalData] = useState(null);

  return (
    <div className="container py-5">
      <h1 className="text-center text-success fw-bold display-5 mb-5">
        Sports Gallery
      </h1>

      {/* Year Selector */}
      <div className="mb-4 text-center">
        <label htmlFor="yearSelect" className="form-label fw-semibold me-2">
          Select Year:
        </label>
        <select
          id="yearSelect"
          className="form-select d-inline-block w-auto"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          {Object.keys(imageData).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Image Grid */}
      <div className="row g-4">
        {imageData[selectedYear].map((img, idx) => (
          <div key={idx} className="col-6 col-sm-4 col-md-3">
            <div
              className="card h-100 shadow border-0"
              style={{ cursor: "pointer" }}
              onClick={() => setModalData(img)}
            >
              <img
                src={img.url}
                alt={img.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <small className="text-muted">{img.title}</small>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Modal with Blur */}
      {modalData && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(6px)",
            zIndex: 1055,
          }}
          onClick={() => setModalData(null)} // Close on backdrop click
        >
          <div
            className="position-relative"
            style={{ maxWidth: "600px", width: "90%" }}
            onClick={(e) => e.stopPropagation()} // Prevent backdrop close when image clicked
          >
            <img
              src={modalData.url}
              alt={modalData.title}
              className="w-100 rounded shadow"
              style={{ objectFit: "cover", maxHeight: "80vh" }}
            />
            <div
              className="position-absolute bottom-0 start-0 end-0 p-3 text-white"
              style={{
                background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                borderBottomLeftRadius: "0.375rem",
                borderBottomRightRadius: "0.375rem",
              }}
            >
              <h5 className="mb-1">{modalData.title}</h5>
              <p className="mb-0 small">{modalData.description}</p>
            </div>
            <button
              className="btn btn-light position-absolute top-0 end-0 m-2"
              onClick={() => setModalData(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
