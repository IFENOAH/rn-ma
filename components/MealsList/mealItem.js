import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native"
import { MealDetail } from "../mealdetail"

export const MealItem = ({ id, title, imageUrl, duration, complexity, affordability, navigation }) => {

    const handleNavigation = () => {
        navigation.navigate('Meal Detail', { mealId: id, title: title })
    }

    return (
        <View style={styles.mealItemContainer}>
            <Pressable 
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => pressed ? styles.buttonPressedIos : null }
                onPress = {handleNavigation}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image style={styles.imageStyle} source={{ uri: imageUrl }} />
                        <Text style = {styles.title}>{title}</Text>
                    </View>
                    <MealDetail
                        duration={duration}
                        complexity={complexity}
                        affordability={affordability}
                    />
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItemContainer: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: .20,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? 'hidden' : 'visible',
    },
    innerContainer:{
        borderRadius: 8,
        overflow: "hidden"
    },
    imageStyle: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    detailsStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailtItem: {
        marginHorizontal: 4,
        fontSize: 12
    },
    buttonPressedIos: {
        opacity: 0.5,
    },
})