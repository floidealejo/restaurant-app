import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Restaurants from '../screens/Restaurants'
export default function RestaurantsStack() {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name="restaurants" component={Restaurants} 
            options={{title:"Restaurantes"}}
            />
        </Stack.Navigator>
    )
}
