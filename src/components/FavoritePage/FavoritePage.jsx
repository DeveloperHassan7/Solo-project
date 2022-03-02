import { useSelector } from "react-redux";
import FavoriteItem from "./FavoriteItem";

function FavoritePage() {
    const favorites = useSelector(store => store.favoriteReducer)
    

    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Private Note</th>
                        <th>Public Note</th>
                        <th>Recommend</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {favorites.map(favorite => {
                        return <FavoriteItem favorite={favorite} /> 
                    })}
                </tbody>
            </table>
        </div>
    )
}


export default FavoritePage;
