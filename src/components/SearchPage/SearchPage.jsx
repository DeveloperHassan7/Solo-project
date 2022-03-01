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

  function handleFavorite(id) {
    dispatch({
      type: 'ADD_FAVORITE',
      payload: {building_id: id}
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
           const found = favorites.find(eachFavorite => {
            
            if(eachFavorite.building.id === building.id){
               return true;
             }
             
           })
           console.log(`this is:`, found);
           return (
              <tr key={building.id}>
                <td><img src={building.apartment_image_url} /></td>
                <td>{building.description}</td>
                <td className="name">{building.name}</td>
                <td>{building.address}</td>
                <td>{building.zip_code}</td>
                <td>{building.city}</td>
                <td>{building.state}</td>
                <td>{!found 
                ?  <button onClick={(event) => handleFavorite(building.id)} className="addFavorite">❤️</button> 
                : <span>Already favorited</span>
                }</td>
                
              </tr>

            );
          })}
        </tbody>
      </table>
    </div >
  );
}

export default SearchPage;

