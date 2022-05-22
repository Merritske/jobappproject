import React from 'react'
import "../styles/home.css"

function Home() {
  return (
    <div>
        <nav className="navbar navbar-toggleable-md navbar-light fixed-top" id="navbar-main">
    {/* <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button> */}
    <a className="navbar-brand" href="home" title="Home">
        <i className="fa fa-cube"></i>
     
    </a>
    <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href="work" title="Work">
                    Work
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="jobs" title="Jobs">
                    Jobs
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="blog" title="Blog">
                    Blog
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="contact" title="Contact">
                    Contact
                </a>
            </li>
        </ul>
    </div>
</nav>

<header className="masthead">
    <div className="container">
        <div className="row">
            <div className="col-md-10 offset-md-1">
                <div className="site-heading">
                    <h1 className="heading">
                        Open Positions
                    </h1>
                    <span className="subheading">
                        Current listings for web design and front-end development jobs.
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
                            <h4 className="job-title">
                                Senior Web Designer
                            </h4>
                            <h5 className="company">
                                Seattle, WA
                            </h5>
                        </div>
                        <a href="apply" className="btn btn-apply float-sm-right float-xs-left">
                            Apply
                        </a>
                    </li>
                    <li className="job-preview">
                        <div className="content float-left">
                            <h4 className="job-title">
                                Front-End Engineer
                            </h4>
                            <h5 className="company">
                                New York, NY
                            </h5>
                        </div>
                        <a href="apply" className="btn btn-apply float-sm-right float-xs-left">
                            Apply
                        </a>
                    </li>
                    <li className="job-preview">
                        <div className="content float-left">
                            <h4 className="job-title">
                                UI/UX Designer
                            </h4>
                            <h5 className="company">
                                Los Angeles, CA
                            </h5>
                        </div>
                        <a href="apply" className="btn btn-apply float-sm-right float-xs-left">
                            Apply
                        </a>
                    </li>
                    <li className="job-preview">
                        <div className="content float-left">
                            <h4 className="job-title">
                                Web Developer
                            </h4>
                            <h5 className="company">
                                Los Angeles, CA
                            </h5>
                        </div>
                        <a href="apply" className="btn btn-apply float-sm-right float-xs-left">
                            Apply
                        </a>
                    </li>
                    <li className="job-preview">
                        <div className="content float-left">
                            <h4 className="job-title">
                                Web Designer &amp; Developer
                            </h4>
                            <h5 className="company">
                                Seattle, WA
                            </h5>
                        </div>
                        <a href="apply" className="btn btn-apply float-sm-right float-xs-left">
                            Apply
                        </a>
                    </li>
                    <li className="job-preview">
                        <div className="content float-left">
                            <h4 className="job-title">
                                Visual Designer
                            </h4>
                            <h5 className="company">
                                Los Angeles, CA
                            </h5>
                        </div>
                        <a href="apply" className="btn btn-apply float-sm-right float-xs-left">
                            Apply
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section></div>
  )
}

export default Home