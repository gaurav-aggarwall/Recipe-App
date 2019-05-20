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

        default: 
            return state;    
    }
}