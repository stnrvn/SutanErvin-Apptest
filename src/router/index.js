import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { Splash } from '../screens'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { BottomNavigator } from '../components'

const Stack = createStackNavigator()

const Router = () => {
  return(
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default Router