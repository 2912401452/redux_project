import {
    CHANGE_INPUT,
    ADD_VALUE,
    DELETE_ITEM,
    GET_DATA
} from './actionTypes.js'

const defauleState = {
    inputValue:"write something",
    list:["1","2","3","4"]
}

export default (state = defauleState, action)=>{
    // switch(action.type) {
    //     case CHANGE_INPUT:
    //         break;
    //     case ADD_VALUE:
    //         break;
    //     case DELETE_ITEM:
    //         break;
    //     default:return state;
    // }
    if(action.type === CHANGE_INPUT){
        // return {
        //   ...state,
        //   inputValue: action.inputValue
        // }
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.inputValue
        return newState
    }
    if (action.type === ADD_VALUE){
        let newState = JSON.parse(JSON.stringify(state))
        if(newState.inputValue!=="")newState.list.push(newState.inputValue)
        newState.inputValue = ""
        return newState
    }
    if(action.type === DELETE_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value,1)
        return newState
    }
    if(action.type === GET_DATA){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        return newState
    }

    return state
}