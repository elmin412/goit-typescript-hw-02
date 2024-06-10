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