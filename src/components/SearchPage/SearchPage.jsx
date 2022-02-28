import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import './SearchPage.css';
import { useHistory } from 'react-router-dom'


function SearchPage() {
  const buildingList = useSelector(store => store.buildingReducer)
  const dispatch = useDispatch();
  const user = useSelector(store => store.user)
  const favorites = useSelector(store => store.favoriteReducer)
  const history = useHistory();

  console.log('This is my favorites', favorites);

  useEffect(() => {
    dispatch({
      type: 'FETCH_BUILDING'
    });
  }, [dispatch])



  function handleFavorite(id) {
    dispatch({
      type: 'ADD_FAVORITE',
      payload: id
    })
  }




  return (
    <div className="container">
   
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Description</th>
            <th>Name</th>
            <th>Address</th>
            <th>Zip Code</th>
            <th>City</th>
            <th>State</th>

          </tr>
        </thead>
        <tbody>
          {buildingList.map(building => {
            return (
              <tr key={building.id}>
                <td><img src={building.apartment_image_url} /></td>
                <td>{building.description}</td>
                <td className="name">{building.name}</td>
                <td>{building.address}</td>
                <td>{building.zip_code}</td>
                <td>{building.city}</td>
                <td>{building.state}</td>
                <td><button onClick={(event) => handleFavorite()} className="addFavorite">❤️</button></td>
                <td><button onClick={(event) => handleDelete()} className="deleteFavorite">Delete</button></td>
              </tr>

            );
          })}
        </tbody>
      </table>
    </div >
  );
}

export default SearchPage;

