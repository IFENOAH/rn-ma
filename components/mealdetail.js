import { StyleSheet, Text, View } from "react-native"

export const MealDetail = ({ duration, complexity, affordability, style, textStyle }) => {
    return (
        <View style={[styles.detailsStyle, style]}>
            <Text style={[styles.detailtItem, textStyle]}>{duration} minutes</Text>
            <Text style={[styles.detailtItem, textStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detailtItem, textStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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
})