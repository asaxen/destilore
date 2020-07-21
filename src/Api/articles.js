const URL = 'https://raw.githubusercontent.com/asaxen/destilore-content/master/';

const fetchArticles = () =>
  fetch(URL+'index.json')
    .then(response => response.json())
    .then(result => {
        for (const [key, value] of Object.entries(result)) {
            value.image = URL+value.image
        }
        return(result);
    });

const fetchArticle = (articleUrl) =>
    fetch(URL+articleUrl)
        .then(response => response.text())
        .then(result => {
            return result.replace("../../", URL);
        });
 
export {
    fetchArticles,
    fetchArticle,
};