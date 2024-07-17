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
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      return "Are you sure you want to leave? Your data may be lost.";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  });
  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;
