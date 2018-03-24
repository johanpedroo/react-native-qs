import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';

import balance, {BalanceButton} from '../assets/headerBalance.style';
console.log(balance);
export default class HeaderBalance extends Component {
	constructor(props){
		super(props)
	}

	render () {
		const {onPress} = this.props;
		return (
			<Button {...BalanceButton} title="ver saldo" onPress={onPress}/>
		)
	}
}
HeaderBalance.propTypes = {
	onPress: PropTypes.func
};
