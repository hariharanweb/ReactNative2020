import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, FlatList, View, AsyncStorage} from 'react-native';
import NewsService from './NewsService';
const NewsScreen = () => {
  const [news, setNews] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [offline, setOffline] = useState(false);
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
          AsyncStorage.setItem(
            'offline_news',
            JSON.stringify(newsResponse.articles),
          );
        },
        () => {
          setOffline(true);
          AsyncStorage.getItem('offline_news').then(offlineNews => {
            setNews(JSON.parse(offlineNews));
          });
        },
      );
    }
  }, [loaded, news]);
  return (
    <>
      <View style={styles.header}>
        {offline && <Text style={styles.headerText}>Offline </Text>}
        <Text style={styles.headerText}>News Today</Text>
      </View>
      <FlatList
        data={news}
        renderItem={renderNews}
        keyExtractor={item => item.title}
      />
    </>
  );
};

const styles = StyleSheet.create({
  headerText: {
    marginVertical: 16,
    fontSize: 32,
  },
  header: {
    flexDirection: 'row',
  },
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
