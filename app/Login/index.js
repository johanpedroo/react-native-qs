import React from 'react';
import {View, Image, ScrollView} from 'react-native';
import {Text, Button, Card} from 'react-native-elements';
import InputWithIcon from '../../components/InputWithIcon'
import Tab from '../../components/Tab'

import styles from './style';
import {TransparentButtonStyle} from '../../assets/button.style';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeMethod: 'CPF'
		};
		this.handlePressTab = this.handlePressTab.bind(this)
		this.submitLogin = this.submitLogin.bind(this)
	}
	handlePressTab (value) {
		this.setState({
			activeMethod: value
		})
	}

	submitLogin () {
		this.props.navigation.navigate('Home')
	}
	render() {
		const loginMethods = ['CPF', 'E-MAIL', 'CELULAR'];
		return (
			<View style={{flex:1}}>
				<ScrollView contentContainerStyle={{flexGrow: 1}}>

					<View style={styles.container}>

						<Text style={styles.welcome} h4>Bem-vindo ao</Text>

						<Image style={styles.logo} source={require('../../assets/logo.png')}/>

						<Text style={styles.askAccount}>Ainda não tem sua conta?</Text>

						<Button title="CADASTRE-SE AGORA" {...styles.buttonSignUp} onPress={() => console.log('')}/>

						<Card {...styles.loginMethods}>

							<View style={{flexDirection: 'row', justifyContent:'flex-start',height: 55}}>

								{loginMethods.map((value, i) => {

									return <Tab key={i} active={this.state.activeMethod} value={value} onPress={() => this.handlePressTab(value)}/>

								})}

							</View>

							<InputWithIcon inputIcon="user-circle" placeholder="Documento"/>

							<InputWithIcon inputIcon="lock" placeholder="Senha" password={true}/>

							<View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>

								<Button {...TransparentButtonStyle} title="ESQUECI A SENHA"/>

								<Button {...TransparentButtonStyle} title="ENTRAR" onPress={this.submitLogin}/>

							</View>

						</Card>

					</View>

				</ScrollView>

				<Button {...styles.moreAbout} title="SAIBA MAIS"/>

			</View>
		);
	}
};
