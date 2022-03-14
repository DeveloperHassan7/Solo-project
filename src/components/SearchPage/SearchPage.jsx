import { useSelector, useDispatch } from "react-redux";
import './SearchPage.css';
import { useHistory } from 'react-router-dom';
import { Row, Col, Card, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"



function SearchPage() {
  const buildingList = useSelector(store => store.buildingReducer)
  const favorites = useSelector(store => store.favoriteReducer)
  const dispatch = useDispatch();
  const history = useHistory();


  console.log(`What is inside of the favorites:`, favorites);
  function handleFavorite(event, id) {
    event.preventDefault();
    console.log(`What is the id`, id)
    dispatch({
      type: 'ADD_FAVORITE',
      payload: { building_id: id }
    });
  }

  function test() {

  }


  return (
    <div className="searchContainer">
      <Container >
        <div className="">
          <input placeholder="Fargo,ND" className="city-state" />
          <select className="bed">
            <option value="Beds">Beds</option>
            <option>Any </option>
            <option>Studio</option>
            <option>1 Bed</option>
            <option>2 Bed</option>
            <option>3 Bed</option>
          </select>
          <select className="price">
            <option value="Max Price">Max Price</option>
            <option>No Max</option>
            <option>$300</option>
            <option>$400</option>
            <option>$500</option>
            <option>$600</option>
            <option>$700</option>
            <option>$800</option>
            <option>$900</option>
          </select>
          <select className="bath">
            <option value="Baths">Baths</option>
            <option>Any </option>
            <option>1 Bathroom</option>
            <option>2 Bathroom</option>
            <option>3 Bathroom</option>
          </select>
          <select className="offense">
            <option value="Offense">Offense</option>
            <option>Any </option>
            <option>Drug Distrubtion</option>
            <option>Assult</option>
            <option>Robbery</option>
          </select>
          <button onClick={test} className="search">Search</button>
        </div>
        <Row xs={1} md={2} lg={4} className="g-4">
          {buildingList.map(building => {
            const found = favorites.find(favorite => favorite.building.id === building.id);
            return (
              <Col>
                <Card className="search-container">
                  <Card.Img variant="top" src={`/${building.apartment_image_url}`} />
                  <Card.Body>
                    <Card.Title>{building.name}</Card.Title>
                    <Card.Text className="descr">
                      {building.description.slice(0, 100)}{building.description.length > 100 && '...'}
                    </Card.Text>
                  </Card.Body>
                  <Card.Body className="d-flex justify-content-between">
                    {!found
                      ? <button onClick={(event) => handleFavorite(event, building.id)} className="btn btn-link text-decoration-none">  <FontAwesomeIcon icon={faHeart} className="favoriteSpanBtn"></FontAwesomeIcon> </button>
                      : <span> <FontAwesomeIcon icon={faHeart} className="favoriteBtn"></FontAwesomeIcon> </span>}
                    <button onClick={() => history.push(`/details/${building.id}`)} className="btn btn-link text-decoration-none">View</button>
                  </Card.Body>
                  <Card.Body>
                    <p>{building.recommend_count} person recommended </p>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default SearchPage;
