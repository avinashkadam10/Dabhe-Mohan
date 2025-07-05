import { useState } from "react";

const imageData = [
  {
    url: "https://images.unsplash.com/photo-1622442945671-74ad5f5a1d55",
    title: "भजन संध्या",
    description: "गावातील महिलांनी पारंपरिक भजन सादर केले.",
  },
  {
    url: "https://images.pexels.com/photos/3778143/pexels-photo-3778143.jpeg",
    title: "लाजिम नृत्य",
    description: "तरुणांनी गणेशोत्सवात लाजिम सादर केले.",
  },
  {
    url: "https://images.pexels.com/photos/942914/pexels-photo-942914.jpeg",
    title: "बाल्या डान्स",
    description: "शालेय विद्यार्थ्यांनी पारंपरिक बाल्या नृत्य सादर केले.",
  },
  {
    url: "https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg",
    title: "नाट्य स्पर्धा",
    description: "स्थानिक कलाकारांनी सामाजिक नाटके सादर केली.",
  },
  {
    url: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
    title: "हळदी कुंकू कार्यक्रम",
    description: "महिला मंडळातर्फे पारंपरिक कार्यक्रम आयोजित.",
  },
  {
    url: "https://images.pexels.com/photos/1257740/pexels-photo-1257740.jpeg",
    title: "सांस्कृतिक रॅम्प वॉक",
    description: "छोट्यांनी पारंपरिक पोशाखात भाग घेतला.",
  },
  {
    url: "https://images.pexels.com/photos/1054666/pexels-photo-1054666.jpeg",
    title: "गणपती सजावट",
    description: "गावातील सार्वजनिक मंडळांनी सुंदर सजावट केली.",
  },
  {
    url: "https://images.pexels.com/photos/1852382/pexels-photo-1852382.jpeg",
    title: "दांडिया नृत्य",
    description: "शारदीय नवरात्र उत्सवात महिलांचा सहभाग.",
  },
  {
    url: "https://images.pexels.com/photos/3760616/pexels-photo-3760616.jpeg",
    title: "पारंपरिक वाद्य वादन",
    description: "तबला, ढोल, मृदंग सादरीकरण.",
  },
  {
    url: "https://images.pexels.com/photos/3215760/pexels-photo-3215760.jpeg",
    title: "गीत गायन",
    description: "सांस्कृतिक रजनीत गायक कलाकारांचे गायन.",
  },
  {
    url: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg",
    title: "महिला स्पर्धा",
    description: "उखाणे, रांगोळी, पाककला स्पर्धा.",
  },
  {
    url: "https://images.pexels.com/photos/1708630/pexels-photo-1708630.jpeg",
    title: "पोशाख स्पर्धा",
    description: "पारंपरिक पोशाखात लहानग्यांचा सहभाग.",
  },
];

export default function Culture() {
  return (
    <div className="container py-5">
      <h1 className="text-center text-primary fw-bold display-5 mb-4">
        संस्कृतिक कार्यक्रम
      </h1>

      <p className="text-center mb-5 text-muted fs-5">
        दाभे मोहन गावात दरवर्षी विविध संस्कृतिक कार्यक्रमांचे आयोजन केले जाते.
        भजन, लाजिम, बाल्या डान्स, नाट्यस्पर्धा, आणि महिला मंडळांचे हळदी-कुंकू यासारखे कार्यक्रम गावकऱ्यांमध्ये एकतेचा
        अनुभव निर्माण करतात. खाली या सुंदर क्षणांचे काही फोटो आहेत.
      </p>

      {/* Gallery Grid */}
      <div className="row g-4">
        {imageData.map((img, idx) => (
          <div key={idx} className="col-6 col-sm-4 col-md-3">
            <div className="card h-100 shadow-sm border-0">
              <img
                src={img.url}
                alt={img.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center p-2">
                <h6 className="fw-bold mb-1">{img.title}</h6>
                <small className="text-muted">{img.description}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
