import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import Background from "../components/Background";
import * as Validator from "../Validator";

export default function LoginScreen({ navigation }) {
  const [id, setId] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const onLoginPressed = () => {
    const idError = Validator.idValidator(id.value);
    const passwordError = Validator.passwordValidator(password.value);
    if (idError || passwordError) {
      setId({ ...id, error: idError });
      setPassword({ ...password, error: passwordError });
      return;
    }
  };

  return (
    <Background>
      <BackButton onPressOut={() => navigation.goBack()} />
      <Logo />
      <Header>Todo App</Header>
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
      <Button mode="contained" onPress={onLoginPressed}>
        Log in
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
      {/* 추후 메인화면으로 연결 */}
      <TouchableOpacity onPress={() => navigation.navigate("EditScreen")}>
        <Text style={styles.link}>Skip for Now</Text>
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
});
