import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import Logo from "../components/Logo";
import PreText from "../components/PreText";
import PreButton from "../components/PreButton";
import PreTextInput from "../components/PreTextInput";
import BackButton from "../components/BackButton";
import Background from "../components/Background";
import * as Validator from "../Validator";
import { theme } from "../theme";

export default function RegisterScreen({ navigation }) {
  const [id, setId] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });

  const onSignUpPressed = () => {
    const idError = Validator.idValidator(id.value);
    const passwordError = Validator.passwordValidator(password.value);
    const emailError = Validator.emailValidator(email.value);

    if (emailError || passwordError || idError) {
      setId({ ...id, error: idError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    navigation.reset({
      index: 0,
      routes: [{ name: "LoginScreen" }],
    });
  };

  return (
    <Background type="pre">
      <BackButton type="pre" onPressOut={() => navigation.goBack()} />
      <Logo />
      <PreText>
        {"Welcome!"}
        <Text style={styles.description}>{"\n\n"}Create a new account</Text>
      </PreText>

      <PreTextInput
        label="ID"
        returnKeyType="next"
        value={id.value}
        onChangeText={(text) => setId({ value: text, error: "" })}
        error={!!id.error}
        errorText={id.error}
      />
      <PreTextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <PreTextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <PreButton mode="contained" onPress={onSignUpPressed}>
        Sign Up
      </PreButton>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.link}>Log in</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 5,
  },
  link: {
    fontWeight: "bold",
  },
  description: {
    paddingTop: 10,
    fontWeight: "bold",
    color: theme.colors.secondary,
    fontSize: 15,
    textAlign: "center",
  },
});
