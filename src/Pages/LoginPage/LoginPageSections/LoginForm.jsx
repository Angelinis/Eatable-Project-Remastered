import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import StyledButton from '../../GeneralComponents/StyledButton';
import styled from '@emotion/styled';
import { colors } from '../../../Styles/colors';
import { typography } from '../../../Styles/typography';
import { loginProfile } from '../../../Javascript/sessionservice';

const StyledLabel = styled.label`
color: ${colors.gray};
font-family: ${typography.form};
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
`

const StyledInputContainer = styled.input`
  border: none;
  border-bottom: 1px solid ${colors.black};
  witdth: 315px;
  background-color: transparent;
  outline: none;
  ::placeholder {
    color: ${colors.black};
  }
`;

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
margin-bottom: 20px;
`

const StyledButtonForm = styled(StyledButton)`
margin-top: 100px;
margin-bottom:50px
`

const StyledFormContainer = styled.div`
margin-left: 50px;
margin-right: 50px;
margin-top: 48px;
`


const LoginForm = ({handleSession})=> {

  return (
    <StyledFormContainer>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.password) {
          errors.password = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
          const userInfo = loginProfile(values);
          handleSession(userInfo);
          setSubmitting(false);
          resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <StyledDiv>
            <StyledLabel htmlFor="email">Email</StyledLabel>
            <Field type="email" name="email" as={StyledInputContainer} placeholder="Enter your email"/>
            <ErrorMessage name="email" component="div" />
          </StyledDiv>
          <StyledDiv>
            <StyledLabel htmlFor="password">Password</StyledLabel>
            <Field type="password" name="password" as={StyledInputContainer} placeholder="*******"/>
            <ErrorMessage name="password" component="div" />
          </StyledDiv>
          <StyledButtonForm type="submit" disabled={isSubmitting}>
            Login
          </StyledButtonForm>
        </Form>
      )}
    </Formik>
  </StyledFormContainer>
  )
}

export default LoginForm;