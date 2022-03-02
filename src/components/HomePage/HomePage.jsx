import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import './HomePage.css';


 

function HomePage() {
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const history = useHistory();
  
  console.log('The users are', user);

function handleSubmit() {
  history.push('/search')
}

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <h3>Your dream apartment awaits you</h3> 
      <button onClick={handleSubmit} >Begin your journey</button>
      
    </div>
    
  );
}

// this allows us to use <App /> in index.js
export default HomePage;

