import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../App'
import M from 'materialize-css'


const Login = () => {
    const { state, dispatch } = useContext(UserContext)
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const PostData = async () => {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            M.toast({ html: "invalid email", classes: "#c62828 red darken-3" })
            return;
        }


        try {
            const response = await fetch("https://instaclone-backend-xqnf.onrender.com/signin", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    password,
                    email
                })
            });

            const data = await response.json();
            console.log(data)
            if (data.error) {
                M.toast({ html: data.error, classes: "#c62828 red darken-3" });
            } else {
                localStorage.setItem("jwt", data.token)
                localStorage.setItem("user", JSON.stringify(data.user))
                dispatch({ type: "USER", payload: data.user })
                M.toast({ html: "Signin Successfully", classes: "#43a047 green darken-1" });
                navigate("/");
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='mycard'>
            <div className="card auth-card ">
                <h2>Instaclone</h2>
                <input type="text"
                    placeholder='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input type="password"
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="btn waves-effect waves-light" onClick={() => PostData()}>
                    Login
                </button>
                <h5>
                    <Link to='/signup'>Don't have an account?</Link>
                </h5>
            </div>
        </div >
    )
}
export default Login