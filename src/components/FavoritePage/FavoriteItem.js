import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';

function FavoriteItem({ favorite }) {
    const dispatch = useDispatch(); 
    const [privateNote, setPrivateNote] = useState(''); 
    const [publicNote, setPublicNote] = useState(''); 

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
        setPrivateNote('');
    }

    function handlePublicNote(id) { 
        dispatch({
            type: 'UPDATE_PUBLIC_NOTE',
            payload: { id: id, public_note: publicNote }
        });
        setPublicNote('')
    }

    function handleRecommend(id) { // move
        dispatch({
            type: 'UPDATE_RECOMMEND',
            payload: { id: id }
        });
    }

    return (
        <>
            <tr key={favorite.id}>
                <td><img src={favorite.building.apartment_image_url} /></td>
                <td>{favorite.building.name}</td>
                <td>
                    {favorite.private_note}
                    <input value={privateNote} onChange={event => setPrivateNote(event.target.value)} placeholder="Note" />
                    <button onClick={() => handlePrivateNote(favorite.id)}>Update</button><br />
                </td>
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