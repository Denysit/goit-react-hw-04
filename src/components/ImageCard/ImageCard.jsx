
const ImageCard = ({ dataPhoto }) => {
    const { urls, likes, alt_description} = dataPhoto;


    return (
        <div>
            <img src={urls.small} alt={alt_description} /> 
            <p>Likes: {likes}</p> 
        </div>
    );
};

export default ImageCard;
