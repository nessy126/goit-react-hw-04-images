const Modal = ({ imageBig, tags, closeModal }) => {
  return (
    <div onClick={closeModal} className="Overlay" data-name="Overlay">
      <div className="Modal">
        <img src={imageBig} alt={tags} />
      </div>
    </div>
  )
}
 
export default Modal;

