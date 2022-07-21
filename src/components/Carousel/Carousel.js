import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import getData from '../../servicces/getData';
import '../../App.css'
export default function Carrusel() {

    const [data, setData] = useState([]);
    useEffect(() => {
        getData().then(datas => setData(datas))
    }, [])

    return (       
        <section className='App-content'>
            <Carousel>
                {
                    data.map(
                        data => (
                            <Carousel.Item key={data.id}>
                                <img
                                    className="carusel-img"
                                    src={data.image}
                                    alt="cursos"
                                />
                                <br></br>
                                <Carousel.Caption className='carusel-text'>
                                    <h1>{data.name}</h1>
                                    <h2>{data.species}</h2>
                                    <h3>{data.status}</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    )
                }
            </Carousel>
        </section>
    )
}