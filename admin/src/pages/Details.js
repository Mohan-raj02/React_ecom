import { useEffect, useState } from "react"

export default function UserDetails(){
    const [userRegister, setUserRegister] = useState([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL+'/users')
        .then(res => res.json())
        .then(res => setUserRegister(res.getUser))
        },[])

    return <>
        <h1>details</h1>
        
        {userRegister.length > 0 ? (
                <table class="table table-striped" border="1" cellPadding="10" style={{ width: "100%", textAlign: "center" }}>
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>E-mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userRegister.map((user, index) => (
                            <tr>
                                <td>{user._id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                            </tr>

                        ))}
                            
                    </tbody>
                </table>

            ) : (
                    <p>No users found</p>
                )
        }
    </> 
}