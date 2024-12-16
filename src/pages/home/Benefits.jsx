import compassLogo from "../../assets/compass.png";
import mapLogo from "../../assets/map.png";
import mountainLogo from "../../assets/mountain.png";
export default function Benefits() {
  const benefitsData = [
    {
      logo: compassLogo, // Replace with your logo URL
      title: "Authentic Local Experiences",
      description:
        "Enjoy insider experiences with the help of local tour guides in various countries.",
    },
    {
      logo: mapLogo, // Replace with your logo URL
      title: "Personalized Travel Planning",
      description:
        "We take the time to understand your preferences, interests, and budget to create a fully customized itinerary tailored just for you.",
    },
    {
      logo: mountainLogo, // Replace with your logo URL
      title: "Unique Destinations",
      description:
        "Discover a wide variety of destinations, including hidden gems often overlooked by other agencies.",
    },
  ];

  return (
    <section className="bg-white py-12 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-9">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="bg-white p-6 text-center">
              <img
                src={benefit.logo}
                alt={benefit.title}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
