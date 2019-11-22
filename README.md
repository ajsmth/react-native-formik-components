## react-native-formik-components

Formik helper components to reduce boilerplate in React Native

## Example

```tsx
import { Formik } from 'formik';
import { Input, Form, DebugForm } from 'react-native-formik-components';

function MyForm() {
  return (
    <Formik
      initialValues={{ email: '', firstName: '', password: '' }}
      onSubmit={console.log}
    >
      <Form>
        {formik => {
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
```
