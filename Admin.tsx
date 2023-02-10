import { useState } from "react";

import { useFormik } from "formik";
import type { NextPage } from "next";
import * as yup from "yup";

import "bootstrap/dist/css/bootstrap.min.css";
const Admin: NextPage = () => {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      Password: "",
    },
    onSubmit: () => {
      setMessage("Form submitted");
      setSubmitted(true);
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Must be a valid email")
        .required("Email is required"),

      Password: yup
        .string()
        .min(8)
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "One Uppercase, One Lowercase, One Number and one special "
        )
        .required("Password is required"),
    }),
  });
  return (
    <>
      <div className="section bg_color">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="card p-4 py-5 mt-5 card_body">
                <div className="row">
                  <div className="col-md-12 col-sm-6">
                    <img className="icon pb-3" src="/secuza1logo.png" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-sm-6">
                    <p className="title_2">Login</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-6 px-5 py-5">
                    <div className="col-md-12">
                      <div className="row">
                        <p className="text-muted">
                          Login to Secuza using your email id and password.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="row"></div>

                      <form className="w-full" onSubmit={formik.handleSubmit}>
                        <div className="mb-3">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email Id"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          {formik.errors.email && (
                            <div className="text-danger">
                              {formik.errors.email}
                            </div>
                          )}
                        </div>
                        <div className="mb-3">
                          <input
                            type="Password"
                            name="Password"
                            className="form-control"
                            placeholder="Password"
                            value={formik.values.Password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          {formik.errors.Password && (
                            <div className="text-danger">
                              {formik.errors.Password}
                            </div>
                          )}
                        </div>

                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <img className="page1_img mt-5" src="/Fingerprint-bro1.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Admin;
