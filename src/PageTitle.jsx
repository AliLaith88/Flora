export default function PageTitle({ imageUrl, headerText }) {
  return (
    <section>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="bg-cover bg-center relative h-40 mt-16 md:mt-24"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h2 className="text-white text-xl font-normal z-20">{headerText}</h2>
        </div>
      </div>
    </section>
  );
}
