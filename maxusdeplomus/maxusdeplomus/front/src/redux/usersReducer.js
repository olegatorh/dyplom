import {UsersAPI} from "../api/usersApi";


const initialState = {
    users: [],
    authUser: {}
}

export const actions = {
    getUsersActionCreator: (payload) => ({type: "GET_USERS", payload}),
    updateUserActionCreator: (payload) => ({type: "UPDATE_USER", payload}),
    loginUserActionCreator: (payload) => ({type: "LOGIN_USER", payload}),
    logoutUserActionCreator: (payload) => ({type: "LOGOUT", payload}),
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return {
                ...state,
                authUser: {
                    isAuth: true,
                    id: action.payload.id,
                    password: action.payload.password,
                    username: action.payload.username,
                    courses: action.payload.courses
                }
            }
        case "LOGOUT":
            return {
                ...state, authUser: {}
            }
        case "GET_USERS": {
            return {
                ...state, users: action.payload
            }
        }
        case "UPDATE_USER": {
            return {
                ...state, authUser: {
                    isAuth: true,
                    id: action.payload.id,
                    password: action.payload.password,
                    username: action.payload.username,
                    courses: action.payload.courses
                }
            }
        }
        default:
            return state
    }
}

export const loginUser = (username, password) => async (dispatch) => {
    let data = await UsersAPI.getUsers()
    let user = data.filter(user => (user.username === username && user.password === password))
    if (user !== undefined) {
        dispatch(actions.loginUserActionCreator(user[0]))
    }
}

export const logoutUser = () => async (dispatch) => {
    dispatch(actions.logoutUserActionCreator())
}

export const addUser = (username, password) => async (dispatch) => {
    let newUser = await UsersAPI.addUser({username: username, password: password, courses: []})
    console.log(newUser)
    let thisUser = await UsersAPI.getUsers()
    let user = thisUser.filter(user => (user.username === username && user.password === password))
    dispatch(actions.loginUserActionCreator(user[0]))
}

export const getUsers = () => async (dispatch) => {
    let data = await UsersAPI.getUsers()
    console.log(data)
    dispatch(actions.getUsersActionCreator(data))
}

export const updateUser = (username, password, id) => async (dispatch) => {
    let users = await UsersAPI.getUsers()
    let user = users.filter(user => (user.username === username && user.password === password))
    if (!user[0].courses.includes(id)) {
        let courses = user[0].courses.concat(id)
        console.log(courses)
        let data = await UsersAPI.updateUser(user[0], courses)
        console.log(data)
        dispatch(actions.updateUserActionCreator(data))
    }
}


export default usersReducer