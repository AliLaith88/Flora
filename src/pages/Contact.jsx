import PageTitle from "../PageTitle";
import BgImage from "../assets/headerBG.jpg";
import { FaHandPointRight } from "react-icons/fa6";
export default function Contact() {
  return (
    <section>
      <PageTitle imageUrl={BgImage} headerText={"Contact Us"} />
      <div className="md:flex-row bg-myWhite flex flex-col-reverse items-center text-gray-800">
        <div className="w-full flex flex-col items-center md:w-1/2">
          <div className="w-10/12 py-4 flex flex-col gap-4">
            {/* email field */}
            <div>
              <label htmlFor="email">Your Email :</label>
              <input
                type="email"
                name="email"
                className="w-full rounded-lg p-2 bg-slate-200 shadow-lg"
              />
            </div>
            {/* message field */}
            <div>
              <label htmlFor="message">Message :</label>
              <textarea
                name="message"
                className="w-full rounded-lg p-2 bg-slate-200 resize-none min-h-80 shadow-lg"
              ></textarea>
            </div>
            <button className="bg-myGreen text-gray-800 p-2 px-4 rounded-lg w-fit shadow-lg">
              Send Us Message
            </button>
          </div>
        </div>
        <div className="py-6 w-full md:w-1/2">
          <div className="container flex flex-col items-center gap-2">
            <div className="w-40 flex flex-col items-center">
              <div className="flex items-center gap-1">
                <FaHandPointRight />
                <p className="font-semibold">Office Hours:</p>
              </div>
              <p>24/7</p>
            </div>
            <div className="w-40 flex flex-col items-center">
              <div className="flex items-center gap-1">
                <FaHandPointRight />
                <p className="font-semibold">Email:</p>
              </div>
              <p>placehpol@hdh.co</p>
            </div>
            <div className="w-40 flex flex-col items-center">
              <div className="flex items-center gap-1">
                <FaHandPointRight />
                <p className="font-semibold">Phone:</p>
              </div>
              <p>213-235-12-09</p>
            </div>
            <div className="w-40 flex flex-col items-center">
              <div className="flex items-center gap-1">
                <FaHandPointRight />
                <p className="font-semibold">Location:</p>
              </div>
              <p>earth - St.125</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24183.142047950456!2d-74.006015!3d40.712776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDAlNDMnNDEuOSJOIDc0wrAwMicwMi44Ilc!5e0!3m2!1sen!2sus!4v1696707092254!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
