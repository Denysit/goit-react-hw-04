import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import fetchPhoto from './fetchPhotoApi'
import Loader from './components/Loader/Loader'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import LoadMoreButton from './components/LoadMoreButton/LoadMoreButton'
import ImageModal from './components/ImageModal/ImageModal'
import Modal from 'react-modal';

Modal.setAppElement('#root');


function App() {
  
  const [photo, setPhoto] = useState([]);
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageData, setSelectedImageData] = useState(null);

  
const openModal = (imageData) => {
    setSelectedImageData(imageData);
};

useEffect(() => {
    if (selectedImageData) {
        setModalIsOpen(true);
    }
}, [selectedImageData]);


  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImageData(null);
  }

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function getPhoto() {
      try {
        setLoader(true);
        setErrorMessage(false);
        const data = await fetchPhoto(query, page);
        setPhoto((prevPhoto) => {
          return [...prevPhoto, ...data];
        });
      }
      catch (error) {
        setErrorMessage(true)
      }
      finally {
        setLoader(false)
      }
    }
    getPhoto();
  }, [query, page]);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
    setPhoto([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {photo.length > 0 && <ImageGallery dataPhotos={photo} openModal={openModal}/>}
      {errorMessage && (<ErrorMessage />)}
      {photo.length > 0 && !loader && <LoadMoreButton loadMore={handleLoadMore} />}
      {loader && (<Loader />)}
       {photo.length > 0 && <ImageModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        imageData={selectedImageData}
      />}
    </div>
  )
}

export default App












// import { useState, useEffect } from 'react'
// import './App.css'
// import SearchBar from './components/SearchBar/SearchBar'
// import ImageGallery from './components/ImageGallery/ImageGallery'
// import fetchPhoto from './fetchPhotoApi'
// import Loader from './components/Loader/Loader'
// import ErrorMessage from './components/ErrorMessage/ErrorMessage'
// import LoadMoreButton from './components/LoadMoreButton/LoadMoreButton'
// import ImageModal from './components/ImageModal/ImageModal'


// function App() {
  
//   const [photo, setPhoto] = useState([]);
//   const [loader, setLoader] = useState(false);
//   const [errorMessage, setErrorMessage] = useState(false);
//   const [page, setPage] = useState(1);
//   const [query, setQuery] = useState("");
  

//   useEffect(() => {
//     if (query === "") {
//       return;
//     }
//     async function GetPhoto() {
//       try {
//         setLoader(true);
//         setErrorMessage(false);
//         const data = await fetchPhoto(query, page);
//         setPhoto((prevPhoto) => {
//           return [...prevPhoto, ...data];
//         });
//       }
//       catch (error) {
//         setErrorMessage(true)
//       }
//       finally {
//         setLoader(false)
//       }
//     }
//     GetPhoto();
//   }, [query, page]);

//   const handleSearch = (searchQuery) => {
//     setQuery(searchQuery);
//     setPage(1);
//     setPhoto([]);
//   };

//   const handleLoadMore = () => {
//     setPage(page + 1);
//   };

//   return (
//     <div>
//       <SearchBar onSubmit={handleSearch} />
//       {photo.length > 0 && <ImageGallery dataPhotos={photo} />}
//       {errorMessage && (<ErrorMessage />)}
//       {photo.length > 0 && !loader && <LoadMoreButton loadMore={handleLoadMore} />}
//       {loader && (<Loader />)}
//       <ImageModal dataPhotos={photo}/>
//     </div>
//   )
// }

// export default App