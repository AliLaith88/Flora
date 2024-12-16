const Checklist = ({ selectedCountries, onCountryChange }) => {
  const countries = [
    "Turkey",
    "France",
    "USA",
    "Japan",
    "Australia",
    "Brazil",
    "Italy",
    "Egypt",
    "South Africa",
    "Switzerland",
    "China",
    "Bolivia",
    "Italy",
    "USA",
    "Norway",
    "Nepal",
    "Australia",
    "Canada",
  ];

  return (
    <ul>
      {countries.map((country) => (
        <li key={country}>
          <label>
            <input
              type="checkbox"
              checked={selectedCountries.includes(country)}
              onChange={() => onCountryChange(country)}
            />
            {country}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default Checklist;
