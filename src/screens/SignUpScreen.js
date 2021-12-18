import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Text } from "react-native-paper";
import Logo from "../components/pre/Logo";
import PreText from "../components/pre/PreText";
import PreButton from "../components/pre/PreButton";
import PreTextInput from "../components/pre/PreTextInput";
import BackButton from "../components/common/BackButton";
import Background from "../components/common/Background";
import * as Validator from "../Validator";
import { theme } from "../theme";
import { addUser } from "../addUserFunc";
import useGetUser from "../hooks/useGetUser";

export default function RegisterScreen({ navigation }) {
  const [id, setId] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });

  const { users, setUsers, getUserFirst } = useGetUser();
  useEffect(getUserFirst, []);

  const onSignUpPressed = () => {
    const idError = Validator.idValidator(users, "signup", id.value);
    const passwordError = Validator.passwordValidator(password.value);
    const emailError = Validator.emailValidator(email.value);

    if (emailError || passwordError || idError) {
      setId({ ...id, error: idError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    addUser(users, {
      id: id,
      password: password,
      email: email,
      isLogedIn: true,
    });

    navigation.reset({
      index: 0,
      routes: [{ name: "LoginScreen" }],
    });

    navigation.navigate("Home");
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
      <Text style={styles.footer}>© 2021 EWHA OSP04</Text>
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
  footer: {
    fontSize: 10,
    color: theme.colors.secondary,
    position: "absolute",
    bottom: Dimensions.get("window").height * 0.06,
  },
});
