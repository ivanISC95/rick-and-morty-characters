
import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import '../../App.css';
import Details from '../../pages/Details/Details'
export default function SearchCharacter({ data }) {
    const [keyword, SetKeyword] = useState('');
    const handleSubmit = event => {
        event.preventDefault();
        console.log(keyword)
    }
    const handeChange = event => {
        SetKeyword(event.target.value);
    }
    return (
        <section className='App-content-search'>
            <div className='Details-info'>
                <h1>Search Characters</h1>
                <form onSubmit={handleSubmit}>
                    <input onChange={handeChange} type='text' value={keyword} placeholder="Search here!"></input>
                </form>
            </div>
            <Row xs={1} md={4} className="g-5">
                {data.filter(person => person.name.includes(keyword)).map(data => (
                    <Col key={data.id}>
                        <Card  key={data.id} className="Search-card">
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
            </Row>
        </section>
    )
}