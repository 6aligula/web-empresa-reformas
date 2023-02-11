import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AddButton from '../components/AddButton';
import firstImg from '../img/bath/first.jpg';
import secondImg from '../img/bath/second.jpg';
import thirdImg from '../img/bath/third.jpg';
import fourImg from '../img/bath/four.jpg';
import fiveImg from '../img/bath/five.jpg';
import sixImg from '../img/bath/six.jpg';
import sevenImg from '../img/bath/seven.jpg';
import eightImg from '../img/bath/eight.jpg';
import Modal from '../components/Modal';
import '../components/styles/Lavabos.css';

const widthBathRoom = '35%';
const Lavabos = () => {
    return (
        <div className=''>
            <AddButton className='home'>Volver</AddButton>
            <Row>
                <Col md={12}>
                    <h1>Sección de Lavabos</h1>
                    <h2>El cuarto de lavabo tiene su origen en la antigua Grecia y Roma</h2>
                    <p>Trabajamos hasta el ultimo detalle de tu lavabo. Hasta que el cliente no este contento con el resultado no damos por finalizada la obra.</p>
                </Col>
            </Row>

            <Row>
                <Col md={6} >
                    <Modal pathImage={firstImg} medida={widthBathRoom} />
                </Col>
                <Col md={6}>
                    <Modal pathImage={secondImg} medida={widthBathRoom} />
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Modal pathImage={thirdImg} medida={widthBathRoom} />
                </Col>
                <Col md={6}>
                    <Modal pathImage={fourImg} medida={widthBathRoom} />
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Modal pathImage={fiveImg} medida={widthBathRoom} />
                </Col>
                <Col md={6}>
                    <Modal pathImage={sixImg} medida={widthBathRoom} />
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Modal pathImage={sevenImg} medida={widthBathRoom} />
                </Col>
                <Col md={6}>
                    <Modal pathImage={eightImg} medida={widthBathRoom} />
                </Col>
            </Row>
            <br></br>
        </div>
    )
}

export default Lavabos