import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CategorySceen } from './screens/categoryScreen';
import { MealOverviewScreen } from './screens/mealsoverviewscreen';

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Meal Categories" component={CategorySceen} />
        <Stack.Screen name = "Meal Overview" component={MealOverviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
      <StatusBar style='dark' />
    </>
    );
}

const styles = StyleSheet.create({
  container: {},
});
