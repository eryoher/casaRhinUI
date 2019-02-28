import axios from 'axios';
import * as types from '../actions/types';

export function fetchCarouselData(){
    const request = axios.get(types.PATH_SITE + 'carousels.json');
    return{
      type: types.FETCH_DATA_CAROUSEL,
      payload: request
    };
  }


  export function fetchDataCategories(productId){
    const request = axios.get(types.PATH_SITE + `categories/getListById/${productId}.json`);
    return{
      type: types.FETCH_DATA_CATEGORIES,
      payload: request
    };
  }

  export function fetchDataItem(id){
    const request = axios.get(types.PATH_SITE + `items/${id}.json`);
    return{
      type: types.FETCH_DATA_ITEM,
      payload: request
    };
  }


  export function fetchDataCategory(id){
    const request = axios.get(types.PATH_SITE + `categories/${id}.json`);
    return{
      type: types.FETCH_DATA_CATEGORY,
      payload: request
    };
  }

  export function fetchDataProduct(productId){
    const request = axios.get(types.PATH_SITE + `products/${productId}.json`);
    return{
      type: types.FETCH_DATA_PRODUCT,
      payload: request
    };
  }

  export function fetchDataProducts(){
    const request = axios.get(types.PATH_SITE + 'products.json');
    return{
      type: types.FETCH_DATA_PRODUCTS,
      payload: request
    };
  }

  export function fetchDataTypes(){
    const request = axios.get(types.PATH_SITE + 'types.json');
    return{
      type: types.FETCH_DATA_TYPES,
      payload: request
    };
  }

  export function fetchDataActivities(){
    const request = axios.get(types.PATH_SITE + 'activities.json');
    return{
      type: types.FETCH_DATA_ACTIVITIES,
      payload: request
    };
  }


  export function fetchDataCocktails(){
    const request = axios.get(types.PATH_SITE + 'cocktails.json');
    return{
      type: types.FETCH_DATA_COCKTAILS,
      payload: request
    };
  }

  fetchDataTypes

  export function fetchDataCocktail(id){
    const request = axios.get(types.PATH_SITE + `cocktails/${id}.json`);
    return{
      type: types.FETCH_DATA_COCKTAIL,
      payload: request
    };
  }


  export function fetchDataDepartment(id){
    const request = axios.get(types.PATH_SITE + `departments/${id}.json`);
    return{
      type: types.FETCH_DATA_DEPARTMENT,
      payload: request
    };
  }

  export function sendInfo(data){

    var params = new URLSearchParams();
    params.append('front', true);
    params.append('name', data.name);
    params.append('phone', data.phone);
    params.append('email', data.email);
    params.append('message', data.message);
    params.append('branch', data.branch);
    params.append('term',( data.term) ? 1 : 0 );

    const request = axios.post(types.PATH_SITE + 'contacts.json',params);
    return{
      type: types.SEND_DATA,
      payload: request
    };
  }
