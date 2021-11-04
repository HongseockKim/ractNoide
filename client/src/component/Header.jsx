import React, {Component} from 'react';

import {withStyles} from "@mui/styles";
const styles = them =>({
    nav:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderBottom:'solid 1px #ccc'
    },
    item:{
      flexBasis:'calc(100% / 3)',
        textAlign:'center',
        padding:'5px 10px',
        fontSize:'1.2vw',
    }
})

class Header extends Component {
    render() {
        const {classes} = this.props;
        return (
            <header>
                <nav>
                    <ul  className={classes.nav}>
                        <li className={classes.item}>
                            스터디1
                        </li>
                        <li className={classes.item}>
                            스터디2
                        </li>
                        <li className={classes.item}>
                            스터디3
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default withStyles(styles) (Header);