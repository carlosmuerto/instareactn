import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'


interface RegisterProps {
}

interface RegisterState {
	email: string,
	password: string,
	userName: string,
}

export class Register extends Component<RegisterProps, RegisterState> {
	constructor(props: RegisterProps) {
		super(props);
		this.state = {
			email: "",
			password: "",
			userName: "",
		};
		this.onSignUp = this.onSignUp.bind(this);
	}

	render() {
		return (
			<View>
				<TextInput
					placeholder="User Name"
					onChangeText={(userName) => this.setState({ userName })}
				/>
				<TextInput
					placeholder="email"
					onChangeText={(email) => this.setState({ email })}
				/>
				<TextInput
					placeholder="password"
					secureTextEntry={true}
					onChangeText={(password) => this.setState({ password })}
				/>
				<Button
					title=""
					onPress={() => this.onSignUp()}
				/>
			</View>
		)
	}

	onSignUp(): void {
		throw new Error('Method not implemented.');
	}
}

export default Register
