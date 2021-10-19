import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './HomeComponent';
import Recipe from './RecipesComponent';
import Favorites from './FavoritesComponent';
import ShoppingList from './ShoppingListComponent';




const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } if (route.name === 'Recipes') {
              iconName = focused ? 'fast-food' : 'fast-food-outline';
            } if (route.name === 'Favorites') {
              iconName = focused ? 'heart' : 'heart-outline';
            } if (route.name === 'Shopping List') {
              iconName = focused ? 'cart' : 'cart-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'purple',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Recipes" component={Recipe} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Shopping List" component={ShoppingList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}