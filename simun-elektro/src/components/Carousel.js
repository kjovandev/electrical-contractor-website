import Carousel from 'react-bootstrap/Carousel';

function CarouselBootstrap() {
  return (
      <Carousel>
      <Carousel.Item style={{ width: 'auto', height: '70vh',maxHeight:"100%"}}>
        <img
          src='/resources/gazprom.jpg'
          style={{ width: 'auto', height: '100%', maxWidth: '100%', maxHeight: '100%' }}
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ width: '50vw', height: '100%',maxHeight:"100%"}}>
        <img
          src='/resources/belgrade.jpg'
          style={{ width: 'auto', height: '100%', maxWidth: '100%', maxHeight: '100%' }}
          alt='Second slide'
        />
        <Carousel.Caption style={{ color: 'white', backgroundColor: 'black' }}>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ width: '50vw', height: '100%',maxHeight:"100%"}}>
        <img
          src='/resources/belgrade.jpg'
          style={{ width: 'auto', height: '100%', maxWidth: '100%', maxHeight: '100%' }}
          alt='Third slide'
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBootstrap;
