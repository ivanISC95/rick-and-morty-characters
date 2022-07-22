import React, { useState,useEffect } from "react";
import Details from "../../pages/Details/Details";
import getData from "../../servicces/getData";
import { Card, Row, Col, Button } from "react-bootstrap";
export default function Characters({keyword}){
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
    return(
        <Row xs={1} md={5} className="g-5">
                {data.filter(person => person.name.includes(keyword)).map(data => (
                    <Col key={data.id}>
                        <Card key={data.id} className="Search-card">
                            <Card.Img src={data.image} alt={data.id} className="Search-img" key={data.id} />
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
                ))}
                <br></br>
            <Button variant="danger" onClick={handleChageP}> - Previous Page</Button>
            <Button variant="primary" onClick={handleChageN}> + Next Page</Button>
            </Row>
    )
}