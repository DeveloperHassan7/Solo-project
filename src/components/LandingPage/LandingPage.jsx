import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    
    <div className="homePageBackground" >
      <h2>Welcome</h2>
      <div className="grid">
        <div className="grid-col grid-col_4">  
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />
          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
