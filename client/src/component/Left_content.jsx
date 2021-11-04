import React, {Component} from 'react';
import {Button} from "@mui/material";
import styles from './leftContent.module.css';
import axios from "axios";



class LeftContent extends Component {

   constructor(props) {
       super(props);
       this.state = {
           open : false
       }
   }

    tabIncrement = () =>{
       console.log(this.state.open)
       if(this.state.open){
           // console.log('트루');
           this.setState({
               open : false
           })
       }else{
           // console.log('거짓');
           this.setState({
               open : true
           })
       }
    }
    componentDidMount() {
       console.log('dd');
       axios
           .get('/api/left_content')
           .then( result => {
               console.log(result);
           })
           .catch(errors => {
               console.log(errors)
           })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
       console.log('업데이트')
        console.log(prevState)
    }

    render() {
        const{classes,text} = this.props;
        const {open} = this.state;
        return (
            <div className={open ? styles.position_box_on :styles.position_box }>
                <Button onClick={this.tabIncrement} variant={"contained"} class={styles.modal_btn} type="button">{open ? '닫기':'열기'}</Button>
               <div className={styles.content}>
                   <h3>{text}</h3>
               </div>
            </div>
        );
    }
}

export default LeftContent;