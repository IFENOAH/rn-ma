import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { CategorySceen } from './screens/categoryScreen';
import { FavoriteScreen } from './screens/favoritescreen';
import { MealDetailScreen } from './screens/mealdetailscreen';
import { MealOverviewScreen } from './screens/mealsoverviewscreen';
import { Ionicons  } from '@expo/vector-icons'

export default function App() {

  const Stack = createNativeStackNavigator()
  const Drawer = createDrawerNavigator()

  const DrawerNavigator =  () => {
    return (
      <Drawer.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: '#ffffff',
        sceneContainerStyle: {backgroundColor: '#3F2F25'},
        drawerContentStyle: {
          backgroundColor: '#351401'
        },
        drawerInactiveTintColor: "#fff",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#E4BAA1",
      }}>
        <Drawer.Screen 
          name='Categories'
          component={CategorySceen}
          options= {{
            title: "Meal Categories",
            drawerIcon: ({ color, size }) => <Ionicons name='list' color={color} size={size} /> 
          }}
        />
        <Drawer.Screen 
          name='Favorites'
          component={FavoriteScreen}
          options={{
            drawerIcon: ({ color, size }) => <Ionicons name='star' color={color} size={size} /> 
          }}
        />
      </Drawer.Navigator>
    )
  }

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
            name = "Drawer" 
            component={DrawerNavigator} 
            options={{
              // title: 'All Categories',
              headerShown: false
            }}
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
