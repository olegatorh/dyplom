import {instance} from "./api";
import courses from "../pages/Courses/Courses";

export const UsersAPI = {
    getUsers() {
        return instance.get(`Users`).then(response => response.data).catch(function (error) {
            if (!error.status) {
                console.log(error)
            }
        })
    },
    addUser(user) {
        return instance.post(`Users/`, user).then(response => response).catch(function (error) {
            if (error.response.data.username[0] === 'users with this username already exists.') {
                alert('Користувач з таким іменем вже існує')
            }
        })
    },

    updateUser(user, courses) {

        return instance.put(`Users/${user.id}/`, {
            password: user.password,
            username: user.username,
            courses: courses
        }).then(response => response.data).catch(function (error) {
            console.log(error.response.data)
        })
    }
}