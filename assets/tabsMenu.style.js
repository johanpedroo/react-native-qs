import theme from './variables'
import tabStyle from './tab.style'
import merge from "assign-deep";

export default {
	container:{
		flexDirection: 'row',
		backgroundColor: theme.brandColor,
		height: 60,
		width: '100%',
		borderTopWidth: 3,
		borderColor: 'rgba(0,0,0,0.1)'
	},
	menuButton: merge({}, tabStyle.tab(), {
		buttonStyle: {
			backgroundColor: 'transparent',
			borderBottomWidth: 0,
			height: 60,
			flexDirection: 'column'
		},
		textStyle: {
			color: 'white',
			fontSize: 12,
			fontWeight: 'normal'
		},
		containerViewStyle: {
			height: 60,
		}
	}),
	tabIcon: {
		marginRight: 0
	}
}
