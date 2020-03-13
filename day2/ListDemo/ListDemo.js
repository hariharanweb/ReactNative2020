import React from 'react';
import {Text, StyleSheet, FlatList, SafeAreaView, View} from 'react-native';
import countries from './countries.json';

const ListDemo = () => {
  const renderCountry = ({item, index}) => {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.rowStyle}>{index + 1}</Text>
        <Text style={styles.rowStyle}>{item.countryName}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <FlatList
        data={countries}
        renderItem={renderCountry}
        keyExtractor={item => item.countryId}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  rowStyle: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    fontSize: 20,
  },
  rowContainer: {
    flexDirection: 'row',
  },
});

export default ListDemo;
