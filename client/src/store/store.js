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
//state:=initState 는 state 가 ubdfinde 일때 기본 인수를 사용하겠다는 뜻
//두번째 인자는 액션


    if(action.type === "CHANGE_MODE"){
        //액션 타입이 체인지 모드 일때는  state 모드는 액션 모드로 바꾼다는거임
        return {...state,mode:action.mode};
    }


    return state;
}
export default createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());