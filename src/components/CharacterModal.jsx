import React from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import CharacterModalList from './CharacterModalList'


const CharacterModal = ( {appear, setAppear, name, text, planet, friends} ) => {
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

                <Offcanvas.Body className="container">
                    <h5 className="lighter-text" >{text}</h5>
                    <div className="row">
                        <div className="col">
                            <h5 className=" mb-0 fw-normal mt-4" >Planet</h5>
                            <h5 className="mt-0">{planet}</h5>
                        </div>
                        <div className="col mb-3">
                            <h5 className=" mb-0 fw-normal mt-4" >Friends</h5>
                            <h5 className="mt-0">{friends}</h5>
                        </div>
                    </div>
                    <h5 className="m-0 d-flex align-middle fw-bold lighter-text">FRIENDS</h5>
                    <CharacterModalList/>
                </Offcanvas.Body>
            </Offcanvas>

)
}

export default CharacterModal
