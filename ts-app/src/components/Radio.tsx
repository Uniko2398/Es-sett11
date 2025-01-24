import { Row, Col, Card } from "react-bootstrap";

const Radio = function(){

    const newRadioEpisodes = [
        { title: "Prólogo con Abuelo", image: "../public/assets/images/2a.png" },
        { title: "The Wanderer", image: "../public/assets/images/2b.png" },
        { title: "Michael Bublé & Carly Pearce", image: "../public/assets/images/2c.png" },
        { title: "Stephan Moccio", image: "../public/assets/images/2d.png" },
        { title: "Chart Spotlight: Julia Michaels", image: "../public/assets/images/2e.png" },
      ];
    return(
        <section className="bg-black text-white">
            <h3 className="mb-3" >Nuovi episodi radio</h3>
            <Row className="mb-5">
              {newRadioEpisodes.map((episode, index) => (
                <Col lg={2} md={4} sm={3} className="mb-3" key={index}>
                  <Card bg="black" text="light">
                    <Card.Img variant="top" src={episode.image} alt={episode.title} />
                    <Card.Body>
                      <Card.Text>{episode.title}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </section>

    )
}

export default Radio