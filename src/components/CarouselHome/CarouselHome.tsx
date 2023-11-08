import Carousel from 'react-bootstrap/Carousel';

const CarouselHome = () => {
    return (
        <Carousel>
      <Carousel.Item>
        <img
            className='d-block w-100'
            style={{maxHeight:"500px", objectFit:'cover'}}
            src="src/assets/images/Shrek1.jpg" alt="slide1"
        />
        <Carousel.Caption>
          <h3>¿De que trata esta pagina?</h3>
          <p>Es una pagina de prueba hecha con react, vite y typescript para un trabajo de Desarrollo de software</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
            className='d-block w-100'
            style={{maxHeight:"500px", objectFit:'cover'}}
            src="src/assets/images/Shrek2.jpg" alt="slide2"
        />
        <Carousel.Caption>
          <h3>¿Por qué la tematica de Shrek?</h3>
          <p>Porque es el tema que con mi grupo elegimos para el trabajo del "El Buen Sabor"</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
            className='d-block w-100'
            style={{maxHeight:"500px", objectFit:'cover'}}
            src="src/assets/images/Shrek3.jpg" alt="slide3"
        />
        <Carousel.Caption>
          <h3>¿Que hay en las otras opciones?</h3>
          <p>
            Se puede tener acceso a una pantalla con componentes y a otra con una tabla sacada el fakestoreapi
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
}

export default CarouselHome