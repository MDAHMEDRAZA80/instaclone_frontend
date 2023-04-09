import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import M from 'materialize-css'

const Signup = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const PostData = async () => {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            M.toast({ html: "invalid email", classes: "#c62828 red darken-3" })
            return;
        }
        // else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)){
        //   M.toast({html: "Invalid password. Your password must contain at least one lowercase letter, one uppercase letter, one digit, and be at least 8 characters long.",
        //    classes:"#c62828 red darken-3"})
        //    return;

        // }
        try {
            const response = await fetch("https://instaclone-backend-xqnf.onrender.com/signup", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    password,
                    email,
                }),
            });
            const data = await response.json();
            if (data.error) {
                M.toast({ html: data.error, classes: "#c62828 red darken-3" });
            } else {
                M.toast({ html: data.message, classes: "#43a047 green darken-1" });
                navigate("/signin");
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='mycard'>
            <div className="card auth-card ">
                <h2>Instaclone</h2>
                <input type="text"
                    placeholder='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
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
                <button className="btn waves-effect waves-light"
                    onClick={() => PostData()}>
                    SignUp
                </button>
                <h5>
                    <Link to='/signin'>Already have an account?</Link>
                </h5>
            </div>
        </div >
    )
}
export default Signup