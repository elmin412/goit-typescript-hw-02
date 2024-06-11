import axios from "axios";
import { ImageType, SearchResult } from "./types";

const client_id = "jYM0nvqWLJ2Klq8UG3tSrbS9QGqoWCvoZJIcNE3yQwc";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Client-ID ${client_id}`;
    return config;
  });

export const fetchGallery = async (searchQuery: string, currentPage: number): Promise<ImageType[]> => {
    const response = await axios.get<SearchResult>("/search/photos", {
        params: {
            query: searchQuery,
            per_page: 12,
            page: currentPage,
        }
    });
    return response.data.results;
};
