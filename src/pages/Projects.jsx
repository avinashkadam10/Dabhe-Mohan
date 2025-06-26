import Gallery from '../components/Gallery';

export default function Projects() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">प्रकल्प</h1>
      <p>गावातील नविन प्रकल्पांची माहिती खाली दिली आहे.</p>
      <Gallery folder="projects" />
    </div>
  );
}
