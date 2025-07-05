import Navbar from './Navbar';

export default function Header() {
  return (
    <header>
      <div className=" text-white text-center py-3 fs-4 fw-semibold" style={{backgroundColor:"linear-gradient(to left, #AEF359, #ffffff)"}}>
        आमचं गाव: दाभे मोहन
      </div>
      <Navbar />
    </header>
  );
}
