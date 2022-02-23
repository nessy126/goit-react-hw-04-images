import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem"

const ImageGallery = ({images}) => {
  return (
    <ul className="ImageGallery">
      {images.length === 0 ? (
        <p>Unfortunately we did not found any image by our request</p>
      ) : (
        images.map((el) => {
          return (
            <ImageGalleryItem
              key={el.id}
              image={el.webformatURL}
              imageBig={el.largeImageURL}
              tags={el.tags}
            />
          )
        })
      )}
    </ul>
  )
}

export default ImageGallery
