
import styles from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ dataPhotos, openModal }) => {
    return (
        <ul className={styles['gallery-container']}>
            {dataPhotos.map((dataPhoto) => (
                <li key={dataPhoto.id} className={styles['gallery-item']} onClick={() => openModal(dataPhoto)}>
                    <ImageCard dataPhoto={dataPhoto} />
                </li>
            ))}
        </ul>
    );
};

export default ImageGallery;

