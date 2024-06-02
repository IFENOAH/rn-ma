import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
});

export const FavoritesContextProvider = ({ children }) => {

    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    const addFavorite = (id) => {
        setFavoriteMealIds((prevIds) => [ ...prevIds, id ])
    };

    const removeFavorite = (id) => {
        setFavoriteMealIds((prevIds) => prevIds.filter((mealId) => mealId !== id));
    }

    return (
        <FavoritesContext.Provider value={{
            ids: favoriteMealIds,
            addFavorite,
            removeFavorite,
        }}>
            {children}
        </FavoritesContext.Provider>
    )
}