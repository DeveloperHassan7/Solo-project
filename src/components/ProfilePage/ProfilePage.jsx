import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';


function ProfilePage() {
    const dispatch = useDispatch();
    const favorites = useSelector(store => store.favoriteReducer)
    const user = useSelector(store => store.user)
    
    console.log('This user is', user);
    useEffect(() => {
        dispatch({
          type: 'FETCH_FAVORITES'
        });
      }, [dispatch])
    
    return (
       <div>
           <h2>..</h2>
       </div>
    )
}


export default ProfilePage;