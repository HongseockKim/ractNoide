import React, {Component} from 'react';
import {Button, CardActionArea} from "@mui/material";
import styles from './leftContent.module.css';
import axios from "axios";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";


class LeftContent extends Component {

   constructor(props) {
       super(props);
       this.state = {
           open : false,
           counter : 0,
           data : []
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
        this.getListData();
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
       console.log('업데이트')
        if(prevState.counter === this.state.counter){
            console.log('match');
        }
        //컴포넌트가 업데이트 될때 스테이트 조건에 따라 증가
        if(prevState.counter < 3){
            this.setState({
                counter : this.state.counter + 1
            })
        }
    }
    handleClick  = () => {
       console.log('클릭!');
       this.setState({
           counter : this.state.counter + 1
       })
    }
    getListData = () => {
       //문제는 이렇게 불러오는것 까지는 오케이

        //데이터 상태값이 바뀌었을때 스테이트값 바꾸는걸 알아야함
        axios
            .get('/api/left_content')
            .then( result => {
                console.log(result);
                this.setState({
                    data : result.data
                })
            })
            .catch(errors => {
                console.log(errors)
            })
    }

    render() {
        const{classes,text} = this.props;
        const {open,counter,data} = this.state;
        console.log(data)
        return (
            <div className={open ? styles.position_box_on :styles.position_box }>
                <Button onClick={this.tabIncrement} variant={"contained"} class={styles.modal_btn} type="button">{open ? '닫기':'열기'}</Button>
               <div className={styles.content}>
                   <h3>{text}</h3>
                   <Button type="button" variant={"contained"} size={"large"} onClick={this.handleClick}>버튼</Button>
                   <p>{`올라간다${counter}`}</p>
                   {
                       data.map((datas) =>(
                           <Card sx={{ maxWidth: 345 }} key={datas.id} className={styles.card}>
                           <CardActionArea>
                               <CardMedia
                               component="img"
                               height="140"
                               image={datas.src}
                               alt="green iguana"
                                   />
                                   <CardContent>
                                   <Typography gutterBottom variant="h5" component="div">
                                       {datas.name}
                                   </Typography>
                               <Typography variant="body2" color="text.secondary">
                                   {datas.text}
                               </Typography>
                           </CardContent>
                           </CardActionArea>
                            </Card>
                       ))
                   }
               </div>
            </div>
        );
    }
}

export default LeftContent;