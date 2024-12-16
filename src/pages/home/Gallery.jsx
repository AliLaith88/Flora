import image1 from "../../assets/istanbul.jpg";
import Banff from "../../assets/Banff National Park-canada-min.jpg";
import Great_Barrier_Reef from "../../assets/Great Barrier Reef, Australia-min.jpg";
import Mount_Everest_BaseCamp from "../../assets/Mount Everest Base Camp, Nepal -min.jpg";
import Northern_Lights from "../../assets/Northern Lights, NorwayIceland-min.jpg";
import NY from "../../assets/NY-min.jpg";
export default function Gallery() {
  const galleryData = [
    {
      image: image1,
      country: "turkey",
      city: "istanbul",
      location: "Ayasofya Mosque",
    },
    {
      image: Banff,
      country: "canada",
      city: "unknown",
      location: "Banff National Park",
    },
    {
      image: Great_Barrier_Reef,
      country: "Australia",
      city: "unknown",
      location: "Great Barrier Reef",
    },
    {
      image: Mount_Everest_BaseCamp,
      country: "Nepal",
      city: "unknown",
      location: "Mount Everest Base Camp",
    },
    {
      image: Northern_Lights,
      country: "NorwayIceland",
      city: "unknown",
      location: "Northern Lights",
    },
    {
      image: NY,
      country: "USA",
      city: "unknown",
      location: "NY",
    },
  ];
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-9">Gallery</h2>
        {/* gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {/* gallery images */}
          {galleryData.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg text-left"
            >
              <img
                src={item.image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-80 object-cover hover:scale-105 duration-150"
              />
              <div className="absolute top-0 z-60 w-3/4 p-2">
                <div className="flex flex-wrap gap-1 mb-1">
                  <p className="bg-white text-gray-700 rounded-lg w-fit p-1 px-2">
                    {item.country}
                  </p>
                  <p className="bg-white text-gray-700 rounded-lg w-fit p-1 px-2">
                    {item.city}
                  </p>
                  <p className="bg-white text-gray-700 rounded-lg w-fit p-1 px-2">
                    {item.location}
                  </p>
                </div>

                {/* <button className="bg-myGreen hover:scale-105 h-fit p-1 px-6 duration-100 text-black font-semibold rounded-lg">
                  <Link to="/destinations">Visit</Link>
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
