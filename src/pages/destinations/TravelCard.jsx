import { Link } from "react-router-dom";
const TravelCard = ({
  imageUrl,
  country,
  city,
  linkTo,
  days,
  price,
  deal,
  description,
}) => {
  return (
    <div className="border rounded-lg shadow-lg w-80 p-4">
      {/* Image */}
      <div className="relative">
        <img
          src={imageUrl} // Replace with actual image URL
          alt="Turkey Istanbul"
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <span className="absolute top-2 left-2 bg-white text-gray-700 rounded-lg w-fit p-1 px-2">
          {country} - {city}
        </span>
      </div>

      {/* Content */}
      <div className="py-4">
        <Link to="/contact">
          <button className="bg-myGreen text-black py-2 px-4 rounded hover:scale-105 duration-100">
            Book Now
          </button>
        </Link>

        <div className="text-right text-lg font-semibold mt-2">
          {days} days from ${price}
        </div>
        {deal && (
          <p className="text-red-500 font-bold mt-2">
            {/* Book now for 2025 and receive €200 off! */}
            {deal}
          </p>
        )}
        <p className="text-gray-700 mt-2 text-sm">
          {/* A vibrant city bridging Europe and Asia, known for its rich history,
          stunning architecture, and cultural diversity. As the former capital
          of the Byzantine and Ottoman Empires, it boasts iconic landmarks like
          the Hagia Sophia and Blue Mosque. */}
          {description}
        </p>
      </div>
    </div>
  );
};

export default TravelCard;
