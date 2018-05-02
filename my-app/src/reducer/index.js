import { createStore ,combineReducers} from "redux";

const reducer = function(state = {}, action) {
	return state;
}

//合并多个reducer
// const allReducers = {
// 	products: productsReducer,
// 	shoppingCart: cartReducer
// }
// const rootReducer = combineReducers(allReducers);

const store = createStore(reducer);