import React from 'react';
import {Mutation, Query} from 'react-apollo';
import {compose, gql} from 'apollo-boost';

import CartIcon from './cart-icon.component';

const TOGGLE_CART_HIDDEN = gql`
	mutation ToggleCartHidden {
		toggleCartHidden @client
	}
`;

const GET_ITEM_COUNT = gql`
	{
		itemCount @client
	}
`;

//const CartIconContainer = (props) => (
// <Query query={GET_ITEM_COUNT}>
// 	{({data: {itemCount}}) => (
// 		<Mutation mutation={TOGGLE_CART_HIDDEN}>
// 			{toggleCartHidden => (
// 				<CartIcon toggleCartHidden={toggleCartHidden} itemCount={itemCount} />
// 			)}
// 		</Mutation>
// 	)}
// </Query>
//);

const CartIconContainer = ({data: {itemCount}, toggleCartHidden}) => (
	<CartIcon toggleCartHidden={toggleCartHidden} itemCount={itemCount} />
);

export default compose(
	graphql(GET_ITEM_COUNT),
	graphql(TOGGLE_CART_HIDDEN, {name: 'toggleCartHidden'}),
)(CartIconContainer);
