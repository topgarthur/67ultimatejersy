import React from 'react'


const Navbar = () => {
  return (
    <section className="row">
      <div className="col-md-12">
        <nav className="navbar navbar-expand-md bg-dark">
          <a href="/" className="navbar-brand text-danger">
            67Ultimate Jerseys!
          </a>
          <button
            className="navbar-toggler"
            data-bs-target="#navbarcollapse"
            data-bs-toggle="collapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarcollapse">
            {/* Left links */}
            <div className="navbar-nav ">
              <a href="/" className="nav-link text-primary">
                Home
              </a>
              <a href="/addproduct" className="nav-link text-primary">
                Add product
              </a>
            </div>

            {/* Right links */}
            <div className="navbar-nav ms-auto">
                <a href="/signin" className="btn btn-danger text-primary me-2">
                Signin
                </a>

              <a href="/signup" className="btn btn-danger text-primary">
              Signup
             </a>
              
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}

export default Navbar