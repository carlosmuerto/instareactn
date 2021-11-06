import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button } from 'react-native';
import { RootStackParamList } from '../RootStackPrams';

type authScreenProp = StackNavigationProp<RootStackParamList, 'Auth'>;

export default function Landing() {
	const navigation = useNavigation<authScreenProp>();
	return (
		<View style={styles.container}>
			<Button
				title="Register"
				onPress={() => navigation.navigate("Register")}
			/>
			<Button
				title="Login"
				onPress={() => navigation.navigate("Login")}
			/>
		</View>
	)
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
});