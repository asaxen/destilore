import { call, put } from 'redux-saga/effects';
import { 
    doFetchArticlesResult,
    doFetchArticlesError,
    doFetchArticleResult,
    doSetArticlesFilterResult,
} from '../Actions/articles';

import { fetchArticles, fetchArticle} from '../Api/articles';
 
function* handleFetchArticles(action) {
  try {
    const result = yield call(fetchArticles);
    yield put(doFetchArticlesResult(result));
  } catch (error) {
    yield put(doFetchArticlesError(error));
  }
}

function* handleFetchArticle(action) {
    const { articleUrl } = action;
   
    try {
        const result = yield call(fetchArticle, articleUrl);
        yield put(doFetchArticleResult(result));
    } catch (error) {
        yield put(doFetchArticlesError(error));
    }
}

function* handleSetArticlesFilter(action) {
    try {
      yield put(doSetArticlesFilterResult(action.filter));
    } catch (error) {
      yield put(doFetchArticlesError(error));
    }
}

export {
    handleFetchArticles,
    handleFetchArticle,
    handleSetArticlesFilter,
};