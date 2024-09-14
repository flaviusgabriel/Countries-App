type SelectRegionProps = {
  onSelectRegion: (region: string) => void;
};

export const SelectRegion = ({ onSelectRegion }: SelectRegionProps) => {
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectRegion = e.target.value;
    onSelectRegion(selectRegion);
  };
  return (
    <div className="mb-6">
      <select
        className="
          w-full p-3 rounded-lg border
          border-gray-300 dark:border-gray-600
          bg-white dark:bg-gray-700
          text-gray-800 dark:text-gray-200
          focus:outline-none focus:ring-2
          focus:ring-blue-500 dark:focus:ring-blue-300
          transition-colors duration-300 ease-in-out
        "
        onChange={handleRegionChange}
      >
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};
