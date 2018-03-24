import theme from './variables';
import {TransparentButtonStyle} from '../assets/button.style';
import merge from "assign-deep";

console.log(TransparentButtonStyle);


export const BalanceButton = merge({}, TransparentButtonStyle, {
    buttonStyle: {
        height: 20
    },
    icon:{
        name: 'arrow-down',
        type: 'font-awesome',
        color: theme.brandColor,
        size: 12
    }
});