const DATA_URL = 'https://api.github.com';

//INITIAL STATE
const initialSate = {
    data: [],
    isLoading: false,
    searchInput: '',
    user: null,
}


//ACTIONS
const SET_USERS = 'SET_USERS';
const SET_LOADING = 'SET_LOADING';

const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
const CLEAN_INPUT_VALUE = 'CLEAN_INPUT_VALUE';

const GET_USER = 'GET_USER';
const CLEAN_USER = 'CLEAN_USER'

//REDUCER
export const users = (state = initialSate, action) => {
    switch(action.type) {

        case SET_USERS:
            return {
                data: action.payload,
                isLoading: false,
                searchInput: '',
                user: null,
            }

        case SET_LOADING:
            return {
                ...state,
                isLoading: true,
            }

        case SET_INPUT_VALUE:
            return {
                ...state,
                searchInput: action.payload,
            }

        case CLEAN_INPUT_VALUE:
            return {
                ...state,
                searchInput: '',
            }
        
        case GET_USER:
            return {
                ...state,
                user: action.payload,
            }

        case CLEAN_USER: 
            return {
                ...state,
                user: null
            }
            
        default:
            return state;    
    }
}

//ACTION CREATORS
export const setUsers = (users) => ({ type: SET_USERS, payload: users });

export const setLoading = () => ({ type: SET_LOADING });

export const setInputValue = (str) => ({ type: SET_INPUT_VALUE, payload: str });

export const cleanInputValue = () => ({ type: CLEAN_INPUT_VALUE, });

export const getUser = (user) => ({ type: GET_USER, payload: user });

export const cleanUser = () => ({ type: CLEAN_USER })

export const fetchUsers = () => (dispatch) => {
    dispatch(setLoading()); 
    fetch(`${DATA_URL}/users`)
        .then(r => r.json())
        .then(data => {
            const formattedData = Object.keys(data)
            .map(key => {
                return {
                    id: key,
                    ...data[key]
                }
            })
            dispatch(setUsers(formattedData))
        })
};