import React from 'react'
import './styles/Footer.css'
import icono from '../img/icono.png'

const Footer = () => {
    return (
        <div className='box'>

            <div className='whats_icon'>
                <input type="checkbox" id='btn-mas' />
                <div className='btn-mas'>
                    <label htmlFor="btn-mas" className='bi bi-x-circle-fill'></label>
                </div>
                <div className='container-redes'>
                    <p>
                        <a href="https://api.whatsapp.com/send?phone=+34677871148" target="_blank">
                            <img className="boton" src={icono} alt="" />
                        </a>
                    </p>
                </div>
            </div>

            <footer>
                <div className='row'>
                    <div className="col-sm-6">
                        &copy; 2023–2024 Reformas y rehabilitaciones integrales Vicent &middot;
                    </div>
                    <div className="col-sm-6 social">
                        <p>
                            <a href="mailto:reformasvicenc@gmail.com">
                                <i className="bi bi-envelope"></i>
                                Correo (reformasvicenc@gmail.com)
                            </a>
                        </p>
                    </div>
                    <div className="col-sm-6 social">
                        <p>
                            <a href="tel:+34677871148">
                                <i className="bi bi-whatsapp"></i>
                                WhatsApp: 677 87 11 48
                            </a>
                        </p>
                    </div>
                    <div className="col-sm-6 social">
                        <p>
                            <a href="https://www.instagram.com/reformas_vicent/" target="_blank">
                                <i className="bi bi-instagram"></i>
                                Instagram
                            </a> &middot;
                        </p>
                    </div>

                </div>
                <br></br>
                <div className='row'>
                    <div className='col-sem-12'>
                        <p>
                            <a href="#">
                                <i className='bi bi-arrow-up-circle-fill'>
                                </i>

                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer