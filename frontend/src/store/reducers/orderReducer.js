import { ADD_TO_CART,REMOVE_FROM_CART,ITEM_QUANTITY_UPDATE,CLEAR_CART
} from 'constants/actionTypes';

const intialState={ status: "loading", shoppingCart: []}

export function shoppingCartReducer(state=intialState,action) {
  const newCart=[...state.shoppingCart];
  console.log(newCart);
    switch (action.type) {
      case  ADD_TO_CART:
        newCart.push(action.payload);
        return {...state,status:"updated",shoppingCart:newCart};
      case  REMOVE_FROM_CART:
        const newShoppingCart=newCart.filter(item=>item.product.id!==action.payload)
        return {...state,status:"updated",shoppingCart:newShoppingCart};
      case ITEM_QUANTITY_UPDATE:
        const newCartUpdated=newCart.map(item=>item.product.id===action.payload.id?{...item,quantity:action.payload.quantity}:item);
        return {...state,status:"updated",shoppingCart:newCartUpdated};
      case CLEAR_CART:
        return {...state,status:"updated",shoppingCart:[]};
      default:
        return state;
    }
  }