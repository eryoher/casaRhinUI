import { combineReducers } from 'redux';
import productsReducer from './products';
import cocktailsReducer from './sensations';
import componentsReducer from './components';

import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
    products: productsReducer,
    cocktails : cocktailsReducer,
    form: formReducer,
    data : componentsReducer
});

export default rootReducer;
