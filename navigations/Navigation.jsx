import { NavigationContainer, TabActions } from '@react-navigation/native'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import React from 'react'
import RestaurantsStack from './RestaurantsStack'
import AccountStack from './AccountStack'
import FavoritesStack from './FavoritesStack'
import TopRestaurantstack from './TopRestaurantsStack'
import SearchStack from './SearchStack'
const Tab = createBottomTabNavigator()
export default function Navigation() {
    return (
       <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen 
            options={{title:"Restaurants"}} 
            name="restaurants" 
            component={RestaurantsStack}
            />
            <Tab.Screen 
            options={{title:"Favorites"}} 
            name="favorites" 
            component={FavoritesStack}
            />
            <Tab.Screen 
            options={{title:"Top 5"}} 
            name="topRestaurants" 
            component={TopRestaurantstack}
            />
            <Tab.Screen 
            options={{title:"Search"}} 
            name="search" 
            component={SearchStack}
            />
            <Tab.Screen 
            options={{title:"Account "}} 
            name="account" 
            component={AccountStack}
            />
        </Tab.Navigator>
       </NavigationContainer>
    )
}
