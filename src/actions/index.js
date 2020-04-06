//Action creator
import CarsApi from '../Api/CarsApi';

export const selectCar = (car) => {
    //return an action
    return {
        type: 'SELECTED_CAR',
        payload: car
    }
}

export const fetchCars = () => {

    return async (dispatch, getState) => {
        const response = await CarsApi.get('/cars');
        dispatch({ type: 'FETCH_CARS', payload: response.data })
    }
}

export const addToCart = (car) => {
    return {
        type: 'ADD_TO_CART',
        car
    }
}

export const removeItem =(id)=>{
    return{
        type:'REMOVE_ITEM',
        id
    }
}

