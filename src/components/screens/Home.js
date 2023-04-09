import React, { useState, useEffect } from 'react';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://instaclone-backend-xqnf.onrender.com/allpost', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
                    },
                });
                const result = await response.json();
                setData(result.posts);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="home">
            {data && data.length > 0 && data.map((item) => (
                <div className="card home-card" key={item._id}>
                    {item.postedby && item.postedby.name && (
                        <h5>{item.postedby.name}</h5>
                    )}
                    <div className="card-image">
                        <img src={item.photo} alt="card" />
                    </div>
                    <div className="card-content">
                        <i className="material-icons">favorite_border</i>
                        <h6>{item.title}</h6>
                        <p>{item.body}</p>
                        <input type="text" placeholder="add comment" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;
