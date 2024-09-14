import { useEffect } from "react";
import { useState } from "react";
import { Country, getCountries } from "../api/getCountries";

export const useGetCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getCountries();
        setCountries(data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch countries");
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);
  return { countries, loading, error };
};
