import { Button, Card, CardGroup } from "react-bootstrap";


const AboutUs = () => {
    return (
        <CardGroup>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="src/assets/images/burro.jpg"/>
          <Card.Body>
            <Card.Title>Burro</Card.Title>
            <Card.Text>
              Es el mejor amigo de Shrek
            </Card.Text>
            <Button variant="primary">Ver mas</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem'}}>
          <Card.Img variant="top" src="src/assets/images/fiona.webp"/>
          <Card.Body>
            <Card.Title>Fiona</Card.Title>
            <Card.Text>
              Es la novia de Shrek
            </Card.Text>
            <Button variant="primary">Ver mas</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="src/assets/images/gengi.jpg"/>
          <Card.Body>
            <Card.Title>Gengi</Card.Title>
            <Card.Text>
              Es uno de los personajes secundarios de la pelicula 
            </Card.Text>
            <Button variant="primary">Ver mas</Button>
          </Card.Body>
        </Card>

        </CardGroup>
        
      );
}

export default AboutUs