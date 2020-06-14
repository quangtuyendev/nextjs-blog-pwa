import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  message: Yup.string().required('Message is required'),
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Email must be a valid email')
    .required('Email is required'),
  url: Yup.string().url('Please enter a valid URL'),
});

const initialValues = {
  message: '',
  name: '',
  email: '',
  url: '',
};

function PostCommentForm() {
  const {
    query: { postId },
  } = useRouter();
  const handleFormSubmit = (values) => {
    console.log(postId);
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, errors, touched }) => (
        <Form onSubmit={handleSubmit} id="contact_form" autoComplete="off">
          <div className="row">
            <div className="col-12">
              <p>
                <Field name="message">
                  {({ field }) => (
                    <textarea
                      id="message"
                      className="form-controllar"
                      aria-required="true"
                      rows={8}
                      cols={45}
                      placeholder="Write a Comment...."
                      spellCheck="false"
                      {...field}
                    />
                  )}
                </Field>
                {touched.message && errors.message && (
                  <span className="text-danger mt-2">{errors.message}</span>
                )}
              </p>
            </div>
            <div className="col-lg-4">
              <p>
                <Field name="name">
                  {({ field }) => (
                    <input
                      {...field}
                      type="text"
                      id="name"
                      className="form-controllar"
                      aria-required="true"
                      placeholder="Name*"
                    />
                  )}
                </Field>
                {touched.name && errors.name && (
                  <span className="text-danger mt-2">{errors.name}</span>
                )}
              </p>
            </div>
            <div className="col-lg-4">
              <p>
                <Field name="email">
                  {({ field }) => (
                    <input
                      {...field}
                      type="email"
                      id="name"
                      className="form-controllar"
                      aria-required="true"
                      placeholder="Email*"
                    />
                  )}
                </Field>
                {touched.email && errors.email && (
                  <span className="text-danger mt-2">{errors.email}</span>
                )}
              </p>
            </div>
            <div className="col-lg-4">
              <p>
                <Field name="url">
                  {({ field }) => (
                    <input
                      type="text"
                      id="url"
                      className="form-controllar"
                      aria-required="true"
                      placeholder="Website"
                      {...field}
                    />
                  )}
                </Field>
                {touched.url && errors.url && (
                  <span className="text-danger mt-2">{errors.url}</span>
                )}
              </p>
            </div>
            <div className="col-md-12">
              <p className="form-submit">
                <input
                  type="submit"
                  value="Post Comment"
                  id="submit"
                  name="submit"
                />
              </p>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default PostCommentForm;
