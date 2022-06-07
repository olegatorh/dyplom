import {connect} from "react-redux";
import {compose} from "redux";
import {addUser} from "../../redux/usersReducer";
import RegistrationPage from "./RegistrationPage";


const RegistrationContainer = (props) => {
    return (
        <RegistrationPage
            addUser={props.addUser}
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
    addUser: addUser

}

export default compose(connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer))