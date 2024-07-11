import { FaTruck, FaClock, FaMoneyCheckAlt } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  Aos.init();
  return (
    <>
      <div
        className="border-4 border-[#F261C2] hover:border-[#65cbf0] py-8 px-4 lg:p-10 text-center space-y-4 rounded-md"
        data-aos="fade-up"
        data-aos-delay="40"
        data-aos-duration="2000"
      >
        <FaTruck className="text-7xl mx-auto text-[#65cbf0] hover:text-[#F261C2]" />
        <p className="font-bold text-3xl tracking-widest text-black">
          Free Shipping
        </p>
        <p>
          Free shipping on all toys! Shop without hidden costs and get them
          delivered straight to you. Explore our vast selection now!
        </p>
      </div>
      <div
        className="border-4 border-[#65cbf0] py-8 px-4 lg:p-10 text-center space-y-4 rounded-md"
        data-aos="fade-up"
        data-aos-delay="40"
        data-aos-duration="2000"
      >
        <FaClock className="text-7xl mx-auto text-[#F261C2]" />
        <p className="font-bold text-3xl tracking-widest text-black">
          Top-notch Support
        </p>
        <p>
          24/7 support! Our friendly team is always here to help, any day, any
          time. Shop with confidence, knowing assistance is just a click away.
        </p>
      </div>
      <div
        className="border-4 border-[#F261C2] hover:border-[#65cbf0] py-8 px-4 lg:p-10 text-center space-y-4 rounded-md"
        data-aos="fade-up"
        data-aos-delay="40"
        data-aos-duration="2000"
      >
        <FaMoneyCheckAlt className="text-7xl mx-auto text-[#65cbf0] hover:text-[#F261C2]" />
        <p className="font-bold text-3xl tracking-widest text-black">
          Money Return
        </p>
        <p>
          Easy returns! Not happy with your purchase? No problem! We offer a
          hassle-free return process for your peace of mind. Shop risk-free
          today!
        </p>
      </div>
    </>
  );
};

export default Services;
