import React from 'react';
import {SafeAreaView, FlatList, Text, StyleSheet} from 'react-native';
import countries from './countries.json';
const App = () => {
  const renderCountry = ({item}) => {
    return (
      <>
        <Text key={item.countryId} style={styles.item}>
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
const styles = StyleSheet.create({
  item: {
    paddingVertical: 10,
    fontSize: 18,
  },
});

export default App;
