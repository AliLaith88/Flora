import { useState } from "react";

import image1 from "../../assets/istanbul.jpg";
import Banff from "../../assets/Banff National Park-canada-min.jpg";
import Great_Barrier_Reef from "../../assets/Great Barrier Reef, Australia-min.jpg";
import Mount_Everest_BaseCamp from "../../assets/Mount Everest Base Camp, Nepal -min.jpg";
import Northern_Lights from "../../assets/Northern Lights, NorwayIceland-min.jpg";
import rome from "../../assets/rome,italy-min.jpg";
import Salar_de_Uyuni from "../../assets/Salar de Uyuni, Bolivia-min.jpg";
import shanghai from "../../assets/shanghai-min.jpg";
import Swiss_Alps from "../../assets/Swiss Alps, Switzerland-min.jpg";

import NY from "../../assets/NY-min.jpg";

import TravelCard from "./TravelCard.jsx";
import PageTitle from "../../PageTitle.jsx";
import headerBG from "../../assets/headerBG.png";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import Checklist from "./CheckList.jsx";

const travelData = [
  {
    imageUrl: image1,
    country: "Turkey",
    city: "Istanbul",
    days: 12,
    price: 420,
    deal: "",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Hic facilis beatae deserunt porro nemo, numquam nesciunt cumque vero sequi nam rerum. Laudantium ipsum sed explicabo illo. Dolorem officiis quibusdam earum.",
  },
  {
    imageUrl: Banff,
    country: "Canada",
    city: "Banff National Park",
    days: 12,
    price: 420,
    deal: "",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Hic facilis beatae deserunt porro nemo, numquam nesciunt cumque vero sequi nam rerum. Laudantium ipsum sed explicabo illo. Dolorem officiis quibusdam earum.",
  },
  {
    imageUrl: Great_Barrier_Reef,
    country: "Australia",
    city: "Great Barrier Reef",
    days: 12,
    price: 420,
    deal: "",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Hic facilis beatae deserunt porro nemo, numquam nesciunt cumque vero sequi nam rerum. Laudantium ipsum sed explicabo illo. Dolorem officiis quibusdam earum.",
  },
  {
    imageUrl: Mount_Everest_BaseCamp,
    country: "Nepal",
    city: "Mount Everest Base Camp",
    days: 12,
    price: 420,
    deal: "",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Hic facilis beatae deserunt porro nemo, numquam nesciunt cumque vero sequi nam rerum. Laudantium ipsum sed explicabo illo. Dolorem officiis quibusdam earum.",
  },
  {
    imageUrl: Northern_Lights,
    country: "Norway",
    city: "Northern Lights",
    days: 12,
    price: 420,
    deal: "",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Hic facilis beatae deserunt porro nemo, numquam nesciunt cumque vero sequi nam rerum. Laudantium ipsum sed explicabo illo. Dolorem officiis quibusdam earum.",
  },
  {
    imageUrl: NY,
    country: "USA",
    city: "NY",
    days: 12,
    price: 420,
    deal: "",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Hic facilis beatae deserunt porro nemo, numquam nesciunt cumque vero sequi nam rerum. Laudantium ipsum sed explicabo illo. Dolorem officiis quibusdam earum.",
  },
  {
    imageUrl: rome,
    country: "Italy",
    city: "rome",
    days: 12,
    price: 420,
    deal: "",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Hic facilis beatae deserunt porro nemo, numquam nesciunt cumque vero sequi nam rerum. Laudantium ipsum sed explicabo illo. Dolorem officiis quibusdam earum.",
  },
  {
    imageUrl: Salar_de_Uyuni,
    country: "Bolivia",
    city: "Salar de Uyuni",
    days: 12,
    price: 420,
    deal: "",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Hic facilis beatae deserunt porro nemo, numquam nesciunt cumque vero sequi nam rerum. Laudantium ipsum sed explicabo illo. Dolorem officiis quibusdam earum.",
  },
  {
    imageUrl: shanghai,
    country: "China",
    city: "shanghai",
    days: 12,
    price: 420,
    deal: "",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Hic facilis beatae deserunt porro nemo, numquam nesciunt cumque vero sequi nam rerum. Laudantium ipsum sed explicabo illo. Dolorem officiis quibusdam earum.",
  },
  {
    imageUrl: Swiss_Alps,
    country: "Switzerland",
    city: "Swiss Alps",
    days: 12,
    price: 420,
    deal: "",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Hic facilis beatae deserunt porro nemo, numquam nesciunt cumque vero sequi nam rerum. Laudantium ipsum sed explicabo illo. Dolorem officiis quibusdam earum.",
  },
];

export default function Destinations() {
  const [locationMenu, setLocationMenu] = useState(false);
  const [selectedCountries, setSelectedCountries] = useState([]);

  const toggleLocationMenu = () => {
    setLocationMenu((prev) => !prev);
  };

  // Handle filtering countries
  const handleCountryFilter = (country) => {
    setSelectedCountries((prev) =>
      prev.includes(country)
        ? prev.filter((item) => item !== country)
        : [...prev, country]
    );
  };

  // Filter travel data based on selected countries
  const filteredData = travelData.filter(
    (item) =>
      selectedCountries.length === 0 || selectedCountries.includes(item.country)
  );

  return (
    <section className="font-roboto">
      <PageTitle imageUrl={headerBG} headerText="Destinations" />
      <div className="bg-myBlue h-fit p-4">
        <div
          className="flex justify-between items-center bg-myWhite p-2"
          onClick={toggleLocationMenu}
        >
          <div className="flex items-center gap-6">
            <FaLocationDot size={20} />
            <p className="cursor-default">Location</p>
          </div>
          <IoMdArrowDropdown size={20} />
        </div>
        {locationMenu && (
          <div className="bg-myWhite w-full p-2">
            <Checklist
              selectedCountries={selectedCountries}
              onCountryChange={handleCountryFilter}
            />
            {console.log(selectedCountries)}
          </div>
        )}
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 p-4 xl:p-16">
        {filteredData.map((data) => (
          <TravelCard
            key={data.city}
            imageUrl={data.imageUrl}
            country={data.country}
            city={data.city}
            days={data.days}
            price={data.price}
            deal={data.deal}
            description={data.description}
          />
        ))}
      </div>
    </section>
  );
}
