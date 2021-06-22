import darkTeamifyLogo from '../img/teamify.svg'
import whiteTeamifyLogo from '../img/teamify-white.svg'

//INITIAL STATE
const initialSate = {
    teamifyLogo: null,
    headerColor: '',
    navLinksColor: '',
    hrColor: '',
}

//ACTIONS
const SET_GREEN_COLOR = 'SET_GREEN_COLOR';
const SET_GRAY_COLOR = 'SET_GRAY_COLOR';
const SET_DARK_BLUE_COLOR = 'SET_DARK_BLUE_COLOR';

//REDUCER

export const navColor = (state = initialSate, action) => {
    switch(action.type) {

        case SET_GREEN_COLOR:
            return {
                teamifyLogo: darkTeamifyLogo,
                headerColor: 'nav-green-color',
                navLinksColor: 'nav-link-dark-color',
                hrColor: 'hr-dark-border',
            };
        
        case SET_GRAY_COLOR: 
            return {
                teamifyLogo: darkTeamifyLogo,
                headerColor: 'nav-gray-color',
                navLinksColor: 'nav-link-dark-color',
                hrColor: 'hr-dark-border',
            };
        
        case SET_DARK_BLUE_COLOR:
            return {
                teamifyLogo: whiteTeamifyLogo,
                headerColor: 'nav-darkBlue-color',
                hrColor: 'hr-white-border',
                navLinksColor: 'nav-link-white-color',
            };

        default:
            return state;
    }
}


//ACTION CREATORS

export const setGreenColor = () => ({ type: SET_GREEN_COLOR });

export const setGrayColor = () => ({ type: SET_GRAY_COLOR });

export const setDarkBlueColor = () => ({ type: SET_DARK_BLUE_COLOR });
