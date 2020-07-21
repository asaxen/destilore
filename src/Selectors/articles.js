
const getFetchArticles = ({ articlesState }) =>
    articlesState.articles;

const getFetchArticle = ({ articlesState }) =>
    articlesState.article;

const getArticlesFilter = ({ articlesState }) =>
    articlesState.filter;
 
const getFetchError = ({ articlesState }) =>
    articlesState.error;
 
export {
    getFetchArticles,
    getFetchArticle,
    getArticlesFilter,
    getFetchError,
};