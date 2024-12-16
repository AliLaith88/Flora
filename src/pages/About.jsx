import PageTitle from "../PageTitle";
import bgImage from "../assets/headerBG.png";
import placeHolderImage from "../assets/personPlaceHolder.png";
export default function About() {
  return (
    <section>
      <PageTitle imageUrl={bgImage} headerText={"About Us"} />
      <div className="container bg-myWhite p-8 mx-auto">
        <p className="text-sm md:w-3/4 md:mx-auto">
          At our travel agency, we pride ourselves on a personalized approach to
          planning unforgettable journeys. We go beyond standard packages,
          tailoring itineraries to your preferences, interests, and budget.
          Offering both popular destinations and hidden gems, we work with local
          guides to provide authentic, insider experiences. From family
          vacations to solo adventures, we specialize in creating seamless
          travel experiences with services like hotel bookings, flights, and
          tours. Our top-notch customer service ensures your trip is not only
          memorable but flawless from start to finish.
        </p>
        <div>
          <h2 className="text-center mt-16 text-2xl font-bold text-gray-800 mb-9">
            Our Team
          </h2>
          <div className=" flex flex-col md:flex-row  gap-12 md:justify-center">
            {/* person1 */}
            <div className="flex flex-col items-center  ">
              <div className="flex justify-center items-center object-cover w-48">
                <img src={placeHolderImage} alt="" />
              </div>
              <h3 className="mt-4">Ali Jamal</h3>
            </div>
            {/* person2 */}
            <div className="flex flex-col items-center ">
              <div className="flex justify-center items-center object-cover w-48">
                <img src={placeHolderImage} alt="" />
              </div>
              <h3 className="mt-4">Karim Salman</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
