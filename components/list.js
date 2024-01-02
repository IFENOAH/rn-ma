import { StyleSheet, Text, View } from "react-native"

export const List = ({ payload }) => {
    return (
        payload.map((data) => (
            <View key={data} style={styles.container}>
                <Text style={styles.textStyle}>{data}</Text>
            </View>
        ))
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#E2B497'
    },
    textStyle: {
        color: "#351401",
        textAlign: "center",

    }
})