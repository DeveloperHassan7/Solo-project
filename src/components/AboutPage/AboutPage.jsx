import React from 'react';
import './AboutPage.css'
import { Container, Card, } from "react-bootstrap"

function AboutPage() {
  return (
    <div className="container">
      <Container>
        <Card className='mission-statement' style={{ width: '50rem' }}>
          <Card.Title>Mission Statement</Card.Title>
          <Card.Text>
            To Provide transparency in the rental property listing industry to all people regardless of their circumstances.
          </Card.Text>
          <Card.Title>Who was this app designed for?</Card.Title>
          <Card.Text>
            The reason for SecondConnect is to give people a tool that can help them save time and money. The law grants landlords the right to carry out a background investigation on anyone who wishes to rent an apartment. Potential tenants may be rejected if anything incriminating is found on their records regardless of the crime and when it was committed but the application fee that the person paid is not refundable. The only hope for a person in that position is to go for rental property listing that is friendly towards folks with non-traditional backgrounds, credit scores, or criminal history. For that person to find those apartments they would need a lead of some type. By bringing transparency to rental property listing for people in dire need SecondConnect will save them time and money
          </Card.Text>
        </Card>
      </Container>

    </div>
  );
}

export default AboutPage;