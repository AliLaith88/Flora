import { Link } from "react-router";
export default function CTAbtn({ text, pageUrl }) {
  return (
    <Link to={pageUrl}>
      <button className="bg-myGreen hover:scale-105 duration-100 text-black font-semibold py-3 px-6 rounded-lg">
        {text}
      </button>
    </Link>
  );
}
