import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'

export default function LoginScreen({ navigation }) {
  const [id, setId] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    const idError = idValidator(id.value)
    const passwordError = passwordValidator(password.value)
    if (idError || passwordError) {
      setId({ ...id, error: idError })
      setPassword({ ...password, error: passwordError })
      return
    }
  }

  return (
    <Background>
        <BackButton goBack={navigation.goBack} />
        <Logo />
        <Header>Todo App</Header>
        <TextInput/>
        <TextInput/>
        <Button>
            Login
        </Button>
        <View style={styles.row}>
            <Text>Don’t have an account? </Text>
            <TouchableOpacity onPress={() => navigation.replace('SignUpScreen')}>
                <Text style={styles.link}>Sign up</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.replace('SignUpScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
    </Background>
  )
}