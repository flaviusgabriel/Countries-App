import { useEffect } from "react";
import { useState } from "react";
import { CountryCard } from "../../components/CountryCard/CountryCard";
import { SearchCountry } from "../../components/SearchCountry/SearchCountry";
import { SelectRegion } from "../../components/SelectRegion/SelectRegion";
import { Spinner } from "../../components/Spinner/Spinner";
import { useGetCountries } from "../../hooks/useGetCountries";

export const Home = () => {
  const { countries, loading, error } = useGetCountries();
  const [filteredCountries, setFilterCountries] = useState(countries);
  const [regionFilter, setRegionFilter] = useState("All");

  const handleSearch = (query: string) => {
    filterCountries(query, regionFilter);
  };

  const handleRegionSelect = (region: string) => {
    setRegionFilter(region);
    filterCountries("", region);
  };

  const filterCountries = (query: string, region: string) => {
    const lowerCaseQuery = query.toLowerCase();

    let filtered = countries.filter(
      (country) =>
        country.name.common.toLowerCase().includes(lowerCaseQuery) ||
        (country.capital &&
          country.capital[0].toLowerCase().includes(lowerCaseQuery))
    );

    if (region !== "All") {
      filtered = filtered.filter((country) => country.region === region);
    }
    setFilterCountries(filtered);
  };

  useEffect(() => {
    setFilterCountries(countries);
  }, [countries]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
        Country List
      </h2>
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
        <SearchCountry onSearch={handleSearch} />
        <SelectRegion onSelectRegion={handleRegionSelect} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};
