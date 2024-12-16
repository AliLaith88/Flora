import image from "../../assets/imageHero.png";
import CTAbtn from "../../CTAbtn";
export default function Hero() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* dark overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Your Journey, Your Way
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Experience the world like never before with personalized travel plans,
          hidden destinations, and unforgettable adventures.
        </p>
        <CTAbtn text="Explore Destinations" pageUrl="destinations" />
      </div>
    </div>
  );
}
