import React, {useState} from 'react';
import {TextInput, StyleSheet, Button, View} from 'react-native';
const LoginScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const onLogin = () => {
    navigation.navigate('Welcome', {name: userName});
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={text => setUserName(text)}
        value={userName}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button onPress={onLogin} title="Login" color="#841584" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  input: {
    height: 40,
    marginTop: 10,
    alignItems: 'stretch',
  },
});
export default LoginScreen;
