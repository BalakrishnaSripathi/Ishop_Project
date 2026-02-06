import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios'
import { useCookies } from 'react-cookie'


Link
const IshopLogin = () => {
    let navigate=useNavigate();
    const [cookies,setCookie,removeCookie]=useCookies();
    const [users,setUsers]=useState([]);
    const formik=useFormik({
        initialValues:{
            UserId:'',
            Password:'',
        },
        onSubmit:(values)=>{
          for (var user of users){

             if (user.UserId==values.UserId && user.Password==values.Password)
                {   setCookie("userid",user.UserName)
                     navigate("/dashboard") ; 
                     break;
                    }
              else{
                 navigate("/errorpage"); 
                }
           
        }
    }
    });

    useEffect(()=>{
        axios.get("http://127.0.0.1:4000/getusers")
            .then(response=>{
              setUsers(response.data);
            })
    },[]);
  return (
    <div>
      <h2>User Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <dl>
            <dt>User Id</dt>
            <dd><input value={formik.values.UserId} onChange={formik.handleChange} type="text" name='UserId'  /></dd>
            <dt>Password</dt>
            <dd><input value={formik.values.Password}  onChange={formik.handleChange} type="password"  name='Password' /></dd>
        </dl>
        <button type='submit' className='btn btn-primary'>Login</button>
      </form>
      <br />
      <Link to="/register">New User?</Link>
    </div>
  )
}

export default IshopLogin
