import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import M from 'materialize-css'

const Createpost = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")

    useEffect(() => {
        if (url) {
            fetch('hhttps://instaclone-backend-xqnf.onrender.com/createpost', {
                method: "post",
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer " + localStorage.getItem('jwt')
                },
                body: JSON.stringify({
                    title,
                    body,
                    pic: url
                })
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.error) {
                        M.toast({ html: data.error, classes: "#c62828 red darken-3" });
                    } else {
                        M.toast({
                            html: "Posted Successfully",
                            classes: "#43a047 green darken-1",
                        });
                        navigate("/");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [url, title, body, navigate])

    const postDetails = () => {
        //to upload data
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', 'insta-clone')
        data.append('cloud_name', 'dnfdw5o96')
        fetch('https://api.cloudinary.com/v1_1/dnfdw5o96/image/upload', {
            method: 'post',
            body: data
        })
            .then(res => res.json())
            .then(data => {
                setUrl(data.url)
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className='card input-filled'>
            <input
                type="text"
                placeholder='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)} />
            <input
                type="text"
                placeholder='Description'
                value={body}
                onChange={(e) => setBody(e.target.value)} />

            <div className="file-field input-field">
                <div className="btn">
                    <span>Choose File</span>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>
            <button className="btn waves-effect waves-light"
                onClick={() => postDetails()}>
                POST
            </button>
        </div>
    )
}
export default Createpost