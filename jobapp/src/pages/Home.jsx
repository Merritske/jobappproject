import React from 'react'
import "../styles/home.css"

function Home() {
  return (
    <div><nav className="navbar navbar-toggleable-md navbar-light fixed-top" id="navbar-main">
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="#" title="Home">
        <i class="fa fa-cube"></i>
    </a>
    <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href="#" title="Work">
                    Work
                </a>
            </li>
            <li className="nav-item">
                <a class="nav-link" href="#" title="Jobs">
                    Jobs
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" title="Blog">
                    Blog
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" title="Contact">
                    Contact
                </a>
            </li>
        </ul>
    </div>
</nav>

<header class="masthead">
    <div class="container">
        <div class="row">
            <div class="col-md-10 offset-md-1">
                <div class="site-heading">
                    <h1 class="heading">
                        Open Positions
                    </h1>
                    <span class="subheading">
                        Current listings for web design and front-end development jobs.
                    </span>
                </div>
            </div>
        </div>
    </div>
</header>

<section>
    <div class="container">
        <div class="row">
            <div class="col-md-10 offset-md-1">
                <ul class="job-list">
                    <li class="job-preview">
                        <div class="content float-left">
                            <h4 class="job-title">
                                Senior Web Designer
                            </h4>
                            <h5 class="company">
                                Seattle, WA
                            </h5>
                        </div>
                        <a href="#" class="btn btn-apply float-sm-right float-xs-left">
                            Apply
                        </a>
                    </li>
                    <li class="job-preview">
                        <div class="content float-left">
                            <h4 class="job-title">
                                Front-End Engineer
                            </h4>
                            <h5 class="company">
                                New York, NY
                            </h5>
                        </div>
                        <a href="#" class="btn btn-apply float-sm-right float-xs-left">
                            Apply
                        </a>
                    </li>
                    <li class="job-preview">
                        <div class="content float-left">
                            <h4 class="job-title">
                                UI/UX Designer
                            </h4>
                            <h5 class="company">
                                Los Angeles, CA
                            </h5>
                        </div>
                        <a href="#" class="btn btn-apply float-sm-right float-xs-left">
                            Apply
                        </a>
                    </li>
                    <li class="job-preview">
                        <div class="content float-left">
                            <h4 class="job-title">
                                Web Developer
                            </h4>
                            <h5 class="company">
                                Los Angeles, CA
                            </h5>
                        </div>
                        <a href="#" class="btn btn-apply float-sm-right float-xs-left">
                            Apply
                        </a>
                    </li>
                    <li class="job-preview">
                        <div class="content float-left">
                            <h4 class="job-title">
                                Web Designer &amp; Developer
                            </h4>
                            <h5 class="company">
                                Seattle, WA
                            </h5>
                        </div>
                        <a href="#" class="btn btn-apply float-sm-right float-xs-left">
                            Apply
                        </a>
                    </li>
                    <li class="job-preview">
                        <div class="content float-left">
                            <h4 class="job-title">
                                Visual Designer
                            </h4>
                            <h5 class="company">
                                Los Angeles, CA
                            </h5>
                        </div>
                        <a href="#" class="btn btn-apply float-sm-right float-xs-left">
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