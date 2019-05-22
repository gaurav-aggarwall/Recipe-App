import * as Actions from './auth.actions';

export interface State{
    token: string,
    authenticated: boolean
};

const initalState: State = {
    token: null,
    authenticated: false
}; 

export function AuthReducer(state = initalState, action: Actions.AuthActions){
    switch(action.type){
        
        case Actions.SIGNUP:
            return {
                ...state,
                authenticated: true
            };

        case Actions.SIGNIN:
            return {
                ...state,
                authenticated: true
            };

        case Actions.LOGOUT:
            return {
                ...state,
                authenticated: false,
                token: null
            };

        case Actions.SET_TOKEN:
            return {
                ...state,
                token: action.payload
            };

        default: 
            return state;    
    }
}