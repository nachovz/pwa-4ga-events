//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
//import 'bootstrap';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import '../styles/index.css';
import Layout from './layout.js';

//import registerServiceWorker from '../static/registerServiceWorker';

ReactGA.initialize('UA-41629310-5');

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#6a6a6a',
      main: '#3f3f3f',
      dark: '#191919',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff6b70',
      main: '#dc3545',
      dark: '#a3001e',
      contrastText: '#fff'
    }
  }
});

//ReactDOM.render(
const Page = ({slug}) => (
  <div>
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Layout />
    </MuiThemeProvider>
  </div>,
  document.querySelector('#root')
);
//registerServiceWorker();

export default Page;