import User from "./user.js";
import UserClass from "./UserClass.js";

const About = () => {
    return(
        <div>
            <h1>About  </h1>
            <h2>This is Namaste React web series </h2>
            <User name ={"Akash_Patel"}/>
            <UserClass name ={"Akash Patel"}/>
        </div>
    );
};
export default About;