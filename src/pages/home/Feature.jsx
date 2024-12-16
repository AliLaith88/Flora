import CTAbtn from "../../CTAbtn";

export default function Feature({
  title,
  paragrah,
  ctaText,
  leftToRight = true,
  url,
  redirectTo,
}) {
  return (
    <section className="bg-white py-12 px-8">
      <div
        className={`container mx-auto flex flex-col md:flex-row gap-8 items-center ${
          leftToRight ? "" : "md:flex-row-reverse"
        }`}
      >
        {/* Left Column */}
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-gray-600 mb-6">{paragrah}</p>
          <CTAbtn text={ctaText} pageUrl={redirectTo} />
        </div>

        {/* Right Column */}
        <div
          className={`flex justify-center md:w-1/2 ${
            leftToRight ? "md:justify-end" : "md:justify-start"
          }`}
        >
          <img
            src={url}
            alt="Feature Illustration"
            className="w-3/4 rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
