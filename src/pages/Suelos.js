import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AddButton from '../components/AddButton';
import firstImg from '../img/floor/first.jpg';
import secondImg from '../img/floor/second.jpg';
import thirdImg from '../img/floor/third.jpg';
import fourImg from '../img/floor/four.jpg';
import fiveImg from '../img/floor/five.jpg';
import sixImg from '../img/floor/six.jpg';
import Modal from '../components/Modal';
import '../components/styles/Lavabos.css';

const Suelos = () => {
    const widthFloor = '45%';
    return (
        <div>
            <AddButton className='home'>Volver</AddButton>
            <Row>
                <Col md={12}>
                    <h1>Sección de Azulejos y baldosas</h1>
                    <h2>Los azulejos tienen su origen en la Península Ibérica durante el periodo islámico</h2>
                    <p>Los azulejos decorativos de cerámica decoraban las paredes y los pisos de las mezquitas y palacetes de la época. Con la llegada de los Reyes Católicos al poder, la técnica se extendió a través de España y Portugal, donde se utilizó para decorar iglesias, palacetes y otros edificios públicos. Desde entonces, los azulejos se han utilizado en todo el mundo como material de revestimiento y decoración.</p>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <h5>Barcelona</h5>
                    <Modal pathImage={firstImg} title='Barcelona' medida={widthFloor} />
                </Col>
                <Col md={6}>
                    <h5>Artic</h5>
                    <Modal pathImage={secondImg} title='Artic' medida={widthFloor} />
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <h5>Arizona</h5>
                    <Modal pathImage={thirdImg} title='Arizona' medida={widthFloor} />
                </Col>
                <Col md={6}>
                    <h5>Belice</h5>
                    <Modal pathImage={fourImg} title='Belice' medida={widthFloor} />
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <h5>Berna</h5>
                    <Modal pathImage={fiveImg} title='Berna' medida={widthFloor} />
                </Col>
                <Col md={6}>
                    <h5>Boston</h5>
                    <Modal pathImage={sixImg} title='Boston' medida={widthFloor} />
                </Col>
            </Row>
            <br></br>
        </div>
    )
}

export default Suelos