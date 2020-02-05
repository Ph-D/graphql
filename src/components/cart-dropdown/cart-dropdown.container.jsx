import React from 'react'
import { Query, Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

import CartDropdown from './cart-dropdown.component'
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const TOGGLE_CART_HIDDEN = gql`
	mutation ToggleCartHidden {
		toggleCartHidden @client
	}
`;

const GET_CART_ITEMS = gql`
	{
		cartItems @client
	}
`;

const CartDropdownContainer = () => (
	<Mutation mutation={TOGGLE_CART_HIDDEN}>
		{
			toggleCartHidden => (
				<Query></Query>
			)
		}
	</Mutation>
)