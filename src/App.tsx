import { useEffect } from "react";
import MainLayout from "./components/layout/MainLayout";

function App() {
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
