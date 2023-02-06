import React from "react";
import CarouselDady from '../components/CarouselDady';
import Cards from "../components/Cards";
import { Row, Col } from 'react-bootstrap';
import bath from '../img/coverBath.png'
import kitchen from '../img/coverKitchen.png'
import floor from '../img/coverFloor.png'

const Main = () => {

    return (
        <div >
            <br></br>
            <CarouselDady />
            <br></br>
            <h1>Reformas, carpintería de madera, pladur, parquet y pintura. Restauración y rehabilitaciópn de puertas y ventanas</h1>
            <h2>Lacados de puertas y ventanas. Instalaciones eléctricas</h2>
            <br></br>
            <Row>
                <Col>
                    <Cards
                        pathPhoto={bath}
                        path='./lavabos'
                        title='Lavabos'
                        subtitle='Las mejores ofertas en reformas de lavabos'
                        nameButton='Seccion de Lavabos' />
                </Col>
                <Col>
                    <Cards
                        pathPhoto={kitchen}
                        path='./cocina'
                        title='Cocinas'
                        subtitle='Porque la cocina es el corazón de una casa'
                        nameButton='Seccion de Cocinas' />
                </Col>
                <Col>
                    <Cards
                        pathPhoto={floor}
                        path='./suelos'
                        title='Suelos'
                        subtitle='Azulejos y baldosas para cualquier habitación de tu casa'
                        nameButton='Seccion de suelos' />
                </Col>
            </Row>
            <br></br>
        </div>
    )
}

export default Main