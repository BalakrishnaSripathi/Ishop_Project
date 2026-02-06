import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const IshopProductDetails = () => {
    const[product,setProducts]=useState({});
    let params=useParams();

    useEffect(()=>{
        axios.get(`http://127.0.0.1:4000/getproduct/${params.id}`)
        .then(response=>{
            setProducts(response.data[0]);
            console.log(response.data[0])
        })
    },[])
  return (
    <div>
      <h2>Product Details-{params.id}</h2>
      <dl>
      <dt>Title</dt>
      <dd>{product.title}</dd>
      <dt>Price</dt>
      <dd>{product.price}</dd>
      <dt>Preview</dt>
      <dd><img src={product.image} width="100" height="100" alt="" /></dd>
      <dt>Rating</dt>
      </dl>
      <br />
     <Link to={"/products/"+product.category}>return to categories</Link>
    </div>
  )
}

export default IshopProductDetails
