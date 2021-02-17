import { NavigationContainer, TabActions } from '@react-navigation/native'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import React from 'react'
import Restaurants from '../screens/Restaurants'
import Favorites from '../screens/Favorites'
import TopRestaurants from '../screens/TopRestaurants'
import Search from '../screens/Search'
import Account from '../screens/Account'

const Tab = createBottomTabNavigator()
export default function Navigation() {
    return (
       <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen options={{title:"Restaurants"}} name="restaurants" component={Restaurants}/>
            <Tab.Screen options={{title:"Favorites"}} name="favorites" component={Favorites}/>
            <Tab.Screen options={{title:"Top 5"}} name="topRestaurants" component={TopRestaurants}/>
            <Tab.Screen options={{title:"Search"}} name="search" component={Search}/>
            <Tab.Screen options={{title:"Account "}} name="account" component={Account}/>
        </Tab.Navigator>
       </NavigationContainer>
    )
}
