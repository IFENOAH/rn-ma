import { useLayoutEffect } from "react";
import { StyleSheet } from "react-native"
import { MealsList } from "../components/MealsList/mealsList";
import { MEALS, CATEGORIES } from "../data/fakedata"

export const MealOverviewScreen = ({ route, navigation }) => {

    const categoryID = route.params.categoryId;

    const displayedMeals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(categoryID) >= 0
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === categoryID).title
        navigation.setOptions({
            title: categoryTitle
        });

    }, [categoryID, navigation])

    return (
        <MealsList displayedMeals={displayedMeals} navigation={navigation} />
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})