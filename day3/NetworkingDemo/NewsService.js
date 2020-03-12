const NewsService = {
  fetchNews: (success, failure) => {
    fetch(
      'http://newsapi.org/v2/top-headlines?country=in&apiKey=33d93cbd279b4122a8899073ef97c2b2',
    )
      .then(res => res.json())
      .then(response => success(response))
      .catch(error => failure(error));
  },
};

export default NewsService;
