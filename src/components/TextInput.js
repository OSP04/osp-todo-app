import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput as Input } from 'react-native-paper'

export default function TextInput({ errorText, description, ...props }) {
  return (
    <View >
      <Input
        underlineColor="transparent"
        mode="outlined"
        {...props}
      />
      {description && !errorText ? (
        <Text>{description}</Text>
      ) : null}
      {errorText ? <Text>{errorText}</Text> : null}
    </View>
  )
}