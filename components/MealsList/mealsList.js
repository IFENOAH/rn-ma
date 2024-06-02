import { View, FlatList, StyleSheet } from "react-native"
import { MealItem } from "./mealItem"

export const MealsList = ({ displayedMeals, navigation }) => {

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