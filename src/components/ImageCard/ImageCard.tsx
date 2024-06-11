
import { ImageType } from "../../types"


interface ImageCardProps {
    item: ImageType;
    onClick: (bigImg: string, alt: string) => void;
}

 const ImageCard = ({item, onClick}: ImageCardProps) => {

    return (
        <>
        <div>
            <img
                 onClick={() => onClick(item.urls.regular, item.alt_description)}
                src={item.urls.small} 
                alt={item.alt_description}
                width="250"
                height="200"
            />
		</div>
        </>
    )
}

export default ImageCard