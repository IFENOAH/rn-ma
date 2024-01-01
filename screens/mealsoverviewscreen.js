import { FlatList, StyleSheet, Text, View } from "react-native"
import { MealItem } from "../components/mealItem";
import { MEALS } from "../data/fakedata"

export const MealOverviewScreen = ({ route }) => {

    const categoryID = route.params.categoryId;

    const displayedMeals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(categoryID) >= 0
    })

    const renderMealItem = (meal) => {
        return <MealItem title={meal.item.title} />
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