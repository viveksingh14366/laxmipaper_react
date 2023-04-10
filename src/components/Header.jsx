import React from 'react'

export default function Header(props) {
  const navRef = React.useRef(null);
const onToggleClick = (e) => {
  navRef.current.classList.toggle("isoactive");
};
  return (
    <header ref={navRef} className="header " data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="#">
            <img src="assets/img/lp-logo.png" className="lp-logo" alt={props.title} />
          </a>
          <button id="navbarbtn" onClick={onToggleClick} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"><i className="fa fa-bars"></i> <i className="fa fa-xmark"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#"><span className="navbar-toggler mobile-submenu" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#aboutsection"><span className="navbar-toggler mobile-submenu" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler">About</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#productssection"><span className="navbar-toggler mobile-submenu" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler">Products</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#clientelesection"><span className="navbar-toggler mobile-submenu" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler">Clientele</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#managementsection"><span className="navbar-toggler mobile-submenu" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler">Management</span></a>
              </li>
              { props.MoreBtn?
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  More
                  <i className="fa fa-angle-down"></i>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              : ""}
              { props.ContactBtn? 
              <li className="nav-item">
                <a className="nav-link btn" href="#contactsection"><span className="navbar-toggler mobile-submenu" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler">Contact Us</span></a>
              </li>: ""}

            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}