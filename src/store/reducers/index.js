import { ADD_ORDER, PLUS_QUANTLY } from "../actions";

const defaultState = {
  orders: [],
  totalPrice: 0,  
  totalCount: 0,
};

export const rootReducer = (state = defaultState, action) => {
  let is_chosen = state.orders.findIndex(
    (item) => item.title === action.payload.title
  )

  switch (action.type) {
    case ADD_ORDER:

        if(is_chosen !== -1){
          let arr = [...state.orders]
          arr[is_chosen].count = arr[is_chosen].count + 1
          arr[is_chosen].sum = arr[is_chosen].sum + action.payload.price
        

          return {
            ...state,
            orders: arr
          }
        }else{
          return {
            ...state,
            orders: [
              ...state.orders,
              {
                title: action.payload.title,
                price: action.payload.price,
                count: 1,
                sum: action.payload.price
              },
            ],
          };
        }

    case PLUS_QUANTLY:
      arr[is_chosen].countMinus = arr[is_chosen].count - 1
      arr[is_chosen].sumMinus = arr[is_chosen].sum - action.payload.price

      return{
        ...state
      }
     
    default:
      return state;
  }
};
