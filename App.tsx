import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === 'testuser' && password === 'password123') {
      setLoggedIn(true);
    }
  };

  return (
    <View style={styles.container}>
      {!loggedIn ? (
        <>
          <TextInput
            testID="username-input"
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            style={styles.input}
          />
          <TextInput
            testID="password-input"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
          <Button
            testID="login-button"
            title="Login"
            onPress={handleLogin}
          />
        </>
      ) : (
        <View testID="home-screen">
          <Text>Welcome</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 },
});
