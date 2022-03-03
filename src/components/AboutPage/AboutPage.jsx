import React from 'react';
import './AboutPage.css'


// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h1>Overview</h1>
        <h2>Mission Statement </h2>
        <p>To Provide transperency in the rental property listing industry to all people regardless of their circumstance.</p>
        <h2>Who was this app designed for?</h2>
        <p>The reason for SecondConnect is to give people a tool that can help them save time and money. The law grants landlords the right to carry out a background investigation on anyone who wishes to rent an apartment. Potential tenants may be rejected if anything incriminating is found on their records regardless of the crime and when it was committed but the application fee that the person paid is not refundable. The only hope for a person in that position is to go for rental property listing that is friendly towards folks with non-traditional backgrounds, credit scores, or criminal history. In order for that person to find those apartments they would need a lead of some type. By bringing transparency to rental property listing for people in dire need SecondConnect will save them time and money.

        </p>
      </div> 

    </div>
  );
}

export default AboutPage;