export default function Gallery({ folder }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      <p>{folder} related images will be shown here</p>
    </div>
  );
}
