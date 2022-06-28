import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import uuid from 'react-uuid';

const AddFilmModal = ({ show, handleClose, addFilm }) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    const submit = _ => {
        const newFilm = {
            name: name,
            image: image,
            id: uuid()
        };

        addFilm(newFilm);

        setName('');
        setImage('');

        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add new film</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <span>Name: </span>
                    <input onChange={(e) => setName(e.target.value)} value={name} />
                </div>
                <div>
                    <span>Image: </span>
                    <input onChange={(e) => setImage(e.target.value)} value={image} />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button onClick={submit} variant="success">
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddFilmModal;