import React, {Component} from 'react';
import {connect} from "react-redux";

class TestRedux extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.onClick();
    }

    render() {
        return (
            <div>
                <h2><a href="#welcome" onClick={this.handleClick}>리덕스</a></h2>
            </div>
        );
    }
}

export default connect(
    null,
    function (dispatch){
        return {
            onClick: function(){
                dispatch({type: 'CHANGE_MODE',mode:"WELCOME"})
                //액션 타입은 체인지 모드 이고 모드는 웰컴으로 바꾼다는것
            }
        }
    })(TestRedux);