import React from "react";

import { Formik, useField } from "formik";
import { Button, StyleSheet, View } from "react-native";

import StyledTextInput from "../component/StyledTextInput";
import StyledText from "../component/StyledText";

const initialValues = {
  email: "",
  password: "",
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
    marginTop: -5,
  },
  form: {
    margin: 12,
  },
});

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Email is required";
  } else if (
    !/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$/.test(
      values.email
    )
  ) {
    errors.email = "Invalid email format";
  }
  console.log(errors);

  return errors;
};

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <>
      <StyledTextInput
        error={meta.error}
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  );
};

const Login = () => {
  return (
    <Formik
      validate={validate}
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue name="email" placeholder="E-mail" />
            <FormikInputValue
              name="pasword"
              placeholder="Password"
              secureTextEntry
            />

            <View>
              <Button onPress={handleSubmit} title="Log In" />
            </View>
          </View>
        );
      }}
    </Formik>
  );
};

export default Login;
