import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[80vh] pt-16">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
