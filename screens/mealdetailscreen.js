import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "../components/iconbutton";
import { List } from "../components/list";
import { MealDetail } from "../components/mealdetail";
import { MEALS } from "../data/fakedata";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

export const MealDetailScreen = ({ route, navigation }) => {

    // const favoriteMealsContext = useContext(FavoritesContext);

    const dispatch = useDispatch();
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)

    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    const mealIsFavorite = favoriteMealIds.includes(mealId);

    const favoriteHandler = () => {
        if(mealIsFavorite) dispatch(removeFavorite({id: mealId}));
        if(!mealIsFavorite) dispatch(addFavorite({id: mealId}));
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton 
                        onPress={favoriteHandler}
                        icon={mealIsFavorite ? 'star' : 'star-outline'}
                        color="#fff"
                    />
                )
            }
        })
    }, [navigation, favoriteHandler])

    return (
        <ScrollView style={styles.container}>
            <Image style={styles.imageStyle} source={{uri: selectedMeal.imageUrl}} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetail
                textStyle={{ color: "#FFF" }}
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
            />

            <View style={styles.listWrapper}>
                <View style={styles.listContainer}>
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitle}>Ingredients</Text>
                    </View>
                    <List 
                        payload={selectedMeal.ingredients}
                    />
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitle}>Steps</Text>
                    </View>
                    <List 
                        payload={selectedMeal.steps}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 32,
    },
    imageStyle: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: '#fff'
    },
    subtitleContainer: {
        borderBottomColor: '#E2B497',
        borderBottomWidth: 2,
        padding: 6,
        marginVertical: 8,
        marginHorizontal: 12
    },
    subtitle: {
        color: '#E2B497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    listContainer: {
        width: '80%'
    },
    listWrapper: {
        alignItems: 'center'
    }
})