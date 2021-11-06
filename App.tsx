import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList } from './components/RootStackPrams';
import LandingScreen from "./components/auth/landing";

const Stack = createStackNavigator<RootStackParamList>();
export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Landing">
				<Stack.Screen name="Landing" component={LandingScreen} /*options={{ headerShown: false }} */ />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

