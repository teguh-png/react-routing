import { Link, Outlet } from "react-router-dom";

const About = () => {
    return (
        <div>
            <h1>About Page</h1>
            <hr />
                <nav>
                    <Link to="first">First Component</Link> {` | `}
                    <Link to="second">Second Component</Link>
                </nav>
        <Outlet />
        </div>
    )
}

export default About;