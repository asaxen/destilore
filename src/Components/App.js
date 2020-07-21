import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Articles from './Articles'
import Header from './Header'
import Article from './Article'
import theme from '../Theme/theme'


function App() {
  return (
    <React.Fragment>
        <MuiThemeProvider theme={theme}>
        <BrowserRouter>
            <Header/>
            <Switch>
              <Route exact path='/' component={Articles} />
              <Route path='/articles' component={Articles} />
              <Route path='/article/:id' component={Article} />
          </Switch>
        </BrowserRouter>
        </MuiThemeProvider>
    </React.Fragment>
  );
}

export default App;
