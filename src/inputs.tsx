import React from 'react';
import { useFormikContext } from 'formik';
import { TextInput, TextInputProps, Text } from 'react-native';

function useTextField(name: string) {
  const formik = useFormikContext();
  const { onChange, ...formHandlers } = formik.getFieldProps(name);

  const onChangeText = formik.handleChange(name);
  const onBlur = formik.handleBlur(name);

  return {
    ...formHandlers,
    onChangeText,
    onBlur,
  };
}

type InputType = 'email' | 'password' | 'name';

interface iInput extends TextInputProps {
  name: string;
  type: InputType;
}

function Input(props: iInput) {
  const formHandlers = useTextField(props.name);
  const defaultProps = DEFAULT_PROPS[props.type];

  return <TextInput {...formHandlers} {...defaultProps} {...props} />;
}

const DEFAULT_PROPS: Record<InputType, Partial<TextInputProps>> = {
  email: {
    autoCompleteType: 'email',
    keyboardType: 'email-address',
    textContentType: 'emailAddress',
    autoCapitalize: 'none',
  },

  password: {
    textContentType: 'password',
    autoCapitalize: 'none',
    secureTextEntry: true,
  },

  name: {
    autoCompleteType: 'name',
    textContentType: 'name',
    autoCapitalize: 'words',
  },
};

function DebugForm() {
  const form = useFormikContext();
  return <Text>{JSON.stringify(form, null, 2)}</Text>;
}

function Form({ children }: any) {
  const formik = useFormikContext();

  if (typeof children === 'function') {
    return children(formik);
  }

  return children;
}

export { Input, useTextField, DebugForm, Form };
