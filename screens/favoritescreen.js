import { useContext } from "react"
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { MealsList } from "../components/MealsList/mealsList";
import { MEALS } from "../data/fakedata";
import { FavoritesContext } from "../store/context/favorites-context"

export const FavoriteScreen = ({ navigation }) => {

    // const favoritesContext = useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)
    const favoriteMeals = MEALS.filter((meal) => favoriteMealIds.includes(meal.id))

    if(favoriteMeals.length === 0){
        return (
            <View  style={styles.rootContainer}>
                <Text style={styles.text}>No Favorite Meals yet...</Text>
            </View>
        )
    }

    return (
        <MealsList displayedMeals={favoriteMeals} navigation={navigation}  />
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff'
    }
})