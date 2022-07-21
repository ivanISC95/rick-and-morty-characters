import { Carousel } from 'react-bootstrap';
import '../../App.css'
export default function Carrusel({ data }) {    
    return (
        <section className='App-content' >            
            <Carousel >                
                    {
                        data.map(
                            data => (
                                <Carousel.Item className='carusel-card' key={data.id} >
                                    <img                                    
                                        className="carusel-img"
                                        src={data.image}
                                        alt={data.id}
                                        key={data.id}
                                        
                                    />

                                </Carousel.Item>
                            )
                        )
                    }                   
            </Carousel>            
        </section>
    )
}