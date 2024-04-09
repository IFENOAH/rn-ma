import { useLayoutEffect } from "react";
import { FlatList, StyleSheet,  View } from "react-native"
import { MealItem } from "../components/mealItem";
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

    const renderMealItem = (meal) => {
        return (
            <MealItem
                id={meal.item.id}
                title={meal.item.title} 
                imageUrl={meal.item.imageUrl} 
                duration={meal.item.duration}
                complexity={meal.item.complexity}
                affordability={meal.item.affordability}
                navigation={navigation}
            />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor= {(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})