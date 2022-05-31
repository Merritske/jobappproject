
import React, { useState, useEffect } from "react";
import { Button, Container, Form, FormGroup, FormLabel } from "react-bootstrap";
import "../styles/apply.css";
const Work = () => {
  const initialValues = {
  jobtitle: "",
    companyName: "",
    email: "",
    address: "",
  description: "",
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
    if (!values.companyName) {
      errors.jobtitle = "Jobtitle is required!";
    }
    if (!values.jobtitle) {
      errors.companyName= "Company name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Email is not valid !";
    }
    return errors;
  };
  return (

 
  <Container fluid className="mt-5 w-50 text-align-start" >
    <Form onSubmit={handleSubmit}>
        <h3 className="m-5 text-center">Post a job </h3>
            <FormGroup >
          <FormLabel>Jobtitle</FormLabel>
          <Form.Control type="text" name="jobtitle" value={formValues.jobtitle} onChange={handleChange} />
                      <p>{formErrors.jobtitle}</p>
            </FormGroup>
            <FormGroup>
          <FormLabel>Company name</FormLabel>
          <Form.Control type="text" name="companyName" value={formValues.companyName} onChange={handleChange} />
                      <p>{formErrors.companyName}</p>
            </FormGroup>
            <FormGroup>
          <FormLabel>Email</FormLabel>
          <Form.Control type="text" name="email" value={formValues.email} onChange={handleChange} />
                      <p>{formErrors.email}</p>
            </FormGroup>
            <FormGroup>
          <FormLabel>Address</FormLabel>
          <Form.Control type="text" name="address" value={formValues.address} onChange={handleChange} />
                      <p>{formErrors.address}</p>
            </FormGroup>
            <FormGroup>
          <FormLabel>Description</FormLabel>
          <Form.Control as="textarea" rows={15} name="description" value={formValues.description} onChange={handleChange} />

            </FormGroup>
     

            <Button variant="primary" type="submit" className="m-2" >
              Submit
            </Button>
      </Form>

             

                <hr className="my-6" />
      
      


      <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-1">© 2017–2022 Fatema-An</p>
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
  </Container>


  )
}

export default Work
