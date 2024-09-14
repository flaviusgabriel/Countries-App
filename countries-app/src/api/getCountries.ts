import axios from "axios";
import { API_URLS } from "./endpoints";

export type Country = {
  name: {
    common: string;
  };
  cca3: string;
  flags: {
    svg: string;
  };
  population: number;
  region: string;
  subregion?: string;
  capital?: string[];
  languages?: Record<string, string>;
  currencies?: Record<string, { name: string; symbol: string }>;
  maps?: {
    googleMaps: string;
    openStreetMaps: string;
  };
  latlng?: [number, number];
};

export const getCountries = async (): Promise<Country[]> => {
  try {
    const response = await axios.get<Country[]>(
      `https://restcountries.com/v3.1${API_URLS.ALL_COUNTRIES}`
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching countries:", error);
    throw error;
  }
};
