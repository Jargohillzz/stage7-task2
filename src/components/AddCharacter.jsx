import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const AddCharacter = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button className="add-btn" onClick={handleShow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header  closeButton>
                </Modal.Header>
                <Modal.Body>
                    <h1>Character</h1>
                    <Form>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label className="fw-bold">Image</Form.Label>
                            <Form.Control type="file" />
                            <Form.Text className="text-muted">Paste the URL of a JPG or PNG of max 20 kb</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="fw-bold">Name</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="fw-bold">Description</Form.Label>
                            <Form.Control as="textarea"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="fw-bold">Friends</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Select Friends</option>
                                <option value="1">Chris Evans</option>
                                <option value="2">Indie Jones</option>
                                <option value="3">Tom Holland</option>
                            </Form.Select>
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" size="lg" className="px-4" onClick={handleClose}>
                        CANCEL
                    </Button>
                    <Button variant="secondary" className="px-4 ms-1" onClick={handleClose}>
                        CREATE CHARACTER
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddCharacter
