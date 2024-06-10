import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import '../App/App.css';
import {fetchGallery} from '../../gallery-api';
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { ImageType } from './App.types';



function App() {
  const [images, setImages] = useState<ImageType>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
  const [query, setQuery] = useState<string>("")
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [description, setDescription] = useState<string>("")
  
  const openModal = (bigImg: string, alt: string): void => {
    setSelectedImage(bigImg)
    setDescription(alt)
    setModalIsOpen(true)
  }

  const modalClose = (): void => {
    setSelectedImage("")
    setDescription("")
    setModalIsOpen(false)
  }

  const handleSearch = async (newQuery: string): void => {
    setQuery(newQuery)
    setPage(1)
    setImages([])
  };
  
  const handleMoreBtn = (): void => {
    setPage(page + 1);
   
  };

  useEffect(() => {
    if (query === "") {
      return; 
    }
  async function getGallery<T>(): Promise<void> {
    try {
        setLoading(true);
        const data: ImageType = await fetchGallery(
          query, 
          page,
        );
        setImages((prevImages) => {
          return [...prevImages, ...data];
        }) }
       catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      } }
    getGallery()
    
  }, [page, query]);



  return (
    <>
      <h1> Search Photo</h1>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader/>}
      {error && <ErrorMessage/>}
      {images.length > 0 && <ImageGallery items={images} openModal={openModal} />}
      {images.length > 0 && <LoadMoreBtn onClick={handleMoreBtn} />}
      <ImageModal isOpen={modalIsOpen}  onClose={modalClose} modalimg={selectedImage} alt={description} />
      <Toaster position="bottom-center" reverseOrder={false} toastOptions={ {duration: 5000}}  />
    </>
  )
}

export default App