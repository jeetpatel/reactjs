import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const handleSearchForm = (event) => {
    event.preventDefault();
    const searchValue = document.getElementById('global_search').value.trim();
    if (!searchValue) {
      document.getElementById('global_search').style.border = '1px solid red';
      props.showAlert("Please enter a search term", "danger");
      return false;
    }
    // You can add your search logic here
    alert('Searching for:'+searchValue);
  };
  const removeBorderColor = (event) => {
    event.target.style.border = '1px solid #ced4da';
  }
  return (
    <nav data-bs-theme={props.mode} className={`navbar navbar-expand-lg bg-${props.mode==='light' ? 'light':'dark'}`}>
        <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className={`collapse navbar-collapse text-${props.mode === 'light' ? 'dark' : 'white'}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/">User</Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/auth">Auth</Link></li>
                  <li><Link className="dropdown-item" to="/auth/login">Login</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item" to="/auth/register">Register</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" aria-disabled="true" to="/">Disabled</Link>
              </li>
            </ul>
            <div className="d-flex">
              <div className='bg-danger rounded mx-2' onClick={() => { props.changeBGColorElem('danger') }}  style={{width: '25px', height: '25px',  cursor:'pointer'}}></div>
              <div className='bg-warning rounded mx-2' onClick={() => { props.changeBGColorElem('warning') }}  style={{width: '25px', height: '25px', cursor:'pointer'}}></div>
              <div className='bg-info rounded mx-2' onClick={() => { props.changeBGColorElem('info') }}  style={{width: '25px', height: '25px', cursor:'pointer'}}></div>
              <div className='bg-success rounded mx-2' onClick={() => { props.changeBGColorElem('success') }}  style={{width: '25px', height: '25px', cursor:'pointer'}}></div>
              <div className='bg-gray rounded mx-2' title="Reset" onClick={() => { props.changeBGColorElem('gray') }}  style={{width: '25px', height: '25px', cursor:'pointer', border:'1px solid gray'}}></div>
            </div>
            <form className="d-flex" role="search" onSubmit={handleSearchForm}>
              <input className="form-control me-2" type="search" name="global_search" id="global_search" placeholder="Search term" onClick={removeBorderColor} aria-label="Search"/>
              <button className="btn btn-primary" type="submit">Search</button>
            </form>
            <div className={`form-check form-switch ps-5 text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" onClick={() => { props.toggleMode(null) }} role="switch" id="switchCheckChecked" defaultChecked={true} />
              <label className="form-check-label" htmlFor="switchCheckChecked">{props.btnText}</label>
            </div>
          </div>
        </div>
      </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
}

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About menu here"
}