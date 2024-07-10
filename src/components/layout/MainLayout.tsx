import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div className="min-h-[80vh] pt-16">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
