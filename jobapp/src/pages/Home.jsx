import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav
        className="navbar navbar-toggleable-md navbar-light fixed-top"
        id="navbar-main"
      >
     
        <Link className="navbar-brand" to="/home" title="Home">
          <i className="fa fa-cube"></i>
        </Link>
            <div className="navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/work" title="Work">
                Work
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/jobs" title="Jobs">
                Jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Blog" title="Blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" title="Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <header className="masthead">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="site-heading">
                <h1 className="heading">Open Positions</h1>
                <span className="subheading">
                  Current listings for web design and front-end development
                  jobs.
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <ul className="job-list">
                <li className="job-preview">
                  <div className="content float-left">
                    <h4 className="job-title">Senior Web Designer</h4>
                    <h5 className="company">Seattle, WA</h5>
                  </div>
                  <Link
                    to="/apply"
                    className="btn btn-apply float-sm-right float-xs-left"
                  >
                    Apply
                  </Link>
                </li>
                <li className="job-preview">
                  <div className="content float-left">
                    <h4 className="job-title">Front-End Engineer</h4>
                    <h5 className="company">New York, NY</h5>
                  </div>
                  <a
                    href="apply"
                    className="btn btn-apply float-sm-right float-xs-left"
                  >
                    Apply
                  </a>
                </li>
                <li className="job-preview">
                  <div className="content float-left">
                    <h4 className="job-title">UI/UX Designer</h4>
                    <h5 className="company">Los Angeles, CA</h5>
                  </div>
                  <a
                    href="apply"
                    className="btn btn-apply float-sm-right float-xs-left"
                  >
                    Apply
                  </a>
                </li>
                <li className="job-preview">
                  <div className="content float-left">
                    <h4 className="job-title">Web Developer</h4>
                    <h5 className="company">Los Angeles, CA</h5>
                  </div>
                  <a
                    href="apply"
                    className="btn btn-apply float-sm-right float-xs-left"
                  >
                    Apply
                  </a>
                </li>
                <li className="job-preview">
                  <div className="content float-left">
                    <h4 className="job-title">Web Designer &amp; Developer</h4>
                    <h5 className="company">Seattle, WA</h5>
                  </div>
                  <a
                    href="apply"
                    className="btn btn-apply float-sm-right float-xs-left"
                  >
                    Apply
                  </a>
                </li>
                <li className="job-preview">
                  <div className="content float-left">
                    <h4 className="job-title">Visual Designer</h4>
                    <h5 className="company">Los Angeles, CA</h5>
                  </div>
                  <a
                    href="apply"
                    className="btn btn-apply float-sm-right float-xs-left"
                  >
                    Apply
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
