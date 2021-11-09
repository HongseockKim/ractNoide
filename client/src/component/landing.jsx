import React, {Component} from 'react';
import {Paper} from "@mui/material";
import {withStyles} from '@mui/styles';
import Header from "./Header";
import Content from "./Content";
import TestRedux from "./TestRedux";
const styles = theme =>({
    paper:{
        width:'calc(100% - 20px);',
        margin:'20px auto 20px',
        background:'#fafafa!important',
    }
})

class Landing extends Component {
    render() {
        const {classes} = this.props
        return (
            <>
                <Paper elevation={3} className={classes.paper}>
                    <Header/>
                    <Content title={'Content'}/>
                    <TestRedux/>
                </Paper>
            </>
        );
    }
}

export default withStyles(styles)(Landing);