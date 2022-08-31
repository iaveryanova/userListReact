import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import Context from '../context/Context';

const NavBar = () => {
  const {setOpenModal} = useContext(Context);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="main">Main</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="users">Users</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="posts">Posts</Link>
        </li>
      </ul>
      <button className="btn btn-primary" onClick={() => setOpenModal(true)}>LogIn</button>
    </div>
  </div>
</nav>
  )
}

export default NavBar