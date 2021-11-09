import React, {Component} from 'react';
import Landing from "./landing";
class Main extends Component {
    render() {
        // debugger
        return (
            <main>
                <p>메인테그 리덕스콘테이너</p>
                <Landing/>
            </main>
        );
    }
}

export default Main;