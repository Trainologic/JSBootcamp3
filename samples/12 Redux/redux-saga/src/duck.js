// types
import {takeEvery, take, put, call} from "redux-saga/effects";
import {getApi} from "./api";
import {createSelector} from 'reselect';

export const types={
    GET_POSTS: 'app/GET_POSTS',
    SET_CURRENT_USER_ID: 'app/filter/SET_CURRENT_USER_ID'
};

function getStatus(data,status) {
    if (status) {
        return status;
    } else {
        if (data) {
            return 'done';
        } else {
            return 'request';
        }
    }
}

// actions
export const actions ={
    // BUG
    getPosts:(data, status=getStatus(data,status))=>
        ({type:types.GET_POSTS,status, data}),
    filterByUserId: (userId)=> ({type:types.SET_CURRENT_USER_ID, userId})
};

// selector
const getPostsByUserId= createSelector(
    getPosts,
        getCurrentUserId,
        (posts,id)=> posts.filter(p => p.userId === parseInt(id))
);

const getUserIds = createSelector(
    [getPosts],
    (posts)=> [...new Set(posts.map(p=>p.userId))]
);

function getPostsState(state){
    return state.posts;
}

function getPosts(state){
    return getPostsState(state).posts;
}

function getCurrentUserId(state) {
    return getPostsState(state).currentUserId;
}

export const selectors={
    getPosts,
    getCurrentUserId,
    getPostsByUserId,
    getUserIds
};

const initialState ={
    posts:[],
    currentUserId: null
}
// reducer
export default (state = initialState, action) => {
    switch(action.type){
        case types.SET_CURRENT_USER_ID:
            return {...state, currentUserId:parseInt(action.userId)};
            break;
        case types.GET_POSTS:
            if(action.status==='done'){
                return {...state, posts: action.data};
            }
            else{
                return state;
            }
        default:
            return state;
    }
}

// saga

function* onGetPostSaga() {
    try {
        const data = yield call(getApi, '/posts');
        yield put(actions.getPosts(data));
        if(data.length) {
            yield put(actions.filterByUserId(data[0].userId));
        }
    }
    catch(error){
        yield put(actions.getPosts(error, 'error'));
    }
}

export function* sagas(){
    yield takeEvery(action=>{
        return action.type===types.GET_POSTS&&
        action.status==='request';
        },onGetPostSaga);
}