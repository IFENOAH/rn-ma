import { Pressable, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export const IconButton = ({ icon, color, onPress }) => {
    return (
        <Pressable 
            style={({ pressed }) => pressed ? styles.container : null} 
            onPress={onPress}
        >
            <Ionicons 
                name={icon}
                size={24}
                color= {color}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        opacity: 0.7
    }
})