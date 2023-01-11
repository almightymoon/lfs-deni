import React from 'react'
import bgimgg from "./img/bgimgg.jpg";
import {useForm} from 'react-hook-form'
import { CSVLink, CSVDownload } from "react-csv";
export default function () {



var data ={}
const{register, handleSubmit} = useForm();
var onSubmit = data => console.log(data)
const headers = [
  { label: "Name", key: "Fullname" },
  { label: "Email", key: "Email" },
  { label: "Username", key: "username" },
  { label: "password", key: "password" }
];



const csvdata=[
  
]

const csvReport = {
  filename: './data.csv',
  headers: headers,
  data: csvdata,
};



{

var state={
  value:''
}
  var getdata = (event)=>{
  console.log('Event:',event.target.value)
  
 var setState=({ value : event.target.value })
 console.log("state",state);
  }

 var handle=() =>{
  const value=state.value;

  console.log('value on submit',value);
  
}

}



  return (
    <section className="container">
        <div className="registration">
          <div className="sec1">
         <img src={bgimgg} alt=""  />
          </div>
          <div className="sec2">
            <form className='regForm' onSubmit={handleSubmit(onSubmit)} action="">
              <h2>Sign Up</h2>
              <input type="text" placeholder='Full-name' onChange={getdata} required  /><br />
              <input type="text"  placeholder='Full-name'id="name"{...register('fullName')}  required  /><br />
              <input type="email" placeholder='Email' {...register('email')}  required  /><br />
              <input type="text" placeholder='username' {...register('userName')}   required  /><br />
              <input type="password" placeholder='password' {...register('password')}   required  /><br />
              <button type="submit" onClick={handle}><CSVLink type='submit' className='csv' data={csvdata} headers={headers}>Sign up</CSVLink></button>
             </form>
          </div>
        </div>
    </section>

  )
}