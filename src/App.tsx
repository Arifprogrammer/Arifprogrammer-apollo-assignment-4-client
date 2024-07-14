import { useEffect } from "react";
import MainLayout from "./components/layout/MainLayout";
import { useLocation } from "react-router-dom";

function App() {
  //* hooks
  const { pathname } = useLocation();

  //* effects
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    /* window.onbeforeunload = function () {
      return "Data will be lost if you leave the page, are you sure?";
    }; */
  });
  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;
