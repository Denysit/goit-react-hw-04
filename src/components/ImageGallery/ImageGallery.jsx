import ImageCard from "../ImageCard/ImageCard"

const ImageGallery = ({ dataPhotos, openModal }) => {

    return (
        
        <ul>
            {dataPhotos.map((dataPhoto) => (
                <li key={dataPhoto.id} onClick={() => openModal(dataPhoto)}>
                    <ImageCard dataPhoto={dataPhoto} />
                </li>
            ))}
        </ul>
        
    );
};

export default ImageGallery;
