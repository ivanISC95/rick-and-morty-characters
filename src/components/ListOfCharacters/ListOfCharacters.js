import { Card, Row, Col } from "react-bootstrap";
import Details from "../../pages/Details/Details";
export default function ListOfCharacters({ data }) {
    return (
        <section className="App-content">
            <Row xs={2} md={4} className="g-20">
                {
                    data.map(
                        data => (
                            <Col>
                                <Card border="secondary" key={data.id}>
                                    <Card.Img src={data.image} alt={data.id} />
                                    <Card.Body>
                                        <Card.Title>{data.name}</Card.Title>
                                        <Card.Text>
                                            {data.species}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small>Status: {data.status}</small>
                                        <br />
                                        <Details data={data}/>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        )
                    )
                }
            </Row>
        </section>
    )
}