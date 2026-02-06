import React from 'react'
import { Link } from 'react-router-dom'

const IShopHome = () => {
  return (
    <div>
      <h2>Shopping Home</h2>
      <Link to="/register" >New Register</Link>
      <span>|</span>
      <Link to="/login">Existing User</Link>
    </div>
  )
}

export default IShopHome
