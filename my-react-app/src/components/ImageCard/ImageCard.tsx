
import { ImageType } from "../../types"


interface ImageCardProps {
    item: ImageType;
    onClick: (id: number) => void;
}

 const ImageCard = ({item, onClick}: ImageCardProps) => {

    return (
        <>
        <div>
            <img
                onClick={() => onClick(item.id)}
                src={item.urls.small} 
                alt={item.alt_description}
            />
		</div>
        </>
    )
}

export default ImageCard