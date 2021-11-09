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
            }
        }
    })(TestRedux);