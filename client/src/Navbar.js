import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg  navbar-dark bg-success ">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
      <Link class="nav-link active" to="/">Home </Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" to="/about">About </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/contact">Contact </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/login">Login</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/signup">SignUp</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
