import ImageCard from "../ImageCard/ImageCard";
import style from "../ImageGallery/ImageGallery.module.css";
import { ImageType } from "../../types";

interface ImageGalleryProps {
  items: ImageType[];
  openModal: (bigImg: string, alt: string) => void;
}

const ImageGallery = ({ items, openModal }: ImageGalleryProps) => {
  return (
    <ul className={style.listBlock}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard onClick={openModal} item={item}  />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
