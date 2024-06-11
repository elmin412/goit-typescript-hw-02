export interface ImageType {
  id: number;
  query: string;
  page: number;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}

export interface SearchResult {
  results: ImageType[];
  total: number;
  total_pages: number;
}

