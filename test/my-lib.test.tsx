import React from 'react';
import { render } from '@testing-library/react-native';
import { Input, Form, DebugForm } from '../src';
import { Formik } from 'formik';

function MyForm() {
  return (
    <Formik
      initialValues={{ email: '', firstName: '', password: '' }}
      onSubmit={console.log}
    >
      <Form>
        {() => {
          return (
            <>
              <Input name="email" type="email" placeholder="Email" />
              <Input name="firstName" type="name" placeholder="Name" />
              <Input name="password" type="password" placeholder="Password" />
              <DebugForm />
            </>
          );
        }}
      </Form>
    </Formik>
  );
}

test('render()', () => {
  const { debug } = render(<MyForm />);

  debug();
});
