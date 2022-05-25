import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Navbar from "../components/Navbar";
import "../styles/apply.css";

const Apply = () => {
  const initialValues = {
    Firstname: "",
    Lastname: "",
    email: "",
    qalification: "",
    exprience: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    //  console.log(formValues)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, []);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.Firstname) {
      errors.Firstname = "Username is required!";
    }
    if (!values.Lastname) {
      errors.Firstname = "Lastname is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Email is not valid !";
    }
    return errors;
  };
  return (
    <>
  <Navbar/>
      <div className="container px-2  ">
       
        <main>
          <div className="py-3 ">
           
          </div>

          <div className="row g-5">
            <div className="col-md-5 col-lg-4 order-md-last"></div>
            <div className="col-md-7 col-lg-8">
              {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
              <form onSubmit={handleSubmit}>
                <h3>Submit Your Application </h3>
                <div className="row g-3">
                  <div>
                    <div className="row">
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First name"
                          onChange={handleChange}
                          name="Firstname"
                          value={formValues.Firstname}
                        />
                      </div>
                      <p>{formErrors.Firstname}</p>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last name"
                          onChange={handleChange}
                          name="Lastname"
                          value={formValues.Lastname}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="email" className="form-label">
                      Email <span className="text-muted"></span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="you@example.com"
                      onChange={handleChange}
                      value={formValues.email}
                    />
                  </div>
                  <p>{formErrors.email}</p>
                  <div className="col-12">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                     <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="Address"
                      name="adress"
                      onChange={handleChange}
                      value={formValues.adress}
                    /> 
                      
                  </div>
                  <div className="col-12"></div>
                   <div className="col-12">
                    <label htmlFor="Qalification" className="form-label">
                      Qalification
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="qal"
                      placeholder="text"
                      name="ftext"
                      onChange={handleChange}
                      value={formValues.qalification}
                    />
                  </div>
                  
                  <div className="col-12">
                    <label htmlFor="address" className="form-label">
                      Exprience
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exprience"
                      placeholder="Exprience"
                      name="exprience"
                      onChange={handleChange}
                      value={formValues.exprience}
                    />
                  </div>
                  <button className="btn btn-dark" type="submit">
                  Submit
                </button>
                </div>

                <hr className="my-6" />

                 
              </form>
            </div>
          </div>
        </main>
        <div className="d-grid gap-2">
          {/* <button className="btn btn-dark" type="button">Submit</button>
           */}
        </div>
      </div>

      <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-1">© 2017–2022 Company Name</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="/privacy">Privacy</a>
          </li>
          <li className="list-inline-item">
            <a href="/Terms">Terms</a>
          </li>
          <li className="list-inline-item">
            <a href="/Support">Support</a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Apply;
 