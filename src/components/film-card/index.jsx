import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const FilmCard = ({ film, deleteFilm }) => {
    return (
        <Col key={film.id} className="m-0 p-0 mb-5">
            <Card className="m-auto h-100" style={{ width: '20rem' }}>
                <Card.Img variant="top" className="h-50" src={film.image} />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>{film.name}</Card.Title>
                    <Card.Text>

                    </Card.Text>
                    <div className="btns">
                        <Button variant="primary w-50 me-2">Update</Button>
                        <Button variant="danger w-50 ms-2" onClick={deleteFilm}>Delete</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default FilmCard;