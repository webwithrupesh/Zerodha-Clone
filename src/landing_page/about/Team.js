import React from 'react'

function Team() {
    return ( 
        <div className='container'>
            <div className='row p-3 mt-5 border-top'>
            <h1 className=' text-center'>People</h1>
            </div>

            <div className='row p-3  text-muted  '>
               
                <div className='col-6 p-3  text-center' style={{lineHeight:"1.8", fontSize:"1.2rem"}}>
                    <img src='media\images\myimg.jpeg' style={{borderRadius: "100%", width:"50%"}}/>
                    <h4 className='mt-5'>Rupesh kumar</h4>
                    <h6 >Aspiring Full-Stack Developer</h6>
                </div>
              

                <div className='col-6 p-3'>
                    <p>Rupesh Kumar is a BCA student and aspiring full-stack developer passionate about building web applications and learning new technologies. He enjoys turning ideas into functional and user-friendly digital experiences.</p>
                    <br/>
                    <p>He is currently exploring HTML, CSS, JavaScript, React, Node.js, and MongoDB as part of his journey into full-stack development.</p>
                    <br/>
                    <p>Building projects and solving coding challenges are his way of learning and growing.</p>
                    <br/>
                    <p>Connect on <a href=''>GitHub</a>  / <a href=''>LinkedIn </a>  / <a href=''>Portfolio</a> </p>
                </div>
            </div>
        </div>
     );
}

export default Team;