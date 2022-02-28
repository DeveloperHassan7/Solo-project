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
        <u>
         {user.full_name} <br />
         {user.profile_image_url}
        
         
        </u>
       </div>
    )
}


export default ProfilePage;