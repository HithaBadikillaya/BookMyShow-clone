import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Tab, Nav } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignInSignUp = ({ setIsAuthenticated }) => {
  const [key, setKey] = useState("signin");

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "At least 6 characters").required("Required"),
    name: Yup.string().when("isSignup", {
      is: true,
      then: Yup.string().required("Required"),
    }),
  });

  const handleSignIn = (values) => {
    alert("Sign In Successful");
    setIsAuthenticated(true);
    console.log(values)
  };

  const handleSignUp = (values) => {
    alert("Sign Up Successful");
    setIsAuthenticated(true);
    console.log(values)

  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={8} lg={6} style={{ maxWidth: '500px' }}>
          <Card className="shadow-lg p-4">
            <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
              <Nav variant="tabs" className="mb-3">
                <Nav.Item>
                  <Nav.Link eventKey="signin">Sign In</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="signup">Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="signin">
                  <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={validationSchema}
                    onSubmit={handleSignIn}
                  >
                    {({ handleSubmit }) => (
                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                          <Form.Label>Email</Form.Label>
                          <Field name="email" type="email" as={Form.Control} />
                          <ErrorMessage name="email" component="div" className="text-danger small" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Password</Form.Label>
                          <Field name="password" type="password" as={Form.Control} />
                          <ErrorMessage name="password" component="div" className="text-danger small" />
                        </Form.Group>

                        <Button type="submit" variant="primary" className="w-100">
                          Sign In
                        </Button>
                      </Form>
                    )}
                  </Formik>
                </Tab.Pane>

                <Tab.Pane eventKey="signup">
                  <Formik
                    initialValues={{ name: "", email: "", password: "", isSignup: true }}
                    validationSchema={validationSchema}
                    onSubmit={handleSignUp}
                  >
                    {({ handleSubmit }) => (
                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                          <Form.Label>Name</Form.Label>
                          <Field name="name" type="text" as={Form.Control} />
                          <ErrorMessage name="name" component="div" className="text-danger small" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Email</Form.Label>
                          <Field name="email" type="email" as={Form.Control} />
                          <ErrorMessage name="email" component="div" className="text-danger small" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Password</Form.Label>
                          <Field name="password" type="password" as={Form.Control} />
                          <ErrorMessage name="password" component="div" className="text-danger small" />
                        </Form.Group>

                        <Button type="submit" variant="success" className="w-100">
                          Sign Up
                        </Button>
                      </Form>
                    )}
                  </Formik>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignInSignUp;
