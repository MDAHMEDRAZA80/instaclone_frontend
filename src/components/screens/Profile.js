import React from 'react'
import a1 from '../../images/ahmed1.jpg'
import a2 from '../../images/ahmed2.jpg'
import a3 from '../../images/ahmed3.jpg'
import a4 from '../../images/ahmed4.jpg'
import a5 from '../../images/ahmed5.jpg'
import a6 from '../../images/ahmed6.jpg'
import a7 from '../../images/ahmed7.jpg'
import a8 from '../../images/ahmed8.jpg'
import a9 from '../../images/ahmed9.jpg'
import a10 from '../../images/ahmed10.jpg'
import a11 from '../../images/ahmed11.jpg'
import a12 from '../../images/ahmed12.jpg'



const Profile = () => {
    return (
        <div style={{ maxWidth: "950px", margin: "0px auto" }}>
            <div style={{
                display: "flex",
                justifyContent: "space-evenly",
                margin: "35px 0px",
                borderBottom: "1px solid grey"
            }}>
                <div>
                    <img src={a3} alt="profile" style={{ width: "200px", height: "200px", borderRadius: "100px", marginLeft: "150px" }} />
                </div>
                <div>
                    <h4>MD AHMED RAZA</h4>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "110%" }}>
                        <h6>12 posts</h6>
                        <h6>335 followers</h6>
                        <h6>167 following</h6>
                    </div>
                </div>



            </div>
            <div className='gallary'>
                <img src={a1} alt="ahmed" className='item' />
                <img src={a2} alt="ahmed" className='item' />
                <img src={a3} alt="ahmed" className='item' />
                <img src={a4} alt="ahmed" className='item' />
                <img src={a5} alt="ahmed" className='item' />
                <img src={a6} alt="ahmed" className='item' />
                <img src={a7} alt="ahmed" className='item' />
                <img src={a8} alt="ahmed" className='item' />
                <img src={a9} alt="ahmed" className='item' />
                <img src={a10} alt="ahmed" className='item' />
                <img src={a11} alt="ahmed" className='item' />
                <img src={a12} alt="ahmed" className='item' />
               
            </div>
        </div>
    )
}
export default Profile
