import * as types from '../actions/types';
const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action){
    switch (action.type) {
        case types.FETCH_DATA_CAROUSEL:
            return {...state, carousels:action.payload.data.carousels };
        case types.FETCH_DATA_CATEGORIES:
            return {...state, categories:action.payload.data.categories };
        case types.FETCH_DATA_PRODUCTS:
            return {...state, products:action.payload.data.products };
        case types.FETCH_DATA_PRODUCT:
            return {...state, product:action.payload.data.product };
        case types.FETCH_DATA_CATEGORY:
            return {...state, category:action.payload.data.category };
        case types.FETCH_DATA_ITEM:
            return {...state, item:action.payload.data.item };
        case types.FETCH_DATA_COCKTAILS:
            return {...state, cocktails:action.payload.data.cocktails };
        case types.FETCH_DATA_COCKTAIL:
            return {...state, cocktail:action.payload.data.cocktail };
        case types.FETCH_DATA_DEPARTMENT:
            return {...state, department:action.payload.data.department };
        case types.FETCH_DATA_TYPES:
            return {...state, types:action.payload.data.types };
        case types.FETCH_DATA_ACTIVITIES:
            return {...state, activities:action.payload.data.activities };
        case types.SEND_DATA:
            return {...state, formResponse:action.payload.data };
    }
    return state;
}
