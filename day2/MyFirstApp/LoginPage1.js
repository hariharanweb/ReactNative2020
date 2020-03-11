/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TextInput,
  Button,
  
} from 'react-native';


const LoginPage = () => {

  function loginClicked() {
    console.log('The link was clicked.');

    for (let i=0;i<10;i++) {
      console.log("Print my first value"+i)
    }
  }
  return (
    <SafeAreaView style={{...styles.container, flex: 1}}>
    <Image source={require('./images/logoMovies.png')} style={{marginTop:70, marginHorizontal:'25%', width:'50%'}}/>
      <View style={{marginTop: '20%'}}>
        <TextInput style={{...styles.textStyle}} />
        <TextInput style={{...styles.textStyle}} />
      </View>
      <View style={{ flexDirection: 'column',
                  justifyContent: 'space-between',
                  marginLeft: 20,
                  marginRight:20,
                  marginTop: 20,
        }}>
        <Button title="Login"
         style={styles.buttonStyle}
          onPress={loginClicked}
         />
        <View style={{height:10}}/>
        <Button
          title="Forgot my password"
          style={{...styles.buttonStyle, marginBottom: 10}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    borderColor: 'black',
    borderWidth: 1,
    marginLeft: '10%',
    marginRight: '10%',
    height: 40,
    marginTop: 8,
  },
  buttonStyle: {
    borderColor: 'black',
    borderWidth: 1,
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: 10,
  },
});

export default LoginPage;
