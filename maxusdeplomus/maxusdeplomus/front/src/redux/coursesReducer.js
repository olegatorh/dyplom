import {CoursesAPI} from "../api/coursesApi";
import courses from "../pages/Courses/Courses";


const initialState = {
    courses: []
}

export const actions = {
    getUsersActionCreator: (payload) => ({type: "GET_COURSES", payload}),
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_COURSES": {
            return {
                ...state, courses: action.payload
            }

        }
        default:
            return state
    }
}

export const getCourses = () => async (dispatch) => {
    let data = await CoursesAPI.getCourses()
    console.log(data)
    dispatch(actions.getUsersActionCreator(data))
}

export default usersReducer