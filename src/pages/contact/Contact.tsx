import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="text-black w-[40%] mx-auto flex flex-col text-center gap-2 mt-40">
      <h2>Get in Touch with Keystroke</h2>
      <p>
        We're here to answer any questions you may have about mechanical
        keyboards, our products, or your order. Feel free to reach out to us
        using the methods below:
      </p>
      <div className="contact-info">
        <ul
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <li>Email: support@keystroke.com</li>
          <li>Phone: (880) 199559545 (Optional)</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
