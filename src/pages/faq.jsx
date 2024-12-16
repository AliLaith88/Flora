import { useState } from "react";
import PageTitle from "../PageTitle";
import headerImg from "../assets/headerBG.png";
import { IoMdArrowDropdown } from "react-icons/io";

const QuestionBlock = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  const toggleDropDown = () => {
    setOpen((prev) => !prev);
  };
  return (
    <section className="font-roboto bg-myWhite text-gray-800">
      <div
        className="bg-slate-200 p-2 flex flex-col justify-between items-center md:w-3/4 md:mx-auto m-4 rounded-lg"
        onClick={toggleDropDown}
      >
        <div className="flex items-center justify-between w-full p-2">
          <p className="text-gray-800 mr-2">Q / {question}</p>
          <IoMdArrowDropdown />
        </div>
        {open && <p className="px-2 text-sm font-light">{answer}</p>}
      </div>
    </section>
  );
};
const Faq = () => {
  return (
    <section className="font-roboto">
      <PageTitle imageUrl={headerImg} headerText={"FAQ"} />
      <QuestionBlock
        question={"Can I book a trip for a group?"}
        answer={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi doloribus saepe quaerat ipsam, tempore labore, voluptate quos iure tenetur, excepturi ducimus sint? Impedit dignissimos dolore culpa rerum veniam ullam excepturi."
        }
      />
      <QuestionBlock
        question={"How can I refund?"}
        answer={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi doloribus saepe quaerat ipsam, tempore labore, voluptate quos iure tenetur, excepturi ducimus sint? Impedit dignissimos dolore culpa rerum veniam ullam excepturi."
        }
      />
    </section>
  );
};
export default Faq;
