import {connect} from "react-redux";
import {compose} from "redux";
import App from "./App";
import {getCourses} from "./redux/coursesReducer";
import {updateUser} from "./redux/usersReducer";


const AppContainer = (props) => {

    return (
        <App
            courses={props.courses}
            user={props.authUser}
            updateUser={props.updateUser}
        />
    )
}


const mapStateToProps = (state) => {
    return {
        authUser: state.UsersPage.authUser,
        courses: state.CoursesPage.courses
    }
}

const mapDispatchToProps = {
    getCourses: getCourses,
    updateUser: updateUser
}

export default compose(connect(mapStateToProps, mapDispatchToProps)(AppContainer))