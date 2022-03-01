import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';


function FavoritePage() {
    const dispatch = useDispatch();
    const favorites = useSelector(store => store.favoriteReducer)
    const user = useSelector(store => store.user)
    
function handleDelete(id) {
    dispatch({
        type: 'DELETE_FAVORITE',
        payload: id
    })
}
    

    return (
       <div>
           <ul>
               {favorites.map(favorite => <li key={favorite.id}> {favorite.private_note}
               {favorite.public_note}
               <button onClick={(event) => handleDelete(favorite.id)} className="deleteFavorite">Delete</button>
               {favorite.recommend}</li>)}
               
           </ul>
       </div>
    )
}


export default FavoritePage;