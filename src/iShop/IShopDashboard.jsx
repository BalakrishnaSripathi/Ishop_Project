import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const IShopDashboard = () => {
    let navigate=useNavigate()
    const[cookies,setCookie,removeCookie]=useCookies();
    const [userid,setUserid]=useState();
    const [categories,setCategories]=useState([]);

    function LoadCategeries() {
    axios.get("http://127.0.0.1:4000/getcategories")
      .then(response => {
        setCategories(response.data);
        
      })
      .catch(err => {
        console.error(err);
      });
  }

    useEffect(()=>{
        if (cookies["userid"]==undefined){
            navigate("/login")
        }
        else{
        setUserid(cookies["userid"])
        LoadCategeries();
        }
    },[])
    function handlesignout(){
        removeCookie("userid")
        navigate("/login")
    }

  return (
    <div>
      <h2>User Dashbord <span className='fw-semibold text-success fs-4'>Welcome to Ishop {userid}</span></h2>-
      <button className='btn btn-link' onClick={handlesignout}>signout</button>
      <h3>Product Categories</h3>
      <ul>
        {categories.map((item, index) => (
          <li key={index}><Link to={"/products/"+item.category}>{item.category.toUpperCase()}</Link></li>
        ))}
      </ul>
    </div>
  )
}

export default IShopDashboard
