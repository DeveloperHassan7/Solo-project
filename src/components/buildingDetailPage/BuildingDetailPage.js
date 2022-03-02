import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

function BuildingDetailPage() {
    const buildingList = useSelector(store => store.buildingReducer)
    const params = useParams();

    const building = buildingList.find(building => Number(params.id) === Number(building.id))


    return(
        <>
        <h2>Building Detail</h2>
        <table>
            <tbody>
                <tr>
                    <td>Apartment Name:</td>
                    <td>{building.name}</td>
                </tr>
                <tr>
                    <td> Description:</td>
                    <td>{building.description}</td>
                </tr>
                <tr>
                    <td> Address:</td>
                    <td>{building.address}</td> <br />
                    <td>{building.state}</td> <br />
                    <td>{building.city}</td> <br />
                     <td>{building.zip_code}</td>    
                </tr>
                    <tr>
                    <td> Contanct:</td>
                    <td>{building.description}</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default BuildingDetailPage;