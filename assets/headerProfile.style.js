import theme from './variables';
import merge from "lodash/merge";

const profileText = {
	fontSize: 11
};

export default {
	userContainer:{
		flex: 1,
		flexDirection: 'row',
		marginLeft: 15
	},
	userIds: {
		marginLeft: 10,
		justifyContent: 'center'
	},
	welcomeText: merge({}, profileText, {
		fontWeight: 'bold',
		color: '#333'
	}),
	documentText: merge({}, profileText, {
		fontWeight: 'bold',
		color: theme.brandColor
	})


}
