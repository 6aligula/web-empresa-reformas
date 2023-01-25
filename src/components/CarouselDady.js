import { Carousel, Image } from 'react-bootstrap';
import grassBefore from "../img/carusel/bath1.png";
import grassAfter from "../img/carusel/bath2.png";
import naturalGrassA from "../img/carusel/bath3.png";
import naturalGrassF from "../img/carusel/bath4.png";
import naturalGrassM from "../img/carusel/cespedNaturalFinal.jpg";
import yardBefore from "../img/carusel/patioAntes.jpg";
import yardAfter from "../img/carusel/patioDespues.jpg";
//import './styles/Carro.css'


export default function CarouselDady() {

    return (
        <Carousel pause='hover' className='bg-dark'>
            <Carousel.Item key='1'>
                <Image src={grassBefore} alt="First slide" fluid />
                <Carousel.Caption className='carousel.caption'>
                    <h3>SIN CESPED ARTIFICIAL</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Image src={grassAfter} alt="Second slide" fluid />
                <Carousel.Caption className='carousel.caption'>
                    <h3>CON CESPED ARTIFICIAL</h3>
                </Carousel.Caption >
            </Carousel.Item>

            <Carousel.Item>
                <Image src={naturalGrassA} alt="Third slide" fluid />
                <Carousel.Caption className='carousel.caption'>
                    <h3>SIN CESPED NATURAL</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Image src={naturalGrassF} alt="Third slide" fluid />
                <Carousel.Caption className='carousel.caption'>
                    <h3>COLOCANDO CESPED NATURAL</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Image src={naturalGrassM} alt="Third slide" fluid />
                <Carousel.Caption className='carousel.caption'>
                    <h3>CON CESPED NATURAL</h3>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>

    );
}
