import {BrowserRouter, Route, Routes} from "react-router-dom";
import Course from "./pages/Courses/Course";
import LoginContainer from "./pages/Login/loginContainer";
import MainPageContainer from "./pages/MainPage/mainPageContainer";
import RegistrationContainer from "./pages/Registration/registrationContainer";
import CoursesContainer from "./pages/Courses/CoursesContainer";
import Library from "./pages/Courses/Library";


function App(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<MainPageContainer/>}/>
                <Route path={'/login'} element={<LoginContainer/>}/>
                <Route path={'/library'} element={<Library courses={props.courses} user={props.user}/>}/>
                <Route path={'/registration'} element={<RegistrationContainer/>}/>
                <Route path={'/courses'} element={<CoursesContainer/>}/>
                {props.courses.map(course => (
                    <Route path={`/course/${course.name}`} key={course.name} element={<Course user={props} course={course}/>}/>
                ))}

            </Routes>
        </BrowserRouter>
    );
}

export default App;
