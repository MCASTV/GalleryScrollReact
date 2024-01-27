import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"
function App() {

  const images = [
    {
    original:"https://picsum.photos/id/1018/1000/600", thumbnail:"https://picsum.photos/id/1018/250/150"
    },
    {
      original:"https://picsum.photos/id/1015/1000/600", thumbnail:"https://picsum.photos/id/1015/250/150"
    },
    {
    original:"https://picsum.photos/id/1019/1000/600", thumbnail:"https://picsum.photos/id/1014/250/150"
    },
  ]
  
  return (
    <div><ImageGallery items={images}
      showNav={false}
      showBullets={true}
      showPlayButton={false}
      showThumbnails={false}
      autoPlay={true}
      slideInterval={3000}
      slideDuration={1500}
      
    /></div>
  )
}
export default App;