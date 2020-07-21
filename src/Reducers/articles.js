import { 
    ARTICLES_FETCH_RESULT,
    ARTICLES_FETCH_ERROR,
    ARTICLE_FETCH_RESULT,
    ARTICLES_SET_FILTER_RESULT,
} from '../Actions/actionTypes';

const INITIAL_STATE = {
  articles: [],
  article: {},
  filter: "",
  error: null,
};
 
const applyFetchArticles = (state, action) => ({
  articles: action.articles,
  article: state.article,
  filter: state.filter,
  error: null,
});

const applyFetchArticle = (state, action) => ({
    articles: state.articles,
    article: action.article,
    filter: state.filter,
    error: null,
});

const applySetFilter = (state, action) => ({
    articles: state.articles,
    article: state.article,
    filter: action.filter,
    error: null,
});
 
const applyFetchArticlesError = (state, action) => ({
    articles: [],
    article: {},
    filter: "",
    error: action.error,
});
   
function articlesReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ARTICLE_FETCH_RESULT : {
            return applyFetchArticle(state, action);
        }
        case ARTICLES_FETCH_RESULT : {
            return applyFetchArticles(state, action);
        }
        case ARTICLES_SET_FILTER_RESULT : {
            return applySetFilter(state, action);
        }
        case ARTICLES_FETCH_ERROR : {
            return applyFetchArticlesError(state, action);
        }
        default : return state;
    }
}

export default articlesReducer;