import Gallery from '../components/Gallery';

export default function Culture() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">संस्कृतिक कार्यक्रम</h1>
      <p>भजन, लाजिम, बाल्या डान्स यांचे फोटो आणि माहिती येथे पहा.</p>
      <Gallery folder="culture" />
    </div>
  );
}
