import Carousel from 'react-material-ui-carousel';
import "./CarouselPhotos.css"

function CarouselPhotos({items}) {
    return (
      <Carousel autoPlay animation="slide" indicators timeout={5000} className='carousel-photos-tab'>
        {items.map((item, index) => (
          <div key={index}>
            {item.src ? (
              <img key={index} src={item.src} alt={item.altText} />
            ) : (
              <div key={index}>{item.children}</div>
            )}
          </div>
        ))}
      </Carousel>
    );
  }

  export default CarouselPhotos;
  
  