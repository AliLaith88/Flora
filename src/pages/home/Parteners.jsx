import logo1 from "../../assets/logo1.jpg";
import logo2 from "../../assets/logo2.jpg";
import logo3 from "../../assets/logo3.jpg";
import logo4 from "../../assets/logo4.jpg";
import logo5 from "../../assets/logo5.jpg";
export default function Partners() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-9">Our Partners</h2>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-center">
          {/* Replace placeholders with actual logo images */}
          <img src={logo1} alt="Partner 1" className="mx-auto w-28" />
          <img src={logo2} alt="Partner 2" className="mx-auto w-28" />
          <img src={logo3} alt="Partner 3" className="mx-auto w-28" />
          <img src={logo4} alt="Partner 4" className="mx-auto w-28" />
          <img src={logo5} alt="Partner 5" className="mx-auto w-28" />
        </div>
      </div>
    </section>
  );
}
