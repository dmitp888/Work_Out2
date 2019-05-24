import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "./style.css";
import axios from 'axios'

//  Depending on the current path, this component sets the "active" class on the appropriate navigation link item

class Navbar extends Component {
  constructor() {
    super()
    this.logout = this.logout.bind(this)
  }

  logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/user/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          username: null
        })
      }
    }).catch(error => {
      console.log('Logout error')
    })
  }

  render() {
    const loggedIn = this.props.loggedIn;
    console.log('navbar render, props: ')
    console.log(this.props);

    return (

      <div>
        <header className="navbar App-header" id="nav-container">
        
          <div className="col-4" >
            {loggedIn ? (
              // <section className="navbar-section">
              //   <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
              //     <span className="text-secondary">logout</span></Link>
              //     <Link to="/home" className="btn btn-link text-secondary">
              //       <span className="text-secondary">home</span>
              //     </Link>
              //     <Link to="/about" className="btn btn-link text-secondary">
              //       <span className="text-secondary">about</span>
              //     </Link>
              //     <Link to="/workout" className="btn btn-link text-secondary">
              //       <span className="text-secondary">workout</span>
              //     </Link>
              // </section>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
<Link className="navbar-brand" to="/">
  workout
</Link>
<div>
  <ul className="navbar-nav">
    <li className="nav-item">
      <Link
        to="/home"
        className={
          window.location.pathname === "/" || window.location.pathname === "/about"
            ? "nav-link active"
            : "nav-link"
        }
      >
        home
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/discover"
        className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
      >
        about
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/workout"
        className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
      >
        workout
      </Link>
    </li>
  </ul>
</div>
</nav>







            ) : (
                // <section className="navbar-section">
                //   <Link to="/login" className="btn btn-link text-secondary">
                //     <span className="text-secondary">login</span>
                //   </Link>
                //   <Link to="/signup" className="btn btn-link">
                //     <span className="text-secondary">sign up</span>
                //   </Link>
                //   <Link to="/about" className="btn btn-link">
                //     <span className="text-secondary">about</span>
                //   </Link>

                // </section>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
<Link className="navbar-brand" to="/">
  workout
</Link>
<div>
  <ul className="navbar-nav">
    <li className="nav-item">
      <Link
        to="/home"
        className={
          window.location.pathname === "/" || window.location.pathname === "/about"
            ? "nav-link active"
            : "nav-link"
        }
      >
        home
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/discover"
        className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
      >
        about
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/workout"
        className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
      >
        workout
      </Link>
    </li>
  </ul>
</div>
</nav>
              )}
          </div>
        </header>
      </div>

    );

  }
}













export default Navbar;
