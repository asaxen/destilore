import { takeEvery, all } from 'redux-saga/effects';
import { ARTICLES_FETCH, ARTICLE_FETCH, ARTICLES_SET_FILTER } from '../Actions/actionTypes';
import { handleFetchArticles, handleFetchArticle, handleSetArticlesFilter } from './articles';
 
function* watchAll() {
  yield all([
    takeEvery(ARTICLES_FETCH, handleFetchArticles),
    takeEvery(ARTICLE_FETCH, handleFetchArticle),
    takeEvery(ARTICLES_SET_FILTER, handleSetArticlesFilter)
  ])
}
 
export default watchAll;