import {connect} from "react-redux";
import {compose} from "redux";
import Courses from "./Courses";
import {getCourses} from "../../redux/coursesReducer";


const CoursesContainer = (props) => {
    // тут нема штуки яка буде викликати курси при оновленні         props.getCourses()
    return (
        <Courses
            courses={props.courses}
            user={props.authUser}
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
    getCourses: getCourses
}

export default compose(connect(mapStateToProps, mapDispatchToProps)(CoursesContainer))