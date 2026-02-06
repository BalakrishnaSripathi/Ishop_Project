import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';


const IshopProducts = () => {
    const[category,setCategories]=useState();
    const [products,setProducts]=useState([]);
    let params=useParams();
    useEffect(()=>{
        setCategories(params.category);
        axios.get("http://127.0.0.1:4000/getproducts")
        .then(response=>{
            setProducts(response.data)
        })
    },[])
  return (
    <div>
      <h2>{category} List</h2>
      <div className='row mx-2'>
        {
            products.filter(item=>item.category==category).map(product=>
              <div key={product.id} className='mt-2 mx-2  border border-dark col-6 col-md-4 col-lg-2 p-3' >
                  <Link to={"/details/"+product.id}><img src={product.image} width="60" height="60" alt="img not found" /></Link>
                   <div><Link to={"/details/"+product.id}>{product.title}</Link></div>
                </div>
            ) 
        }
      </div>
      
      <div>
        <Link to="/dashboard">back to categories</Link>
      </div>
    </div>
  )
}

export default IshopProducts
