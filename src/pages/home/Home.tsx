import keyboard from "../../assets/images/keyboard.webp";
import Services from "./services/Services";

const Home = () => {
  return (
    <main className="my-container">
      {/* Hero */}
      <section className="my-24">
        <img src={keyboard} alt="keyboard" className="size-full rounded-xl" />
      </section>

      {/* Services */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 my-24">
        <Services />
      </section>
    </main>
  );
};

export default Home;
