/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';
import countries from './countries.json';
const App = () => {
  const renderCountry = ({item}) => {
    return (
      <>
        <Text key={item.countryId} style={{paddingVertical: 10}}>
          {item.countryName}
        </Text>
      </>
    );
  };

  return (
    <>
      <SafeAreaView>
        <FlatList
          data={countries}
          renderItem={renderCountry}
          keyExtractor={item => item.countryId}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
