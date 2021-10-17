import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './HomeComponent'
import Recipe from './RecipesComponent'
import Favorites from './FavoritesComponent';
import ShoppingList from './ShoppingList';




const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Recipes" component={Recipe} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Shopping List" component={ShoppingList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}