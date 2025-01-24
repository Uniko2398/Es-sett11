import { useEffect, useState } from 'react'
import { Row, Col, Card } from 'react-bootstrap'

const FetchMusic = function(){
    const [musicObject, setMusicObject] = useState<null | Music>(null)

    const getMovieData = async () => {
      try {
        const response = await fetch(
            'https://striveschool-api.herokuapp.com/api/deezer/search?q=lilwayne')
        if (response.ok) {
          const data = await response.json()
          setMusicObject(data)
        } else {
          throw new Error('Errore nel recupero film')
        }
      } catch (error) {
        console.log(error)
      }
    }
  
    useEffect(() => {
      getMovieData()
    }, [])
  
    
    return(

        <section>
            <h3 className="mb-3">Nuove uscite</h3>
            <Row className="mb-5">
              {musicObject.map((_, index) => (
                  <Col lg={2} md={3} sm={4} className="mb-3" key={index}>
                    <Card bg="secondary" text="light">
                      <Card.Body className="text-center">
                        <i className="bi-music-note" style={{ fontSize: "2rem" }}></i>
                        <p className="mt-2">Song Placeholder</p>
                        <p>Artist Placeholder</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>
          </section>
    )
}