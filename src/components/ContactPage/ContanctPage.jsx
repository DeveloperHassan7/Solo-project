import './ContactPage.css'
import { Form, Container, Button, Row, Col } from "react-bootstrap"
import { useHistory } from 'react-router-dom'

function ContactPage() {
    const history = useHistory();
    return (
        <>
            <div className="container">
                <h2>Get In Touch</h2>
                <h6>Ready to contribute or just have questions? Simply fill out the form!</h6>
            </div>
            <Container className="contact-container" fluid>
                <Form>
                    <Row>
                        <Form.Group as={Col}>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control name="name" placeholder="First Name" />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control name="name" placeholder="Last Name" />
                        </Form.Group>

                    </Row>

                    <br />
                    <Row>
                        <Form.Group as={Col}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Email Address" required />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control name="phone" type="text" placeholder="Phone Number" required />
                        </Form.Group>
                    </Row>

                    <br />

                    <Form.Group>
                        <Form.Label>Any details you can share?</Form.Label>
                        <Form.Control name="name" placeholder="" as="textarea" />
                    </Form.Group>
                    <br />

                    <Row>
                        <Form.Group as={Col}>
                            <Form.Label>How can we help? </Form.Label>  <br />
                            <Form.Check name="find" label="Find apartment" inline />
                            <Form.Check name="find" label="Find Job" inline />
                            <Form.Check name="find" label="Connect with the community" inline />
                        </Form.Group>
                        <br />
                        <Form.Group as={Col}>
                            <Form.Label>How would like you like to contribute? </Form.Label> <br />
                            <Form.Check name="list" label="List Apartment" inline />
                            <Form.Check name="list" label="List Job" inline />
                            <Form.Check name="list" label="Mentor" inline />
                        </Form.Group> 
                    </Row> <br />
                    <Button onClick={() => history.push('/home')} className="bootstrapBtn" variant="secondary" size="lg">Submit</Button>
                </Form>
            </Container>
        </>
    )
}

export default ContactPage;
