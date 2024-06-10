import ImageCard from "../ImageCard/ImageCard";
import style from "../ImageGallery/ImageGallery.module.css";
import { ImageType } from "../../types";

interface ImageGalleryProps {
  items: ImageType[];
  openModal: (id: number) => void;
}

const ImageGallery = ({ items, openModal }: ImageGalleryProps) => {
  return (
    <ul className={style.listBlock}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard item={item} onClick={() => openModal(item.id)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
