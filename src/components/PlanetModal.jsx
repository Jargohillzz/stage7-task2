import React from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import PlanetModallist from './PlanetModalList';

const PlanetModal = ({appear, setAppear, name, text, pop}) => {
    return (
            <Offcanvas
                show={appear}
                onHide={() => setAppear(false)}
                id="modal-popup"
                
            >
                <Offcanvas.Header>
                    <Offcanvas.Title><h2>{name}</h2></Offcanvas.Title>
                    <Button className="button-bg close-btn" onClick={() => setAppear(false)}>X</Button>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    <h5 className="lighter-text" >{text}</h5>
                    <h5 className=" mb-0 fw-normal mt-4" >Population</h5>
                    <h5 className="mt-0">{pop}</h5>
                    <div className="d-flex justify-content-between fs-3 align-items-center">
                        <h5 className="m-0 d-flex align-middle fw-bold lighter-text">CHARACTERS</h5>
                        <button className="border-0 px-2 button-bg">+</button>
                    </div>
                    <PlanetModallist/>
                </Offcanvas.Body>

            </Offcanvas>
    )
}

export default PlanetModal
