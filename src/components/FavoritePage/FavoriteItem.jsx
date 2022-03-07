import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import { Row, Col, Card, Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons"
// import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
// import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"

function FavoriteItem({ favorite }) {
    const dispatch = useDispatch();

    const [privateNote, setPrivateNote] = useState(favorite.private_note);
    const [publicNote, setPublicNote] = useState(favorite.public_note);
    const [editMode, setEditMode] = useState(false);
    const [editMode2, setEditMode2] = useState(false);


    function handleDelete(id) {
        dispatch({
            type: 'DELETE_FAVORITE',
            payload: id
        })
    }

    function handlePrivateNote(id) {
        dispatch({
            type: 'UPDATE_PRIVATE_NOTE',
            payload: { id: id, private_note: privateNote }
        });
        setEditMode2(false);
    }

    function handlePublicNote(id) {
        dispatch({
            type: 'UPDATE_PUBLIC_NOTE',
            payload: { id: id, public_note: publicNote }
        });
        setEditMode(false);
    }

    function handleRecommend(id) {
        dispatch({
            type: 'UPDATE_RECOMMEND',
            payload: { id: id }
        });
    }

    return (
        <Container>

            <Row xs={1} md={2} className="g-6 s">
                <Col>
                    <Card >
                        <Card.Img variant="top" src={favorite.building.apartment_image_url} />
                        <Card.Body>
                            <Card.Title>{favorite.building.name}</Card.Title>
                        </Card.Body>
                        <Card.Text>
                            {favorite.building.description.slice(0, 100)}{favorite.building.description.length > 100 && '...'}
                        </Card.Text>
                        <Card.Body className="d-flex justify-content-between">
                            {favorite.recommend ? ' ' : 'Would you recommend this building?'}
                            <button onClick={() => handleRecommend(favorite.id)}><FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon></button>
                            <button onClick={(event) => handleDelete(favorite.id)} className="deleteFavorite">Delete</button>
                        </Card.Body>
                        <Card.Body className="d-flex justify-content-between">
                            {!editMode && favorite.public_note}
                            {editMode && <input value={publicNote} onChange={event => setPublicNote(event.target.value)} placeholder="Public Note" />}
                            {editMode && <button onClick={() => handlePublicNote(favorite.id)}>Update</button>}
                            {!editMode && <button onClick={() => setEditMode(!editMode)}>Edit</button>}
                        </Card.Body>
                        <Card.Body className="d-flex justify-content-between">
                            {!editMode2 && favorite.private_note}
                            {editMode2 && <input value={privateNote} onChange={event => setPrivateNote(event.target.value)} placeholder="Personal Note" />}
                            {editMode2 && <button onClick={() => handlePrivateNote(favorite.id)}>Update</button>}
                            {!editMode2 && <button onClick={() => setEditMode2(!editMode2)}>Edit</button>}

                        </Card.Body>

                    </Card>
                </Col>
            </Row>
        </Container>
    )


    return (
        <>
            <tr key={favorite.id}>
                <td><img src={favorite.building.apartment_image_url} /></td>
                <td>{favorite.building.name}</td>
                <td>
                    {favorite.private_note}
                    <input value={privateNote} onChange={event => setPrivateNote(event.target.value)} placeholder="Note" />
                    <button onClick={() => handlePrivateNote(favorite.id)}>Update</button><br />
                </td>s
                <td>
                    {favorite.public_note}
                    <input value={publicNote} onChange={event => setPublicNote(event.target.value)} placeholder="Note" />
                    <button onClick={() => handlePublicNote(favorite.id)}>Update</button><br /></td>
                <td>
                    <td>
                        {favorite.recommend ? 'Yes' : ''}
                        <button onClick={() => handleRecommend(favorite.id)}>Recommend</button><br />
                    </td>
                </td>
                <td>
                    <button onClick={(event) => handleDelete(favorite.id)} className="deleteFavorite">Delete</button>
                </td>
            </tr>
        </>
    )
}

export default FavoriteItem;