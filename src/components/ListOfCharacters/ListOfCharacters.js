import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import Details from "../../pages/Details/Details";
import getData from "../../servicces/getData";
export default function ListOfCharacters() {
    // variable para guardar los datos
    const [data, setData] = useState([]);
    // variables para paginacion
    const [page, setPage] = useState(0);
    // metodo para paginacion
    const handleChageN = () => {
        setPage(page + 1);        
    }
    const handleChageP = () => {
        if (page < 0 || page <= -1) {
            alert("There is the first page")
        }
        if (page >= 0) {
            setPage(page - 1);            
        }

    }
    useEffect(() => {
        getData({ keyword: page }).then(datas => setData(datas));
    }, [page])
    return (
        <section className="App-content-characters">
            <Row xs={2} md={4} className="g-5" >
                {
                    data.map(
                        data => (
                            <Col key={data.id}>
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
                                        <Details data={data} />
                                    </Card.Footer>
                                </Card>
                            </Col>
                        )
                    )
                }
            </Row>
            <br></br>
            <Button variant="danger" onClick={handleChageP}> - Previous Page</Button>
            <Button variant="primary" onClick={handleChageN}> + Next Page</Button>
        </section>
    )
}