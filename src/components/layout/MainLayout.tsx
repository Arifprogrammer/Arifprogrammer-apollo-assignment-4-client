import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[80vh] pt-16">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
