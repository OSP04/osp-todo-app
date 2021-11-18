import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ViewPagerAndroidBase,
} from "react-native";
import { Text } from "react-native-paper";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import * as Validator from "../Validator";

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
    <View>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Welcome!</Header>
      <Text>Create a new account</Text>
      <TextInput
        label="ID"
        returnKeyType="next"
        value={id.value}
        onChangeText={(text) => setId({ value: text, error: "" })}
        error={!!id.error}
        errorText={id.error}
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <TextInput
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
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace("LoginScreen")}>
          <Text style={styles.link}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
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
});
