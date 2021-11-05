import React, {Component} from 'react';
import {withStyles} from "@mui/styles";
import LeftContent from "./Left_content";
import axios from "axios";

const styles =theme =>({
    content:{
        minHeight:'350px',
        "& h2":{
            marginTop:'30px',
            textAlign: "center",
        }
    },
    title:{
        fontSize:'32px',
    },
});

class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            test : 0,
            text : ""
        }
        console.log(this.props)
        //이 함수는 this 를 바인딩
        this.handleClick = this.handleClick.bind(this)
        console.log('콘스트럭터 먼저실행')
    }

    //컴포넌트가 처음에 렌더링 됬을때 실행코드
    componentDidMount() {
        console.log('컴포넌트디드마운트')
        axios.get('/api/list')
            .then( res => {
                console.log(res);
                this.setState({
                    text : res.data
                })
            })
            .catch(error => {console.log(error)})
    }
    //컴포넌트 state 가 바뀌었을때
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('컴포넌트디드업데이트')
    }

    handleClick(e) {
        this.setState({
            test: Math.floor(Math.random() * 1000)
        })
    }

    render() {
        console.log('렌더');
        const {classes,title} = this.props
        const {test,text} = this.state;

        return (
            <div className={classes.content}>
                <LeftContent
                    text ={text}
                />
                <h2 className={classes.title}>{title}</h2>
                <p>{test}</p>
                <p>{text}</p>
                <button type="button" onClick={this.handleClick}>버튼</button>
            </div>
        );
    }
}

export default withStyles(styles)(Content);