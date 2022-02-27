import { useSelector, useDispatch } from "react-redux";
import {useEffect} from 'react'

function SearchPage () {
    const dispatch = useDispatch();
    const buildingList = useSelector(store => store.buildingReducer)
   
    useEffect(() => {
        dispatch({
            type: 'FETCH_BUILDING'
        });
    }, [dispatch])
   
    return(
       <div>
           <ul>
                {buildingList.map((building) => <li key={building}> {building.zip_code}</li>)}
           </ul>
       </div>
    )
}

export default SearchPage;