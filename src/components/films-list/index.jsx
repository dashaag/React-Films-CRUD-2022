import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import { Button, Row } from 'react-bootstrap';
import './index.css';
import FilmCard from '../film-card';
import AddFilmModal from '../add-film-modal';
import UpdateFilmModal from '../update-film-modal';

const filmsDB = [
    {
        id: uuid(),
        name: 'Harry Potter',
        year: 2003,
        image: 'https://mms.businesswire.com/media/20200427005902/en/787777/4/HP_KeyArtPressRelease_Comms.jpg'
    },
    {
        id: uuid(),
        name: 'La la land',
        year: 2017,
        image: 'https://www.goldenglobes.com/sites/default/files/articles/cover_images/2017-la_la_land.jpg?format=pjpg&auto=webp&optimize=high&width=850'
    },
    {
        id: uuid(),
        name: 'Green Mile',
        year: 1998,
        image: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/5378ac641baa3bdd7f4d382c354180228b32fa3bfe7f7cc4adeedddedb3341ed._RI_V_TTW_.jpg'
    },
    {
        id: uuid(),
        name: 'Harry Potter',
        year: 2003,
        image: 'https://mms.businesswire.com/media/20200427005902/en/787777/4/HP_KeyArtPressRelease_Comms.jpg'
    },
    {
        id: uuid(),
        name: 'La la land',
        year: 2017,
        image: 'https://www.goldenglobes.com/sites/default/files/articles/cover_images/2017-la_la_land.jpg?format=pjpg&auto=webp&optimize=high&width=850'
    },
    {
        id: uuid(),
        name: 'Green Mile',
        year: 1998,
        image: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/5378ac641baa3bdd7f4d382c354180228b32fa3bfe7f7cc4adeedddedb3341ed._RI_V_TTW_.jpg'
    },
    {
        id: uuid(),
        name: 'Harry Potter',
        year: 2003,
        image: 'https://mms.businesswire.com/media/20200427005902/en/787777/4/HP_KeyArtPressRelease_Comms.jpg'
    },
    {
        id: uuid(),
        name: 'La la land',
        year: 2017,
        image: 'https://www.goldenglobes.com/sites/default/files/articles/cover_images/2017-la_la_land.jpg?format=pjpg&auto=webp&optimize=high&width=850'
    },
    {
        id: uuid(),
        name: 'Green Mile',
        year: 1998,
        image: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/5378ac641baa3bdd7f4d382c354180228b32fa3bfe7f7cc4adeedddedb3341ed._RI_V_TTW_.jpg'
    },
];

const FilmsList = _ => {
    const FILMS_KEY = 'FILMS';
    const [films, setFilms] = useState(JSON.parse(localStorage.getItem(FILMS_KEY)) ?? []);
    const [showModal, setShowModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [activeFilm, setActiveFilm] = useState({
        name: '',
        image: ''
    });

    useEffect(() => {
        if (!localStorage.getItem(FILMS_KEY)) {
            setLocalStorageValue(filmsDB);
            setFilms(filmsDB);
        }
    }, [])

    const deleteFilm = id => {
        const newArray = films.filter(x => x.id !== id);

        setFilms(newArray);
        setLocalStorageValue(newArray);
    }

    const updateFilm = updatedFilm => {
        const newArray = films.map(x => updatedFilm.id === x.id ? updatedFilm : x);
        
        setFilms(newArray);
        setLocalStorageValue(newArray);
    }

    const addFilm = film => {
        const newArray = [...films, film];

        setFilms(newArray);
        setLocalStorageValue(newArray);
    }

    const setLocalStorageValue = value => {
        localStorage.setItem(FILMS_KEY, JSON.stringify(value));
    }

    const openUpdateModal = film => {
        setActiveFilm(film);
        setShowUpdateModal(true);
    }

    return (
        <>
            <h1 className="my-5">Films List</h1>
            <Button
                variant="success"
                className="w-75 mb-5"
                onClick={_ => setShowModal(true)}>
                Add new film
            </Button>
            <Row className="films-list m-0" lg={3} md={2} xs={1}>
                {
                    films.map(film =>
                        <FilmCard
                            handleOpen={_ => openUpdateModal(film)}
                            film={film}
                            deleteFilm={() => deleteFilm(film.id)} />
                    )
                }
            </Row>
            <AddFilmModal 
                show={showModal}
                addFilm={addFilm}
                handleClose={_ => setShowModal(false)} />
            <UpdateFilmModal
                show={showUpdateModal}
                updateFilm={updateFilm}
                activeFilm={activeFilm}
                handleClose={_ => setShowUpdateModal(false)} />
        </>
    )
}

export default FilmsList;