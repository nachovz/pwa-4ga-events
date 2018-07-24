import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
//import ReactGA from 'react-ga';
import PaperSheet from '../component/PaperSheet.jsx';
import EventPaperSheet from '../component/EventPaperSheet.jsx';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Helmet} from "react-helmet";
//import Moment from 'moment';
import Head from 'next/head';

//import {Consumer} from '../stores/AppContext.jsx';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  }),
  root2: {
      display: "flex",
      flexWrap: "wrap"
  },
  fixItem: {
    flex: '2 1 auto',
    minWidth: "67%",
    flexWrap: "wrap",
    maxWidth: 495,
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 20,
    height: 20
  },
  button: {
    margin: theme.spacing.unit
  },
  buttoners:{
    justifyContent: 'center',
    alignSelf: 'center'
  },
  heroUnit:{
    display: "flex", 
    justifyContent: "center",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    alignItems: "baseline",
    padding: "50px",
    flexWrap: "wrap",
    textAlign: "center"
  },
  stickyBar:{
    padding:"16px 0 0 0", 
    display: "flex", 
    flexDirection: "row", 
    flexWrap: "wrap", 
    zIndex: 10, 
    justifyContent: "center"
  },
  inlineForm:{
      margin: "0 10px",
      minWidth: 120,
      color: theme.palette.primary.contrastText
  },
  primaryTextColor:{
      color: theme.palette.primary.contrastText
  }
});

class Dashboard extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            filter: 'All',
            locationFilter: 'All',
            languageFilter: 'All'
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }
    
    render(){
        const { classes, events, locations } = this.props;
        //const events = this.props.events;
        //const locations = this.props.locations;
        //GA Pageview
        //ReactGA.pageview(window.location.pathname + window.location.search);
        const url = typeof window !== 'undefined'  ? window.location.href+"" : "/";
        
        return(
            <div style={{flexGrow:1}}>
            
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="canonical" href={url} />
                    <link rel="manifest" href="/static/manifest.json" />
                    <meta name="theme-color" content="#ff6600" />
                    <link rel="shortcut icon" href="/static/icon.png" />
                    <link rel="apple-touch-icon" href="/static/icon.png" />
                    <meta name="apple-mobile-web-app-title" content="Hacker News" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="description" content="4Geeks Academy: one app for all Events." />
                    <meta property="og:type" content="article"/>  
                    <meta property="og:url" content={url}/>
                    <meta property="og:image" content={url+"static/android-chrome-512x512.png"}/>  
                    <meta property="og:title" content="4Geeks Academy's Events"/>  
                    <meta property="og:description" content="4Geeks Academy: one app for all Events."/>  
                    <meta name="twitter:card" content="summary"/>  
                    <meta name="twitter:image" content={url+"static/android-chrome-512x512.png"}/>  
                    <meta name="twitter:title" content="4Geeks Academy's Events"/>  
                    <meta name="twitter:description" content="4Geeks Academy: one app for all Events."/>  
                </Head>
                <div className={classes.heroUnit} id="heroUnit-main">
                    <Typography component="h1" variant="display1" color="inherit" className={classes.heroText}>
                        Select a location:  
                    </Typography>
                    <form autoComplete="off">
                        <FormControl className={classes.inlineForm} id="heroSelect">
                            <Select
                                value={this.state.locationFilter}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'locationFilter',
                                    id: 'location-simple'
                                }}
                                className={classes.primaryTextColor}
                                style={{border: "1px solid white", padding: "0 5px", fontSize:"2em"}}
                                >
                                <MenuItem value="All">
                                    <em>All ({/*this.actions.getAllEvents().length*/events.length})</em>
                                </MenuItem>
                                {
                                    /*this.actions.getAllLocations().map( (locat, index) => {
                                        return <MenuItem value={locat.slug} key={index}>{locat.name} ({locat.count})</MenuItem>;
                                    })*/
                                    locations.map( (locat, index) => {
                                        return <MenuItem value={locat.slug} key={index}>{locat.name} ({locat.count})</MenuItem>;
                                    })
                                }
                            </Select>
                        </FormControl>
                    </form> 
                    <Typography component="h1" variant="display1" color="inherit" className={classes.heroText}>
                        to discover our available courses, workshops and events.
                    </Typography>
                </div>
                <Grid container spacing={0} style={{justifyContent: 'center'}} >
                    <AppBar className={classes.stickyBar} position="sticky" color="default">
                        <div style={{display: "flex", flexWrap: "no-wrap", alignItems: "baseline"}}>
                            <form autoComplete="off">
                                <FormControl className={classes.inlineForm}>
                                    <InputLabel htmlFor="filter-simple">Type of event</InputLabel>
                                    <Select
                                        value={this.state.filter}
                                        onChange={this.handleChange}
                                        inputProps={{
                                            name: 'filter',
                                            id: 'filter-simple'
                                        }}
                                        style={{fontSize: '1.2rem'}}
                                        >
                                        <MenuItem value="All">
                                            <em>All</em>
                                        </MenuItem>
                                        <MenuItem value={'course'}>Course</MenuItem>
                                        <MenuItem value={'workshop'}>Workshop</MenuItem>
                                        <MenuItem value={'hackathon'}>Hackathon</MenuItem>
                                        <MenuItem value={'intro_to_coding'}>Intro to Coding</MenuItem>
                                        <MenuItem value={'coding_weekend'}>Coding Weekend</MenuItem>
                                        <MenuItem value={'4geeks_night'}>4Geeks Night</MenuItem>
                                        <MenuItem value={'other'}>Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </form>
                        </div>
                        <div style={{display: "flex", flexWrap: "no-wrap", alignItems: "baseline"}}>
                            <form autoComplete="off">
                                <FormControl className={classes.inlineForm}>
                                    <InputLabel htmlFor="language-simple">Language</InputLabel>
                                    <Select
                                        value={this.state.languageFilter}
                                        onChange={this.handleChange}
                                        inputProps={{
                                            name: 'languageFilter',
                                            id: 'language-simple'
                                        }}
                                        style={{fontSize: '1.2rem'}}
                                        >
                                        <MenuItem value="All">
                                            <em>All</em>
                                        </MenuItem>
                                        <MenuItem value={'en'}>English</MenuItem>
                                        <MenuItem value={'es'}>Español</MenuItem>
                                    </Select>
                                </FormControl>
                            </form>
                        </div>
                    </AppBar>
                    <Grid item xs md={7} xl={5} >
                        {
                            events.length < 1 ? 
                                <PaperSheet text="No Events"/>
                            : events.map((event, index) => {
                                if( (this.state.filter === event.type || this.state.filter === '' || this.state.filter === 'All') 
                                    && 
                                    (this.state.locationFilter === event.location_slug || this.state.locationFilter === '' || this.state.locationFilter === 'All')
                                    &&
                                    (this.state.languageFilter === event.lang || this.state.languageFilter === event.language || this.state.languageFilter === '' || this.state.languageFilter === 'All')
                                ) return(
                                    <EventPaperSheet key={index} event={event}/>
                                );
                                 return undefined;
                            })
                        }
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Dashboard);
Dashboard.propTypes = {
    classes: PropTypes.object
};