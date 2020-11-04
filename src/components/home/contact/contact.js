import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import SectionHeader from '../../../utils/section-header/section-header';

const Contact = () => {
  const [submiting, setSubmitting] = useState(false);

  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  }
  
  function validateUsername(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (/\s/.test(value)) {
      error = 'Invalid name ';
    }
    return error;
  }

  function validateMessage(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (value.length < 120) {
      error = 'Message should contains at least 120 characters';
    }
    return error;
  }


  return (
    <section className="contact">
      <div className="contact__image"></div>
      <div className="contact__content">
        <SectionHeader title={"Skontaktuj się z nami"} />

        <Formik
          initialValues={{ 
            email: '', 
            name: '', 
            message: '' 
          }}
          onSubmit={(values) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(true);
            }, 400);
          }}
        >
        <Form className="contact__form">
          <div className="form-group--flex">
            <div className="form-group">
              <label 
                className="form-group__label" 
                htmlFor="name"> 
                Wpisz swoje imię 
              </label>
              <Field 
                className="form-group__input"  
                type="name" 
                name="name" />
              <ErrorMessage name="name" component="div" />
            </div>  
            <div className="form-group">
            <label 
                className="form-group__label" 
                htmlFor="name"> 
                Wpisz swój email 
              </label>
              <Field 
                className="form-group__input"  
                type="email" 
                name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
          </div>
        
          <div className="form-group">
            <label 
              className="form-group__label" 
              htmlFor="name"> 
              Wpisz swoją wiadomość
            </label>
            <Field 
              className="form-group__input form-group__input--textarea" 
              as="textarea" 
              name="message" />
            <ErrorMessage name="message" component="div" />
          </div>
          
          <button className="contact__form__submit" type="submit">
            Wyślij
          </button>
        </Form>
      </Formik>  
      </div>
    </section>
  );
}

export default Contact;
