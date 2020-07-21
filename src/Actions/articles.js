import {
    ARTICLE_FETCH,
    ARTICLE_FETCH_RESULT,
    ARTICLES_FETCH,
    ARTICLES_FETCH_RESULT,
    ARTICLES_FETCH_ERROR,
    ARTICLES_SET_FILTER,
    ARTICLES_SET_FILTER_RESULT
} from './actionTypes';

const doFetchArticle = (articleUrl) => ({
    type: ARTICLE_FETCH,
    articleUrl,
});

const doFetchArticleResult = (result) => ({
    type: ARTICLE_FETCH_RESULT,
    article: result,
});

const doFetchArticles = () => ({
    type: ARTICLES_FETCH,
});

const doFetchArticlesResult = (result) => ({
    type: ARTICLES_FETCH_RESULT,
    articles:result,
});

const doSetArticlesFilter = (filter) => ({
    type: ARTICLES_SET_FILTER,
    filter:filter,
});

const doSetArticlesFilterResult = (filter) => ({
    type: ARTICLES_SET_FILTER_RESULT,
    filter:filter,
});

const doFetchArticlesError = error => ({
    type: ARTICLES_FETCH_ERROR,
    error,
});

export {
    doFetchArticle,
    doFetchArticleResult,
    doFetchArticles,
    doFetchArticlesResult,
    doFetchArticlesError,
    doSetArticlesFilter,
    doSetArticlesFilterResult
};