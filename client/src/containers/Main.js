import Main from "../component/Main";
import {connect} from "react-redux";

export default connect(
    function (state) {
        return {data:state.contents}
    },
    function (dispatch) {

    }
)(Main);