import { useState } from "react";
import Modal from "../Modal/Modal";
// import { SRLWrapper } from "simple-react-lightbox"


const ImageGalleryItem = ({ imageBig, tags, image }) => {
  const [showModalWindow, setShowModalWindow] = useState()

  const openModal =() => {
    setShowModalWindow(true );
    window.addEventListener("keydown", closeModal)
  }

  const closeModal = (e) => {
    if (e.keyCode === 27 || e.target === e.currentTarget) {
      setShowModalWindow(false)
      window.removeEventListener("keydown", closeModal)
    }
  }
 
    return (
      <li className="ImageGalleryItem">
        {/* <SRLWrapper> */}
        <img
          onClick={openModal}
          className="ImageGalleryItemImage"
          src={image}
          alt=""
        />
        {/* </SRLWrapper> */}
        {showModalWindow && (
          <Modal imageBig={imageBig} tags={tags} closeModal={closeModal} />
        )}
      </li>
    )

}
 
export default ImageGalleryItem;
