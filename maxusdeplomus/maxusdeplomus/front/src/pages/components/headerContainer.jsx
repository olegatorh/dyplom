import {connect} from "react-redux";
import {compose} from "redux";
import Header from "./Header";
import {logoutUser} from "../../redux/usersReducer";


const HeaderContainer = (props) => {
    return (
        <Header
            logoutUser={props.logoutUser}
            authUser={props.authUser}
        />
    )
}


const mapStateToProps = (state) => {
    return {
        authUser: state.UsersPage.authUser
    }
}

const mapDispatchToProps = {
    logoutUser: logoutUser
}

export default compose(connect(mapStateToProps, mapDispatchToProps)(HeaderContainer))