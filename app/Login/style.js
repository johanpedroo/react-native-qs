import theme from '../../assets/variables';
import { Platform } from 'react-native';
export default {
	container: {
		flex: 1,
		backgroundColor: '#F1F5F8',
		alignItems: 'center',
	},
	welcome: {
		alignSelf: 'center',
		color: '#777',
		fontSize: 19,
		marginTop: 40
	},
	logo: {
		width: 200,
		height: 60,
		resizeMode: 'contain',
		marginTop: 10
	},
	askAccount: {
		color: '#777',
		marginTop: 10,
		fontSize: 15
	},
	buttonSignUp: {
		textStyle: {
			textAlign: 'center',
			width: 250
		},
		buttonStyle: {
			backgroundColor: theme.brandColor,
			borderRadius: 3,
			marginTop: 20,
			marginLeft: 30,
			marginRight: 30,
			height: 30
		}
	},
	loginMethods: {
		wrapperStyle: {
			margin: 20,
			marginBottom: 10,
			marginTop: 0,
			flexDirection: 'column',
			padding: 0,
			width: 300,
		},
		titleStyle: {
			display: 'none'
		},
		dividerStyle: {
			display: 'none'
		},
		containerStyle: {
			marginTop: 20,
			padding: 0,
			elevation: 2,
			...Platform.select({
				ios: {
					shadowColor: 'rgba(0,0,0, .2)',
					shadowOffset: { height: 0, width: 0 },
					shadowOpacity: 1,
					shadowRadius: 1,
				},
				android: {
					elevation: 4,
				},
			}),
			borderRadius: 5
		}

	},
	moreAbout: {
		buttonStyle: {
			backgroundColor: '#fff',
			marginLeft: 0,
			marginRight: 0,
			height: 50,
			width: '100%',
			borderTopWidth: 2,
			borderColor: '#ddd'
		},
		textStyle: {
			color: theme.brandColor,
			fontWeight: 'bold'
		},
		containerViewStyle: {
			padding: 0,
			marginLeft: 0,
			marginRight: 0
		}
	},
	loginInput: {
		containerStyle:{
			width: '100%',
			marginLeft:0
		},
		inputStyle: {
			paddingLeft: 30
		}
	}
};
