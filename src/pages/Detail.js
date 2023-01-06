import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    const { id } = useParams();
    const [users, setUsers] = useState();
    
    useEffect (() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res=> res.json())
        .then((data) => {
            setUsers(data);
        })
        .catch(err => console.log(err));
    }, [id])
    return (
        <div>
            <h1>Detail Page</h1>
            <h2>ID : {id}</h2>
            {users && 
                <ul>
                    <li>Nama : {users.name}</li>
                    <li>Email : {users.email}</li>
                    <li>No. Telfon : {users.phone}</li>
                    <li>Alamat : {users.address.street}</li>
                </ul>
            }
            
        </div>
    )
}

export default Detail;