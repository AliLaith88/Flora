import About from "./About";
import Hero from "./Hero";
import Feature from "./Feature";
import img1 from "../../assets/feature1.png";
import img2 from "../../assets/feature2.png";
import img3 from "../../assets/feature3.png";
import Benefits from "./Benefits";
import Cta from "./Cta";
import Parteners from "./Parteners";
import Gallery from "./Gallery";
export default function Home() {
  return (
    <div className="font-roboto">
      <Hero />
      <About />
      <Feature
        title="CUSTOM VACATION"
        paragrah="Travel is personal, and our custom vacation packages are designed to reflect that. Whether you dream of vibrant cities, serene beaches, or thrilling adventures, we craft trips tailored to your preferences, pace, and budget.
Enjoy unique itineraries, authentic experiences, and the flexibility to explore your way. Let us turn your travel dreams into unforgettable memories."
        ctaText="Contact Us"
        url={img1}
        redirectTo="/contact"
      />
      <Feature
        title="ADVENTURE TRAVEL"
        paragrah="Adventure travel goes beyond ordinary vacations, offering thrilling experiences like hiking, biking, kayaking, and wildlife safaris in breathtaking destinations. It immerses you in nature, culture, and the unknown, pushing boundaries and creating unforgettable memories."
        ctaText="Your Next Adventure"
        leftToRight={false}
        url={img2}
        redirectTo="/destinations"
      />
      <Feature
        title="GUIDED TOURS"
        paragrah="Guided tours offer a hassle-free way to explore destinations with expert local guides. Enjoy rich cultural insights, visit iconic landmarks, and uncover hidden gems while experiencing a deeper connection to each place—all without the stress of planning."
        ctaText="Book Now"
        url={img3}
        redirectTo="/destinations"
      />
      <Benefits />
      <Cta />
      <Parteners />
      <Gallery />
    </div>
  );
}
