import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
export default function App() {
	return (
		<NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
	);
}

