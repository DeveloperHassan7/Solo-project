import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { ListGroup, Card, Container, ListGroupItem } from "react-bootstrap"
import { useEffect } from 'react';
import './BuildingDetailPage.css'



function BuildingDetailPage() {
    const buildingList = useSelector(store => store.buildingReducer)
    const params = useParams();
    const dispatch = useDispatch()
    const user = useSelector(store => store.user)
    const favorite = useSelector(store => store.favoriterReducer)

    const building = buildingList.find(building => Number(params.id) === Number(building.id))
    const note = useSelector(store => store.publicNoteReducer)

    useEffect(() => {
        dispatch({ type: 'FETCH_PUBLIC_NOTE' });
    }, [dispatch]);

    return (
        <Container>
            <div>
                <h1>Apartment Detail Below</h1>


             <ListGroup > 
                    <ListGroup.Item>{building.name}</ListGroup.Item>
                    <ListGroup.Item>{building.description}</ListGroup.Item>
                    <ListGroup.Item>{building.address}  {building.city}, {building.state} {building.zip_code}</ListGroup.Item>
                    <ListGroup.Item className="btn btn-link">{building.website}</ListGroup.Item>
                    
                </ListGroup>  <br /> 
                <ul>
                    {note.map(notes => <li key={notes.id}>
                        <h5><p><em>{notes.public_note} </em></p>  - Review left by {user.username} </h5>    
                     
                    </li>)}
                </ul>
            </div>
        </Container>
    )
}

export default BuildingDetailPage;

