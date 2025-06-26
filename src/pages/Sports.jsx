import Gallery from '../components/Gallery';

export default function Sports() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">क्रीडा</h1>
      <p>वर्षानुसार क्रीडा स्पर्धांची माहिती.</p>
      <Gallery folder="sports" />
    </div>
  );
}
