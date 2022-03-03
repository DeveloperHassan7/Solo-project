import { useSelector, useDispatch } from "react-redux";
import './SearchPage.css';
import {useHistory} from 'react-router-dom'



function SearchPage() {
  const buildingList = useSelector(store => store.buildingReducer)
  const favorites = useSelector(store => store.favoriteReducer)
  const dispatch = useDispatch();
  const history = useHistory();
 
  console.log(`What is inside of the favorites:`, favorites);
  function handleFavorite(id) {
    console.log(`What is the id`, id)
    dispatch({
      type: 'ADD_FAVORITE',
      payload: { building_id: id }
    });
  }

  return (
    <div className="container">

      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th></th>
            <th></th>


          </tr>
        </thead>
        <tbody>
          {buildingList.map(building => {
            const found = favorites.find(eachFavorite => {
              if (eachFavorite.building.id === building.id) {
                return true;
              }

            })
            return (
              <tr key={building.id}>
                <td><img src={building.apartment_image_url} /></td>
                <td>{building.name}</td>
                <td>{!found
                  ? <button onClick={(event) => handleFavorite(building.id)} className="addFavorite"> ⭐ </button>
                  : <span>Already favorited</span>
                }</td>
               <td>{building.recommend_count}</td>
                <td> <button onClick={() => history.push(`/details/${building.id}`)}>View</button></td>
            

              </tr>

            );
          })}
        </tbody>
      </table>
    </div >
  );
}

export default SearchPage;

