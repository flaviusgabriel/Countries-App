import { Link } from "react-router-dom";
import { Country } from "../../api/getCountries";

type CountryCardProps = {
  country: Country;
};

export const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 transition-colors duration-300">
      <img
        className="w-full h-32 object-cover rounded-t-md"
        alt="Flag of country"
        src={country.flags.svg}
      />
      <h2 className="text-lg font-bold mt-4 text-gray-800 dark:text-white">
        {country.name.common}
      </h2>
      <p className="text-gray-600 dark:text-gray-400">
        <strong>Population:</strong> {country.population}
      </p>
      <p className="text-gray-600 dark:text-gray-400">
        <strong>Region:</strong> {country.region}
      </p>
      <p className="text-gray-600 dark:text-gray-400">
        <strong>Capital:</strong> {country.capital}
      </p>
      <Link to={`/country/${country.cca3}`}>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4 w-full transition-colors duration-200">
          {"More details"}
        </button>
      </Link>
    </div>
  );
};
