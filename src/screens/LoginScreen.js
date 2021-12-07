import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Logo from "../components/pre/Logo";
import PreText from "../components/pre/PreText";
import PreButton from "../components/pre/PreButton";
import PreTextInput from "../components/pre/PreTextInput";
import BackButton from "../components/common/BackButton";
import Background from "../components/common/Background";
import * as Validator from "../Validator";
import { theme } from "../theme";

export default function LoginScreen({ navigation }) {
  const [id, setId] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const onLoginPressed = () => {
    const idError = Validator.idValidator("login", id.value);
    const passwordError = Validator.passwordValidator("login", password.value);
    if (idError || passwordError) {
      setId({ ...id, error: idError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    const loginError = Validator.loginValidator(id.value, password.value);
    if (loginError) {
      setId({ ...id, error: loginError });
      setPassword({ ...password, error: loginError });
      return;
    }
    navigation.navigate("Home");
  };

  return (
    <Background type="pre">
      <BackButton type="pre" onPressOut={() => navigation.goBack()} />
      <Logo />
      <PreText>Todo App</PreText>
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
      <PreButton mode="contained" onPress={onLoginPressed}>
        Log in
      </PreButton>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text style={styles.skip}>Skip for Now</Text>
      </TouchableOpacity>
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
  skip: {
    fontSize: 20,
    color: theme.colors.primary,
    fontWeight: "bold",
    margin: 20,
    marginTop: 50,
  },
});
