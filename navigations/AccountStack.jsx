import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/Account/Account";
export default function AccountStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="account"
        component={Account}
        options={{ title: "Cuenta usuario" }}
      />
    </Stack.Navigator>
  );
}
