import { combineReducers } from 'redux';


const initState = {

    addedItems: [],
    total: 0

}
const carReducer = (state = [], action) => {

    if (action.type === 'FETCH_CARS') {
        return action.payload;
    }

    return state;

};


const selectedCarReducer = (selectedCar = null, action) => {

    if (action.type === 'SELECTED_CAR') {
        return action.payload;
    }

    return selectedCar;
};

const CartReducer = (state = initState, action) => {

    if (action.type === 'ADD_TO_CART') {
       
        let addedItem = action.car;
        let existedItems = state.addedItems.find(item => action.car.carId === item.carId);
        if (existedItems) {
            addedItem.quantity += 1;

            return {
                ...state,
                total: state.total + addedItem.price
            };
        }
        else {
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }

        }
    }

    if(action.type === 'REMOVE_ITEM'){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
      
        
    
    return state
};



export default combineReducers({
    cars: carReducer,
    selectedcars: selectedCarReducer,
    cart: CartReducer
})
