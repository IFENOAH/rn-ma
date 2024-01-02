import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text } from 'react-native';
import { CategorySceen } from './screens/categoryScreen';
import { MealDetailScreen } from './screens/mealdetailscreen';
import { MealOverviewScreen } from './screens/mealsoverviewscreen';

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: '#ffffff',
            contentStyle: {backgroundColor: '#3F2F25'}
          }}
        >
          <Stack.Screen 
            name = "Meal Categories" 
            component={CategorySceen} 
            options={{title: 'Categories'}} 
          />
          <Stack.Screen 
            name = "Meal Overview" 
            component={MealOverviewScreen}
          />
          <Stack.Screen
            name='Meal Detail'
            component={MealDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='light' />
    </>
    );
}

const styles = StyleSheet.create({
  container: {},
});
