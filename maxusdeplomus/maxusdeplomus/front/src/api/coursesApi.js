import {instance} from "./api";

export const CoursesAPI = {
    getCourses() {
        return instance.get(`Courses`).then(response => response.data).catch(function (error) {
            if (!error.status) {
                console.log(error)
            }
        })
    }
}