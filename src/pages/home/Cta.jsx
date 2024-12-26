import CTAbtn from "../../CTAbtn";
import seaImage from "../../assets/seaImage.jpg";
export default function Cta() {
  return (
    <section
      className="relative bg-cover bg-center bg-gray-900 py-16 px-4"
      style={{
        backgroundImage: `url(${seaImage})`, // Replace with your image URL
      }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 pointer-events-none"></div>
      {/* content */}
      <div className="relative container mx-auto text-center text-white ">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to turn your dream vacation into reality ?
        </h2>
        <p className="mb-6">
          Get in touch with us today to start planning your personalized travel
          experience.
        </p>
        <CTAbtn text="Customize Your Plan" pageUrl="/destinations" />
      </div>
    </section>
  );
}
