import { Carousel } from 'react-bootstrap';
import '../../App.css'
export default function Carrusel({data}) {
    return (       
        <section className='App-content'>
            <Carousel >
                {
                    data.map(
                        data => (
                            <Carousel.Item className='carusel-card' key={data.id}>
                                <img     
                                className="carusel-img"                               
                                    src={data.image}
                                    alt={data.id}
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