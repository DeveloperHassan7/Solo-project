import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './HomePage.css';
import {Button} from "react-bootstrap"




function HomePage() {
    const user = useSelector(store => store.user);
    const dispatch = useDispatch(); const history = useHistory();
    const building = useSelector(store => store.buildingReducer)

    console.log('The users are', user);

    function handleSubmit() {
      history.push('/search')
    }

    

    return (
      <div className='homePageBackground'>
        <div className="container">
          <h1>Welcome, {user.username}!</h1>
          <h3>Find your dream apartment</h3>
          
            <Button className="homeBtn" onClick={() => history.push('/search')}variant="dark">Begin your Journey</Button>
        </div>
    
      </div>



    );
  }
export default HomePage;

