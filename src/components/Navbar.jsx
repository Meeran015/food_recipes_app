import React, { useEffect, useState } from 'react'
import styles from './RecipeDetails.module.css'
import {useSelector} from 'react-redux';
function Navbar() {
  return (
    <>
        <header  className="p-3 mb-3 ">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
     
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 link-body-emphasis">Recipes</a></li>
          <li><a href="#" className="nav-link px-2 link-body-emphasis">Overview</a></li>
          <li><a href="#" className="nav-link px-2 link-body-emphasis">Inventory</a></li>
          <li><a href="#" className="nav-link px-2 link-body-emphasis">Customers</a></li>
   
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
        </form>

      </div>
    </div>
  </header>
    </>
  )
}

export default Navbar;