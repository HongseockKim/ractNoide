import React, {Component} from 'react';
import {Paper} from "@mui/material";
import {withStyles} from '@mui/styles';
import Header from "./Header";
import Content from "./Content";
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
            <div>
                <Paper elevation={3} className={classes.paper}>
                    <Header/>
                    <Content title={'content'}/>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(Landing);