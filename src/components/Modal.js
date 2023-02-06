import React, { useState } from "react";
import { Button } from 'react-bootstrap';

function Modal({ pathImage, title }) {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div>
            <Button onClick={toggleModal}><img src={pathImage} /></Button>
            {showModal && (
                <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: 'white',
                    width: '80%',
                    padding: '20px',
                    zIndex: '999',

                }}>
                    <h2>{title}</h2>
                    <img src={pathImage} />
                    <Button onClick={toggleModal}>X</Button>
                </div>
            )}
        </div>
    );
}

export default Modal;