import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AddButton from '../components/AddButton';
import firstImg from '../img/kitchen/primera.jpg';
import secondImg from '../img/kitchen/segunda.jpg';
import thirdImg from '../img/kitchen/tercera.jpg';
import fourImg from '../img/kitchen/cuarta.jpg';
import Modal from '../components/Modal';
import '../components/styles/Lavabos.css';

const Cocinas = () => {
    const widthKitchen = '80%';

    return (
        <div>
            <AddButton className='home'>Volver</AddButton>
            <Row>
                <Col md={12}>
                    <h1>Sección de Cocinas</h1>
                    <h2>El origen de la cocina se remonta a la época prehistórica</h2>
                    <p>Cuando los humanos comenzaron a controlar el fuego y a cocinar sus alimentos para mejorar su digestión y aumentar su disponibilidad de nutrientes.</p>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <h5>Cocina Normal</h5>
                    <Modal pathImage={firstImg} title='Cocina Normal' medida={widthKitchen} />
                </Col>
                <Col md={6}>
                    <h5>Cocina en L</h5>
                    <Modal pathImage={secondImg} title='Cocina en L' medida={widthKitchen} />
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <h5>Cocina en U</h5>
                    <Modal pathImage={thirdImg} title='Cocina en U' medida={widthKitchen} />
                </Col>
                <Col md={6}>
                    <h5>Cocina en Isla</h5>
                    <Modal pathImage={fourImg} title='Cocina en Isla' medida={widthKitchen} />
                </Col>
            </Row>
            <br></br>
        </div>
    )
}

export default Cocinas