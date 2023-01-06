import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();


    useEffect (() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=> res.json())
        .then((data) => {
            setUsers(data);
        })
        .catch(err => console.log(err));
    }, [])

    const handleClick = (id) => {
        navigate(`/${id}`)
    }


    return (
        <div>
            <h1>Home Page</h1>
            <ul>{users.map(user => {
                return <li key={user.id}>{user.name} {` | `} <button onClick={() => handleClick(user.id)}>Go to detail</button></li>
            })}</ul>
        </div>

    )
}

export default Home;