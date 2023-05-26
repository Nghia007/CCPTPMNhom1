import { environment } from "src/environments/environment";

const BASE_URL = 'http://localhost:4500';

export const FOODS_URL = BASE_URL + '/api/foods';
export const FOODS_TAGS_URL = FOODS_URL + '/tags';
export const FOODS_BY_SEARCH_URL = FOODS_URL + '/search/';
export const FOODS_BY_TAG_URL = FOODS_URL + '/tag/';
export const FOOD_BY_ID_URL = FOODS_URL + '/';
export const DELETEBOOK_BY_ID_URL = FOODS_URL + '/delete/';
export const EDITBOOK_BY_ID_URL = FOODS_URL + '/edit-book/';
export const ADDBOOK_URL = FOODS_URL + '/create';


export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
export const USER_REGISTER_URL = BASE_URL + '/api/users/register';
export const USER_EDIT_URL = BASE_URL + '/api/users/edit-user/';
export const USER_DELETE_URL = BASE_URL + '/api/users/delete/';
export const USER_GET_ALL = BASE_URL + '/api/users/getall';


export const ORDERS_URL = BASE_URL + '/api/orders';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
export const ORDER_NEW_FOR_CURRENT_USER_URL = ORDERS_URL + '/newOrderForCurrentUser';
export const ORDER_PAY_URL = ORDERS_URL + '/pay';
export const ORDER_TRACK_URL = ORDERS_URL + '/track/';
export const GET_ALL_ORDER = ORDERS_URL + '/getall-order-admin';
export const PUT_ORDER = ORDERS_URL + '/edit-order/';
