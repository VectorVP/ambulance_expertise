import {
    createStore, combineReducers, applyMiddleware 
} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

//reducers
import { newsListPeducer, createNewReducer } from './reducers/newsReducer'
import { preloaderReducer } from './reducers/preloaderReducer'
import { doctorsListPeducer, doctorPeducer } from './reducers/doctorReducer'
import { userLoginPeducer, userRegisterPeducer, userDetailsReducer } from './reducers/userReducer'

const reducer = combineReducers({
    news:newsListPeducer,
    preloader: preloaderReducer,
    doctors: doctorsListPeducer,
    doctor: doctorPeducer,
    createdNew: createNewReducer,
    userLogin: userLoginPeducer,
    userRegister: userRegisterPeducer,
    userDetails: userDetailsReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? 
JSON.parse(localStorage.getItem('userInfo')) : null

const intitialState = {
    userLogin: { userInfo: userInfoFromStorage },
} // start with default store

const middleware = [thunk]

const store = createStore(
    reducer, 
    intitialState, 
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
) // create global store


export default store