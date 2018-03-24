import theme from './variables';
import merge from 'assign-deep';

const ButtonStyle = {
    buttonStyle: {
        marginLeft: 0,
        marginRight: 0,
        height: 40,
        borderRadius: 3
    },
    textStyle: {
        fontWeight: 'bold'
    },
    containerViewStyle: {
        paddingRight: 0,
        paddingLeft: 0,
        marginLeft: 0,
        marginRight: 0
    }
};

export const TransparentButtonStyle = merge({}, ButtonStyle, {
    buttonStyle: {
        backgroundColor: 'transparent'
    },
    textStyle: {
        color: theme.brandColor
    }
});

export const PrimaryButtonStyle =  merge({}, ButtonStyle, {
    buttonStyle: {
        backgroundColor: theme.primary,
    }

});

