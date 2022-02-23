import React, { useEffect, useState, useRef } from "react"
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import Button from "./components/Button/Button"
import './styles.css';
import {getImaigesApi} from './services/api'
import ImageGallery from "./components/ImageGallery/ImageGallery"
import Loader from './components/Loader/Loader';



const App = () => {
  const [q, setQ] = useState("")
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [images, setImages] = useState([])

  const scrollHeightRef = useRef(null) 
 

  // Рендер при загрузке
  // componentDidMount() {
  //   this.setState({ isLoading: true })
  //   const { q, page } = this.state
  //   getImaiges({ page }).then((images) =>
  //     this.setState({ images, isLoading: false })
  //   )
  // }

  useEffect(() => {
    if (q !== "") {
      scrollHeightRef.current = document.documentElement.scrollHeight
      setIsLoading(true)
      getImaigesApi({q, page})
        .then(data => {
          setImages((prev) => [...prev, ...data])
          setIsLoading(false)
        })
    }
  }, [page])

   useEffect(() => {
    if (q !== "") {
      setIsLoading(true)
      setPage(1)
      getImaigesApi({q, page}).then((data) => {
        setImages(data)
        setIsLoading(false)
      })
    }
   }, [q])

  useEffect(() => {
    if (images.length !== 0 && page !== 1) {
      console.log(page);
      window.scrollTo({
        top: scrollHeightRef.current - 150,
        behavior: "smooth",
      })
    }
  }, [images])
 
  const setPages = () => {
    setPage((prev) => prev + 1)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setQ(e.target.q.value )
  }

    return (
      <div
        className="App">
        <Searchbar onSubmit={onSubmit} />
        {images.length > 0 && <ImageGallery  images={images} />}
        {isLoading && <Loader/>}
        {images.length > 0 && <Button setPage={setPages} />}
      </div>
    )
}
 
export default App;