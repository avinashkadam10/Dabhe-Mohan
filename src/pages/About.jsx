import React from "react";

export default function About() {
  return (
    <>
      <div className="container py-4">
        <div className="row">
          {/* Left Column - Description */}
          <div className="col-6 pr-4">
            <h2 className="text-xl font-bold mb-2">दाभे मोहन</h2>
            <p>
              दाभे मोहन हे गाव महाराष्ट्र राज्यातील सातारा जिल्ह्यातील महाबळेश्वर तालुक्यात स्थित आहे. हे गाव उपजिल्हा मुख्यालय
              (महाबळेश्वर तहसील कार्यालय) पासून सुमारे २० किमी आणि जिल्हा मुख्यालय सातारा पासून ९५ किमी अंतरावर आहे.
              २००९ च्या आकडेवारीनुसार, दाभे मोहन हे स्वतःचे ग्रामपंचायत असलेले गाव आहे.
            </p>

            <p className="mt-2">
              दाभे मोहन गाव सातारा परिसरात एक महत्त्वाचे स्थान राखून आहे. पुढील विभागांमध्ये तुम्हाला गावाची लोकसंख्या, साक्षरता,
              घरांची संख्या, बालकांची माहिती, जाती निहाय तपशील, क्षेत्रफळ, पिनकोड, स्थानिक प्रशासन, जवळची गावे,
              तसेच कनेक्टिव्हिटी यासारखी सविस्तर माहिती मिळेल.
            </p>

            <h3 className="text-lg font-semibold mt-4">दाभे मोहन विषयी</h3>
            <p className="mt-1">
              २०११ च्या जनगणनेनुसार, दाभे मोहन गावाचा स्थानिक कोड किंवा गाव कोड 562983 आहे. या गावाचे एकूण भौगोलिक क्षेत्रफळ
              ७७५ हेक्टर आहे. सर्व मुख्य आर्थिक उपक्रमांसाठी महाबळेश्वर हे दाभे मोहन गावाचे सर्वात जवळचे शहर आहे, जे
              सुमारे २० किमी अंतरावर आहे.
            </p>

            <p className="mt-2">
              स्थानिक प्रशासनाच्या दृष्टीने, दाभे मोहन गाव पंचायत राज प्रणालीअंतर्गत एक निवडलेला सरपंच द्वारे प्रशासित केले जाते.
              हे प्रशासन भारताच्या संविधान आणि पंचायती राज अधिनियमानुसार चालवले जाते. हे गाव वाई विधानसभा मतदारसंघात येते,
              तर सातारा लोकसभा मतदारसंघात याचा समावेश होतो. स्थानिक प्रशासन गावातील नागरी सुविधा आणि विकास कामे
              करण्यासाठी जबाबदार आहे.
            </p>
          </div>

          {/* Right Column - Table */}
          <div className="col-6">
            <h2 className="text-xl font-bold mb-4">दाभे मोहन - गावाचा आढावा</h2>
            <table className="table-auto w-full border border-gray-300 text-sm">
              <tbody>
                <tr className="border-b">
                  <td className="border px-4 py-2 font-semibold">ग्रामपंचायत</td>
                  <td className="border px-4 py-2">दाभे मोहन</td>
                </tr>
                <tr className="border-b">
                  <td className="border px-4 py-2 font-semibold">तालुका</td>
                  <td className="border px-4 py-2">महाबळेश्वर</td>
                </tr>
                <tr className="border-b">
                  <td className="border px-4 py-2 font-semibold">जिल्हा</td>
                  <td className="border px-4 py-2">सातारा</td>
                </tr>
                <tr className="border-b">
                  <td className="border px-4 py-2 font-semibold">राज्य</td>
                  <td className="border px-4 py-2">महाराष्ट्र</td>
                </tr>
                <tr className="border-b">
                  <td className="border px-4 py-2 font-semibold">पिनकोड</td>
                  <td className="border px-4 py-2">माहिती उपलब्ध नाही</td>
                </tr>
                <tr className="border-b">
                  <td className="border px-4 py-2 font-semibold">क्षेत्रफळ</td>
                  <td className="border px-4 py-2">७७५ हेक्टर</td>
                </tr>
                <tr className="border-b">
                  <td className="border px-4 py-2 font-semibold">लिंगानुपात (2011)</td>
                  <td className="border px-4 py-2">१२७७ स्त्रिया प्रति १००० पुरुष</td>
                </tr>
                <tr className="border-b">
                  <td className="border px-4 py-2 font-semibold">लोकसंख्या (2011)</td>
                  <td className="border px-4 py-2">१६४</td>
                </tr>
                <tr className="border-b">
                  <td className="border px-4 py-2 font-semibold">गृहसंख्या</td>
                  <td className="border px-4 py-2">४३</td>
                </tr>
                <tr className="border-b">
                  <td className="border px-4 py-2 font-semibold">विधानसभा मतदारसंघ</td>
                  <td className="border px-4 py-2">वाई</td>
                </tr>
                <tr className="border-b">
                  <td className="border px-4 py-2 font-semibold">लोकसभा मतदारसंघ</td>
                  <td className="border px-4 py-2">सातारा</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">सर्वात जवळचे शहर</td>
                  <td className="border px-4 py-2">महाबळेश्वर (२० किमी)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Map Section */}
        <div className="row mt-5">
          <div className="col-12">
            <h2 className="text-xl font-bold mb-4">दाभे मोहन - गावाचा नकाशा</h2>
            <div className="overflow-hidden rounded-lg shadow border" style={{ height: "400px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15411.914636489342!2d73.6153541!3d17.8331907!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2719a38c56705%3A0x4db2c52058362bd0!2sDabhe%20Mohan%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1720175800000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="दाभे मोहन गावाचा नकाशा"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 mt-3">
            <h2 className="text-xl font-bold mb-4">गावी कसे पोहोचावे?</h2>

            <p>
              दाभे मोहन गाव गाठण्यासाठी सर्वात सोपा मार्ग म्हणजे <strong>महाबळेश्वर बस स्थानक</strong> गाठून तिथून <strong>दाभे मोहनकडे जाणारी बस</strong> घेणे.
            </p>

            <ul className="list-disc pl-5 mt-4 space-y-1">
              <li>सार्वजनिक बस सेवा: ५ किमीच्या आतील अंतरावर उपलब्ध</li>
              <li>खाजगी बस सेवा: १० किमीहून अधिक अंतरावर</li>
            </ul>

            <p className="mt-2">
              सर्वात जवळचे शहर म्हणजे <strong>महाबळेश्वर (२० किमी)</strong>, जेथे मुख्य बाजारपेठ, रुग्णालये, बँका आणि शासकीय सेवा उपलब्ध आहेत.
            </p>
          </div>
        </div>


      </div>
    </>
  );
}
