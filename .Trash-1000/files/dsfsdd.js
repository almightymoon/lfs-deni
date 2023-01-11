import React from 'react'
// import bgimg from "./img/bgimg.jpg"
import bgimgg from "./img/bgimgg.jpg"
export default function Form() {
  return (
    <section className="container">
        <div className="registration">
          <div className="sec1">
         {/* <img src={bgimg} alt=""  /> */}
         <img src={bgimgg} alt=""  />
          </div>
          <div className="sec2">
            <form className='regForm' action="">
              <h2>Sign Up</h2>
              <input type="text" placeholder='Full-name' id='Fullname' required  /><br />
              <input type="email" placeholder='Email' id='mail' required  /><br />
              <input type="text" placeholder='username' id='name' required  /><br />
              <input type="password" placeholder='password' id='pass' required  /><br />
              <button type="submit">Sign up</button>
            </form>
          </div>
        </div>
    </section>
  )
}
