
import styles from './ImageCard.module.css';

const ImageCard = ({ dataPhoto }) => {
    const { urls, likes, alt_description} = dataPhoto;

    return (
        <div className={styles['image-card']}>
            <img src={urls.small} alt={alt_description} />
            <p className={styles.likes}>Likes: {likes}</p>
        </div>
    );
};

export default ImageCard;

