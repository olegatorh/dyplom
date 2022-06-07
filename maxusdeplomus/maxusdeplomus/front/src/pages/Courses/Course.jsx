import AddCourse from "./addCourse";
import SubscribedCourse from "./SubscribedCourse";

export default function Course(props) {
    console.log(props.user.user)
    return (<>
            {props.user.user.id && props.user.user.courses.includes(props.course.id) ? <SubscribedCourse course={props.course}/> : <AddCourse course={props.course} userSettings={props.user}/>}
        </>

    )
}
