import React from "react";

export default function Contact() {
  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col text-center">
          <h1 className="display-5 fw-bold text-success">संपर्क साधा</h1>
          <p className="text-muted">आपण खालील माध्यमातून आमच्याशी संपर्क साधू शकता.</p>
        </div>
      </div>

      <div className="row">
        {/* Contact Info */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title text-success">संपर्क माहिती</h5>
              <p className="mb-2"><strong>पत्ता:</strong> गाव कार्यालय, दाभे मोहन, महाबळेश्वर, सातारा, महाराष्ट्र</p>
              <p className="mb-2"><strong>ई-मेल:</strong> <a href="mailto:example@gmail.com">example@gmail.com</a></p>
              <p className="mb-2"><strong>फोन:</strong> <a href="tel:+911234567890">+91 1234567890</a></p>
              <p className="mb-2"><strong>Facebook:</strong> <a href="https://facebook.com/yourpage" target="_blank" rel="noreferrer">fb.com/yourpage</a></p>
              <p className="mb-0"><strong>YouTube:</strong> <a href="https://youtube.com/yourchannel" target="_blank" rel="noreferrer">youtube.com/yourchannel</a></p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title text-success">संपर्क फॉर्म</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">नाव</label>
                  <input type="text" className="form-control" id="name" placeholder="आपले पूर्ण नाव" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">ई-मेल</label>
                  <input type="email" className="form-control" id="email" placeholder="example@gmail.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">संदेश</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="आपला संदेश लिहा..."></textarea>
                </div>
                <button type="submit" className="btn btn-success w-100">पाठवा</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
