import React from 'react'
import '../styles/joblisting.css'
import { Link } from "react-router-dom";

function Joblisting() {
  return (
    <div>  <div className="container" id="joblist">
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
  </div></div>
  )
}

export default Joblisting