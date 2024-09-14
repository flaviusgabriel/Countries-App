import { useState } from "react";

type SearchCountryProps = {
  onSearch: (query: string) => void;
};

export const SearchCountry = ({ onSearch }: SearchCountryProps) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };
  return (
    <div className="mb-6">
      <input
        className="w-full p-3 rounded-lg border
        border-gray-300 dark:border-gray-600
        bg-white dark:bg-gray-700
        text-gray-800 dark:text-gray-200
        placeholder-gray-400 dark:placeholder-gray-500
        focus:outline-none focus:ring-2
        focus:ring-blue-500 dark:focus:ring-blue-300
        transition-colors duration-300 ease-in-out"
        type="text"
        placeholder="Search by country or capital..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
};
