import { Carousel } from 'react-bootstrap';
import '../../App.css'
import LogoName from '../../img/logo1.png';
export default function Carrusel({ data }) {
    return (
        <section className='App-content' >
            <img src={LogoName} alt='Rick & Morty logo'  className='Carrusel-img'/>
            <div className='Details'>                
                <div className="carusel-img">
                    <Carousel >
                        {
                            data.map(
                                data => (
                                    <Carousel.Item  key={data.id} >
                                        <img
                                        className='carusel-imgs'                                            
                                            src={data.image}
                                            alt={data.id}
                                            key={data.id}
                                        />
                                    </Carousel.Item>
                                )
                            )
                        }
                    </Carousel>
                </div>
            </div>            
        </section>
    )
}