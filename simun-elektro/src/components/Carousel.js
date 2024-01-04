import Carousel from 'react-bootstrap/Carousel';

function CarouselBootstrap() {
  return (
    <Carousel data-bs-theme="dark" className="d-flex align-items-center justify-content-center" style={{ height: "60vh", width: "80mw" }}>
      <Carousel.Item className='mw-100 h-auto align-items-center justify-content-center'>
        <img
          className="d-block mw-100 mh-100 "
          src="/resources/delta.webp"
          alt="Delta Holding"
          style={{maxHeight:"100%", width:"auto"}}
        />
        <Carousel.Caption>
          <h5>Delta Holding</h5>
          <p>Projektovanje i izrada instalacija u Delta planet-u u Nišu.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='mh-100 w-100 align-items-center justify-content-center'>
        <img
          className="d-block mw-100 mh-100"
          src="/resources/delta.webp"
          alt="Gazprom"
        />
        <Carousel.Caption>
          <h5>Gazprom</h5>
          <p>Izrada elektro-instalacija u zgradi administracije u Beogradu.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='mw-100 h-auto align-items-center justify-content-center'>
        <img
          className="d-block mw-100 mh-100"
          src="/resources/delta.webp"
          alt="Belgrade Waterfront"
        />
        <Carousel.Caption>
          <h5 style={{ margin: "2rem", backgroundColor: "white" }}>Belgrade Waterfront</h5>
          <p>
            Projektovanje i izrada IOT instalacija.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBootstrap;
