import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import Markdown from '../Utils/Markdown';

import { getFetchArticles, getFetchError, getFetchArticle } from '../Selectors/articles';
import { doFetchArticles, doFetchArticle } from '../Actions/articles'

const rootStyle = {
    flexGrow: 1,
    padding:30
};

const paper = {
    padding: 30,
    flexGrow: 1,
};

class Article extends React.Component {

    loadArticle() {
        const { id } = this.props.match.params;
        console.log("Loading article id:", id);
        const articleUrl = this.props.articles[id].link;
        this.props.getArticle(articleUrl);
    }

    componentDidMount() {
        if (this.props.articles.length === 0){
            console.log("Article list not loaded. Loading...")
            this.props.getArticles();
        }
        else{
            this.loadArticle();
        }
    };

    componentDidUpdate(prevProps) {
        this.loadArticle();
    }

    render () {
        return (
            <div style={rootStyle}>
                <Grid container spacing={12}>
                    <Paper elevation={3} style={paper}>
                        <Markdown source={this.props.article} />
                    </Paper>
                </Grid>
                
            </div>
        )
    };
}

const mapStateToProps = state => ({
    articles: getFetchArticles(state),
    article: getFetchArticle(state),
    error: getFetchError(state),
  });

const mapActionsToProps = (dispatch) => ({
    getArticles: () => dispatch(doFetchArticles()),
    getArticle: articleUrl => { dispatch(doFetchArticle(articleUrl))},
});

   
export default connect(
    mapStateToProps,
    mapActionsToProps
)(Article);