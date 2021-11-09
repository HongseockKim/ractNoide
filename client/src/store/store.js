import {createStore} from 'redux';
let initState = {
    mode:'READ',
    welcome_content:{
        title:"WEB",
        desc:'Hello, WEB'
    },
    selected_content_id:1,

    contents:[
        {id:1,title:"HTML",desc:"HTML is..."},
        {id:2,title:"CSS",desc:"CSS is..."},
        {id:3,title:"JS",desc:"JS is..."},
    ]
}
function reducer(state=initState,action) {


    if(action.type === "CHANGE_MODE"){
        return {...state,mode:action.mode};
    }


    return state;
}
export default createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());