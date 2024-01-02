import { FlatList } from "react-native"
import { CategoryGrid } from "../components/categoryGrid"
import { CATEGORIES } from "../data/fakedata"

export const CategorySceen = ({ navigation }) => {

    const renderCategoryItem = (itemData) => {
        const handlePressHandler = () => {
            navigation.navigate('Meal Overview', {
                categoryId: itemData.item.id, 
            });
        }

        return (
            <CategoryGrid 
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={handlePressHandler}
            />
        )
    }

    return (
        <FlatList 
            keyExtractor={(item) => item.id}
            data={CATEGORIES}
            renderItem = {renderCategoryItem}
            numColumns= {2}
        />
    )
}