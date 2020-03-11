import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
const WelcomeScreen = ({route}) => {
  return (
    <View style={styles.container}>
      <Text>Welcome {route.params.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default WelcomeScreen;
