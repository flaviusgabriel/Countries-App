import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useParams } from "react-router-dom";
import { Country } from "../../api/getCountries";
import { Spinner } from "../../components/Spinner/Spinner";
import { useGetCountries } from "../../hooks/useGetCountries";
import "leaflet/dist/leaflet.css";

export const CountryDetails = () => {
  const { cca3 } = useParams<{ cca3: string }>();
  const { countries, loading, error } = useGetCountries();
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    if (countries.length > 0) {
      const selectedCountry = countries.find((c: any) => c.cca3 === cca3);
      setCountry(selectedCountry || null);
    }
  }, [cca3, countries]);

  if (loading) return <Spinner />;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  if (!country) return <p className="text-center">Country not found</p>;

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        {country.name.common}
      </h2>
      <img
        className="w-96 h-auto max-h-40 object-cover rounded-md mb-4"
        alt={`Flag of ${country.name.common}`}
        src={country.flags.svg}
      />
      <div className="mb-4">
        {country.latlng && (
          <MapContainer
            center={[country.latlng[0], country.latlng[1]]}
            zoom={6}
            className="w-full h-60 rounded-lg"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[country.latlng[0], country.latlng[1]]}>
              <Popup>{country.name.common}</Popup>
            </Marker>
          </MapContainer>
        )}
      </div>
      <p className="text-gray-800 dark:text-white mb-2">
        <strong>{country.name.common}</strong> has a population of{" "}
        <strong>{country.population.toLocaleString()}</strong> people, with its
        capital at{" "}
        <strong>{country.capital ? country.capital[0] : "N/A"}</strong>. The
        official language(s) is/are{" "}
        <strong>
          {country.languages
            ? Object.values(country.languages).join(", ")
            : "N/A"}
        </strong>
        {country.currencies && (
          <>
            {" "}
            and the currency is the{" "}
            <strong>{Object.values(country.currencies)[0].name}</strong> (
            <strong>{Object.values(country.currencies)[0].symbol}</strong>).
          </>
        )}
      </p>
      <p className="text-gray-800 dark:text-white mb-2">
        {country.name.common} is located in the region of{" "}
        <strong>{country.region}</strong>, specifically in the sub-region of{" "}
        <strong>{country.subregion || "N/A"}</strong>.
      </p>
      <p className="text-gray-800 dark:text-white">
        Learn more about {country.name.common} by visiting this
        <a
          href={country.maps?.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          Google Maps link
        </a>
        .
      </p>
    </div>
  );
};
