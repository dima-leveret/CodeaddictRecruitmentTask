const DATA_URL = 'https://api.github.com';

//INITIAL STATE
const initialSate = {
    data: [],
    isLoading: false,
    searchInput: '',
}


//ACTIONS
const SET_USERS = 'SET_USERS';
const SET_LOADING = 'SET_LOADING';

const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
const CLEAN_INPUT_VALUE = 'CLEAN_INPUT_VALUE';

//REDUCER
export const users = (state = initialSate, action) => {
    switch(action.type) {

        case SET_USERS:
            return {
                data: action.payload,
                isLoading: false,
                searchInput: '',
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
            
        default:
            return state;    
    }
}

//ACTION CREATORS
export const setUsers = (users) => ({ type: SET_USERS, payload: users });

export const setLoading = () => ({ type: SET_LOADING });

export const setInputValue = (str) => ({ type: SET_INPUT_VALUE, payload: str });

export const cleanInputValue = () => ({ type: CLEAN_INPUT_VALUE, });

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