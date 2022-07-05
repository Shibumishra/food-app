import { combineReducers } from 'redux';
import { GET_NUMBER_CART, ADD_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, DELETE_CART } from '../actions';
import Burger from '../assets/burger.jpeg'
import Fries from '../assets/fries.jpeg'
import Pepsi from '../assets/pepsi.jpeg'
import Coke from '../assets/coke.jpeg'

const initProduct = {
    numberCart: 0,
    Carts: [],
    _products: [
        {
            "id": "1",
            "name": "Hamburger",
            "price": "200",
            "image": Burger
        },
        {
            "id": "2",
            "name": "Fries",
            "price": "100",
            "image": Fries
        },
        {
            "id": "3",
            "name": "Coke",
            "price": "50",
            "image": Coke
        },
        {
            "id": "4",
            "name": "Pepsi",
            "price": "50",
            "image": Pepsi
        },
    ]
}

function todoProduct(state = initProduct, action) {
    switch (action.type) {

        case GET_NUMBER_CART:
            return {
                ...state
            }
        case ADD_CART:
            if (state.numberCart == 0) {
                let cart = {
                    id: action.payload.id,
                    quantity: 1,
                    name: action.payload.name,
                    image: action.payload.image,
                    price: action.payload.price
                }
                state.Carts.push(cart);
            }
            else {
                let check = false;
                state.Carts.map((item, key) => {
                    if (item.id == action.payload.id) {
                        state.Carts[key].quantity++;
                        check = true;
                    }
                });
                if (!check) {
                    let _cart = {
                        id: action.payload.id,
                        quantity: 1,
                        name: action.payload.name,
                        image: action.payload.image,
                        price: action.payload.price
                    }
                    state.Carts.push(_cart);
                }
            }
            return {
                ...state,
                numberCart: state.numberCart + 1
            }
        case INCREASE_QUANTITY:
            state.numberCart++
            state.Carts[action.payload].quantity++;

            return {
                ...state
            }
        case DECREASE_QUANTITY:
            let quantity = state.Carts[action.payload].quantity;
            if (quantity > 1) {
                state.numberCart--;
                state.Carts[action.payload].quantity--;
            }

            return {
                ...state
            }
        case DELETE_CART:
            return {
                ...state.Carts,
            }
        default:
            return state;
    }
}
const ShopApp = combineReducers({
    _todoProduct: todoProduct
});
export default ShopApp;