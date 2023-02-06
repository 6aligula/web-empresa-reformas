import React from 'react';
import { Row, Col } from 'react-bootstrap';
import firstImg from '../img/bath/first.png';
import secondImg from '../img/bath/second.png';
import thirdImg from '../img/bath/third.png';
import fourImg from '../img/bath/four.png';
import '../components/styles/Lavabos.css';

const Lavabos = () => {
    return (
        <div className=''>
            <Row>
                <Col md={12}>
                    <h1>Sección de Lavabos</h1>
                    <h2>El cuarto de lavabo tiene su origen en la antigua Grecia y Roma</h2>
                    <p>Trabajamos hasta el ultimo detalle de tu lavabo. Hasta que el cliente no este contento con el resultado no damos por finalizada la obra.</p>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <img src={firstImg} alt='IA' />
                </Col>
                <Col md={6}>
                    <img src={secondImg} alt='IA' />
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col md={6}>
                    <img src={thirdImg} alt='IA' />
                </Col>
                <Col md={6}>
                    <img src={fourImg} alt='IA' />
                </Col>
            </Row>
            <br></br>
        </div>
    )
}

export default Lavabos