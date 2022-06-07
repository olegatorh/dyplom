import {connect} from "react-redux";
import {compose} from "redux";
import MainPage from "./MainPage";


const MainPageContainer = (props) => {
    return (
        <MainPage
            authUser={props.authUser}
            courses = {props.courses}
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

}

export default compose(connect(mapStateToProps, mapDispatchToProps)(MainPageContainer))