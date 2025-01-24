import { Row, Col, Card, } from "react-bootstrap"

const Novità = function(){

    return(
       <>
         
          <div className="d-flex justify-content-between align-items-center bg-black text-white">
            <h2>Novità</h2>
          </div>

         
          <section>
            <Row className=" bg-black">
              <Col md={6} className="mb-3 ">
                <Card bg="black" text="white">
                  
                  <Card.Body>
                    <Card.Text>NUOVA STAZIONE RADIO</Card.Text>
                    <Card.Title>Rilassati, al resto pensiamo noi. </Card.Title>
                    <Card.Title>Ascolta Apple Music Chill</Card.Title>
                    <Card.Img variant="top" src="../public/assets/images/1a.png" alt="Chill Radio" />
                  </Card.Body>
                 
                </Card>
              </Col>

              <Col md={6} className="mb-3">
                <Card bg="black" text="white">
                  
                  <Card.Body>
                  <Card.Text>NUOVA STAZIONE RADIO</Card.Text>
                    <Card.Title>Ecco la nuova casa della musica latina</Card.Title>
                    <Card.Img variant="top" src="../public/assets/images/1b.png" alt="Música Latina" />
                  </Card.Body>
                  
                </Card>
              </Col>
            </Row>
          </section>
          </>
    )
}

export default Novità