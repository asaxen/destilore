import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { 
    getFetchArticles,
    getFetchError,
    getFetchArticle,
    getArticlesFilter
} from '../Selectors/articles';
import { connect } from 'react-redux';

import { doFetchArticles, doFetchArticle } from '../Actions/articles'


const rootStyle = {
    flexGrow: 1,
    paddingTop:10
};

const cardStyle = {
    flexGrow: 1,
};

const imageStyle = {
    height:300
};

class Articles extends React.Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getArticles();
    };

    prepareArticles(filter) {
        let result = {}
        Object.entries(this.props.articles).map(([id, article]) => {
            let tags = "";
            if ('tags' in article){
                tags = article.tags.join();
            }
            let searchString = `${id} ${article.title} ${article.author} ${tags} ${article.date}`
            console.log(searchString);
            let regex = new RegExp(".*", 'g')
            if (filter !== ""){
                regex = new RegExp(filter, 'gi')
            }
            
            const found = searchString.match(regex);

            if (found) {
                result[id] = article
            }
        });
        return result;
    };

    render () {
        return (
            <div style={rootStyle}>
                <Grid container spacing={2}>
                {
                Object.entries(this.prepareArticles(this.props.filter)).map(([id, article]) => (
                    <Grid item xs={4} >
                        <Card style={cardStyle}>
                            <CardActionArea onClick={() => {
                                this.props.history.push(
                                    { pathname:"/article/"+id}
                                );
                                }}>
                                <CardMedia
                                component='img'
                                image={article.image}
                                title={article.title}
                                style={imageStyle}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {article.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {article.date} - {article.author}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Share
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))
                }
                </Grid>
            </div>
        );
    };
}

const mapStateToProps = state => ({
    articles: getFetchArticles(state),
    article: getFetchArticle(state),
    filter: getArticlesFilter(state),
    error: getFetchError(state),
  });

const mapActionsToProps = (dispatch) => ({
    getArticles: () => dispatch(doFetchArticles()),
    getArticle: articleUrl => { dispatch(doFetchArticle(articleUrl))},
});

   
export default connect(
    mapStateToProps,
    mapActionsToProps
)(Articles);