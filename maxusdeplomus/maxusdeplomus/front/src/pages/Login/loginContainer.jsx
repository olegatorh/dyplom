import {connect} from "react-redux";
import {compose} from "redux";
import {loginUser} from "../../redux/usersReducer";
import LoginPage from "./LoginPage";


const LoginContainer = (props) => {
    return (
        <LoginPage
            loginUser={props.loginUser}
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
    loginUser: loginUser
}

export default compose(connect(mapStateToProps, mapDispatchToProps)(LoginContainer))