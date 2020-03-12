import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, FlatList, View} from 'react-native';
import NewsService from './NewsService';
const NewsScreen = () => {
  const [news, setNews] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const renderNews = ({item}) => {
    return (
      <View style={styles.newsItem}>
        <Text style={styles.newsText}>{item.title}</Text>
      </View>
    );
  };
  useEffect(() => {
    if (!loaded) {
      NewsService.fetchNews(
        newsResponse => {
          console.log(newsResponse.articles);
          setNews(newsResponse.articles);
          setLoaded(true);
        },
        () => {},
      );
    }
  }, [loaded, news]);
  return (
    <>
      <Text>News Today</Text>
      <FlatList
        data={news}
        renderItem={renderNews}
        keyExtractor={item => item.title}
      />
    </>
  );
};

const styles = StyleSheet.create({
  newsItem: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    flexDirection: 'row',
  },
  newsText: {
    fontSize: 16,
    flex: 9,
    color: 'grey',
  },
});
export default NewsScreen;
