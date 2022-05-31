import React, { useState, useEffect } from "react";
import { Button, Col, Container, FormGroup, Row, Form, FormLabel } from "react-bootstrap";

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
      errors.Firstname = "Firstname is required!";
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
      <Container>

        <Form onSubmit={handleSubmit}>
          <h3>Submit Your Application </h3>
          <Row >
            <Col md={6} >
              <FormGroup>
                <FormLabel>Firstname</FormLabel>
                <Form.Control type="text" name="Firstname" value={formValues.Firstname} onChange={handleChange} />
                <p>{formErrors.Firstname}</p>
              </FormGroup>
            </Col>

            <Col md={6} >
              <FormGroup>
                <FormLabel>Lastname</FormLabel>
                <Form.Control type="text" name="Lastname" value={formValues.Lastname} onChange={handleChange} />
                <p>{formErrors.Lastname}</p>
              </FormGroup>
            </Col>
            <Col md={6} >
              <FormGroup>
                <FormLabel>Email</FormLabel>
                <Form.Control type="text" name="email" value={formValues.email} onChange={handleChange} />
                <p>{formErrors.email}</p>
              </FormGroup>
            </Col>
            <Col md={6} >
              <FormGroup>
                <FormLabel>Address</FormLabel>
                <Form.Control type="text" name="address" value={formValues.address} onChange={handleChange} />
              </FormGroup>
            </Col>
            <Col md={6} >
              <FormGroup>
                <FormLabel> Qualification</FormLabel>
                <Form.Control type="text" name="qalification" value={formValues.qalification} onChange={handleChange} />
              </FormGroup>
            </Col>
            <Col md={6} >
              <FormGroup>
                <FormLabel>Experience</FormLabel>
                <Form.Control type="text" name="exprience" value={formValues.exprience} onChange={handleChange} />
              </FormGroup>
            </Col>
            <Col md={6} >
              <FormGroup>
                <FormLabel>Select your CV</FormLabel>
                <Form.Control type="file" name="cv" value={formValues.cv} />
              </FormGroup>
            </Col>
          </Row>
          <Button variant="primary" type="submit" className="mt-3 w-25 ">SUBMIT</Button>
        </Form>

      </Container>


    </>
  );
};

export default Apply;