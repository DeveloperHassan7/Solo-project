import { useSelector } from "react-redux";
import FavoriteItem from "./FavoriteItem";

function FavoritePage() {
    const favorites = useSelector(store => store.favoriteReducer)


    return (
        <div>
            <h3 className="list">A list of your favorite apartments</h3>
            <div className="container">
                <table>
                    <thead>

                    </thead>
                    <tbody>
                        {favorites.map(favorite => {
                            return <FavoriteItem favorite={favorite} />
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default FavoritePage;
