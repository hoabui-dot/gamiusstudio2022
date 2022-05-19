import React from 'react';
import * as S from './ContactForm.styled';
import * as Yup from 'yup';
import { useFormik } from 'formik';

export const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      yourMessage: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(10, 'Name must be 10 characters or less')
        .required('Required'),
      subject: Yup.string()
        .min(10, 'Subject must be 10 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      yourMessage: Yup.string()
        .min(10, 'Your message must be 10 characters or less')
        .required('Required'),
    }),
    onSubmit: (values) => {
      console.log('JSON', JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <S.Form>
          <S.Input>
            <input
              className='formItem'
              name='name'
              type='text'
              placeholder='Name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <S.Required>{formik.errors.name}</S.Required>
            ) : null}
          </S.Input>

          <S.Input>
            <input
              className='formItem'
              name='email'
              type='email'
              placeholder='Email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <S.Required>{formik.errors.email}</S.Required>
            ) : null}
          </S.Input>

          <S.Input>
            <input
              className='formItem'
              name='subject'
              type='text'
              placeholder='Subject'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject}
            />
            {formik.touched.subject && formik.errors.subject ? (
              <S.Required>{formik.errors.subject}</S.Required>
            ) : null}
          </S.Input>

          <S.Input>
            <textarea
              className='formItem message'
              name='yourMessage'
              placeholder='Message'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.yourMessage}
            />
            {formik.touched.yourMessage && formik.errors.yourMessage ? (
              <S.Required>{formik.errors.yourMessage}</S.Required>
            ) : null}
          </S.Input>

          <button className='button' type='submit'>
            Send Message
          </button>
        </S.Form>
      </form>
    </>
  );
};
