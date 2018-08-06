import {Component} from "react";
import Moment from "moment";
import PropTypes from 'prop-types';
import Head from 'next/head';
//import ReactGA from 'react-ga';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import GroupIcon from '@material-ui/icons/Group';
import CardMedia from '@material-ui/core/CardMedia';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import DirectionsIcon from '@material-ui/icons/Directions';
import LabelIcon from '@material-ui/icons/Label';
import CheckIcon from '@material-ui/icons/Check';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import CircularProgress from '@material-ui/core/CircularProgress';
import CustomChip from '../component/CustomChip.jsx';
import ReactHtmlParser from 'react-html-parser';
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  RedditShareButton,
  EmailShareButton,
  
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  LinkedinIcon,
  PinterestIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  EmailIcon
} from 'react-share';

import Router from 'next/router';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import fetch from 'isomorphic-unfetch';

import Striptags from 'striptags';

const styles = theme => ({
  card: {
    maxWidth: 1000,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 44
  },
  cardHeader: {
      paddingBottom:0
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  actions: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '8px 12px'
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: 'auto'
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 60,
    height: 60
  },
  margin: {
    marginRight: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit
  },
  progress: {
    margin: theme.spacing.unit * 2
  },
  badgesContainer: {
    padding: theme.spacing.unit+"px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexWrap: "wrap"
  },
  chip: {
    marginLeft: 0,
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.primary.contrastText,
    border: "1px solid "+theme.palette.primary.light
  },
  chipAvatar: {
    backgroundColor: theme.palette.primary.contrastText,
    height:30,
    width:30
  },
  clickable: {
    boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)"
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  },
  eventContent:{
    padding: theme.spacing.unit
  }
});

class Event extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            event: {},
            ready: typeof props.event.id !== 'undefined'
        }
        
        this.actions = {
            loadApiData: () => {
                //console.log(this.props);
                fetch('https://assets.breatheco.de/apis/event/'+this.props.router.query.id)
                    .then( (response) => {
                        if (response.status !== 200) {
                            throw new Error(response.statusText);
                        }
                        return response.json();
                    }).then( (data) => {
                        //data = data.filter( event => Moment(event.event_date).diff( Moment(), "d" ) > 0 );
                        this.setState({event: data, ready: true});
                  }).catch(error => {
                    console.log(error);
                    this.setState({event: {
                                              "description": "<h2>4Geeks Nights - Learn to Code for Free</h2><p>Coding is no longer a dream. We are closing the gap and bringing coding to your life. A master platform, full of exercises and content, for free.</p><p>To begin, we will give you free access to our Coding Introduction Program, where you will find everything you need to start your training as a software developer. HTML, CSS, Bootstrap, JavaScript and more. This is not only reading, videos, and tutorials, but tons of exercises and projects to work with.</p><p><br></p><p>We have&nbsp;at least five&nbsp;GREAT reasons why you should&nbsp;attend&nbsp;our 4Geeks Nights event on June&nbsp;28th:</p><p><br></p><p>- You will&nbsp;have&nbsp;FREE access to the Coding Intro Program and platform.&nbsp;Learning&nbsp;to Code has never been easy and&nbsp;better.</p><p><br></p><p>- You will&nbsp;receive&nbsp;free mentorship hours every&nbsp;week.</p><p><br></p><p>- Our Career Support program speaks for&nbsp;itself…You&nbsp;will meetsome of&nbsp;our&nbsp;Alumni and hear about their personal projects and overall experience&nbsp;at 4Geeks!</p><p><br></p><p>- You will have fun while meeting our entire team &amp; office: Founders, instructors, partners and classroom spaces. Have a drink with us!</p><p><br></p><p>- You will get the details about our Software Program. Full Stack + Part-time + Premium Education + Best pricing&nbsp;options.</p><p><br></p><p>- Play Kill the Bug and earn a prize!</p><p><br></p><p>We are launching new programs every two months&nbsp;and you canbecome part of our&nbsp;next 4Geeks Alumni as a Full-Stack Software Developer. Get ready to change your&nbsp;life!</p><p><br></p><p>Come. Have fun. Learn to Code. Let's celebrate together our way of making Coding a possibility&nbsp;to your current or new career.</p><p><br></p><p>A little bit about our program:</p><p><br></p><p>Become a software developer in 16 weeks, with a part-time/blended methodology and with pricing options starting at$140/mo.&nbsp;You will get&nbsp;over&nbsp;320 hours of&nbsp;training in&nbsp;a gamified program designed to be 100% hands-on.</p><p><br></p><p>Our Syllabus is based on&nbsp;JavaScript, React JS, Python, Django, Mongo DB, AJAX, API,&nbsp;and&nbsp;other exciting technologies. You will be trained in the most&nbsp;desired&nbsp;technologies in&nbsp;Miami in exactlywhat companies are looking for!</p><p><br></p><p>NOTE: Our programs&nbsp;have a maximum capacity of 14&nbsp;students, so there are only a few spots availableper cohort. Just click here if you want to meet with us.&nbsp;The next program&nbsp;will start&nbsp;on August 13th.&nbsp;This is your chance to understand how Coding will change your professional life!</p>",
                                              "title": "4Geeks Nights: INFO+CODING+GAMES+DRINKS",
                                              "url": "https://www.eventbrite.com/e/4geeks-nights-infocodinggamesdrinks-tickets-47588520546",
                                              "capacity": "100",
                                              "event_date": "2018-07-28 06:00:00",
                                              "type": "4geeks_night",
                                              "address": "66 West Flagler Street  #900",
                                              "location_slug": "downtown-miami",
                                              "lang": "en",
                                              "city_slug": "miami",
                                              "banner_url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F46680560%2F154764716258%2F1%2Foriginal.jpg?rect=0%2C60%2C960%2C480&auto=compress&w=2000&s=af8051ba98cddee95edbcd4ec904f334",
                                              "invite_only": "false",
                                              "created_at": "2018-06-29 10:31:56",
                                              "id": "2",
                                              "status": "published",
                                              "logo_url": null
                                            }, ready: true
                    });
                });
            }
        }
    }
    
    static async getInitialProps( { query } ){
        let event= {};
        try{
            const res = await fetch('https://assets.breatheco.de/apis/event/'+query.id);
            const data = await res.json();
            event = data;
        } catch(e){
            console.log(e);
            /*event = {
                      "description": "<h2>4Geeks Nights - Learn to Code for Free</h2><p>Coding is no longer a dream. We are closing the gap and bringing coding to your life. A master platform, full of exercises and content, for free.</p><p>To begin, we will give you free access to our Coding Introduction Program, where you will find everything you need to start your training as a software developer. HTML, CSS, Bootstrap, JavaScript and more. This is not only reading, videos, and tutorials, but tons of exercises and projects to work with.</p><p><br></p><p>We have&nbsp;at least five&nbsp;GREAT reasons why you should&nbsp;attend&nbsp;our 4Geeks Nights event on June&nbsp;28th:</p><p><br></p><p>- You will&nbsp;have&nbsp;FREE access to the Coding Intro Program and platform.&nbsp;Learning&nbsp;to Code has never been easy and&nbsp;better.</p><p><br></p><p>- You will&nbsp;receive&nbsp;free mentorship hours every&nbsp;week.</p><p><br></p><p>- Our Career Support program speaks for&nbsp;itself…You&nbsp;will meetsome of&nbsp;our&nbsp;Alumni and hear about their personal projects and overall experience&nbsp;at 4Geeks!</p><p><br></p><p>- You will have fun while meeting our entire team &amp; office: Founders, instructors, partners and classroom spaces. Have a drink with us!</p><p><br></p><p>- You will get the details about our Software Program. Full Stack + Part-time + Premium Education + Best pricing&nbsp;options.</p><p><br></p><p>- Play Kill the Bug and earn a prize!</p><p><br></p><p>We are launching new programs every two months&nbsp;and you canbecome part of our&nbsp;next 4Geeks Alumni as a Full-Stack Software Developer. Get ready to change your&nbsp;life!</p><p><br></p><p>Come. Have fun. Learn to Code. Let's celebrate together our way of making Coding a possibility&nbsp;to your current or new career.</p><p><br></p><p>A little bit about our program:</p><p><br></p><p>Become a software developer in 16 weeks, with a part-time/blended methodology and with pricing options starting at$140/mo.&nbsp;You will get&nbsp;over&nbsp;320 hours of&nbsp;training in&nbsp;a gamified program designed to be 100% hands-on.</p><p><br></p><p>Our Syllabus is based on&nbsp;JavaScript, React JS, Python, Django, Mongo DB, AJAX, API,&nbsp;and&nbsp;other exciting technologies. You will be trained in the most&nbsp;desired&nbsp;technologies in&nbsp;Miami in exactlywhat companies are looking for!</p><p><br></p><p>NOTE: Our programs&nbsp;have a maximum capacity of 14&nbsp;students, so there are only a few spots availableper cohort. Just click here if you want to meet with us.&nbsp;The next program&nbsp;will start&nbsp;on August 13th.&nbsp;This is your chance to understand how Coding will change your professional life!</p>",
                      "title": "4Geeks Nights: INFO+CODING+GAMES+DRINKS",
                      "url": "https://www.eventbrite.com/e/4geeks-nights-infocodinggamesdrinks-tickets-47588520546",
                      "capacity": "100",
                      "event_date": "2018-07-28 06:00:00",
                      "type": "4geeks_night",
                      "address": "66 West Flagler Street  #900",
                      "location_slug": "downtown-miami",
                      "lang": "en",
                      "city_slug": "miami",
                      "banner_url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F46680560%2F154764716258%2F1%2Foriginal.jpg?rect=0%2C60%2C960%2C480&auto=compress&w=2000&s=af8051ba98cddee95edbcd4ec904f334",
                      "invite_only": "false",
                      "created_at": "2018-06-29 10:31:56",
                      "id": "2",
                      "status": "published",
                      "logo_url": null
                                            };*/
        }
        
        //console.log("HOLA :"+context);
        //const userAgent = context.req ? context.req.headers['user-agent'] : navigator.userAgent;
        return { event };
    }
    
    componentDidMount(){
        //this.actions.loadApiData();
    }
    
    render(){
        const { classes, event } = this.props;
        const url = typeof window !== 'undefined'  ? window.location.href : "";
        
        //ReactGA.pageview(window.location.pathname + window.location.search);
        let eventDay, eventTime = eventDay = "TBA";
        let description, cleanedDescription = description = "";
        if( event.event_date !== null && typeof event.event_date !== 'undefined' ){
            eventDay = event.event_date.replace(/\s/g, 'T').replace(/-/g, '').replace(/:/g, '');
            eventDay = Moment(eventDay);
            eventTime = eventDay.format("h:mm a").toString();
            eventDay = eventDay.format("MMMM D").toString();
            
            description = ReactHtmlParser(event.description.replace(/<br>/g, ''));
            cleanedDescription = Striptags(event.description);
            cleanedDescription = cleanedDescription.substring(0, cleanedDescription.indexOf('.',200)+1)
        }
        
        return (
            <ReactPlaceholder style={{marginTop: 16, padding: "0 16px"}} showLoadingAnimation={true} type='media' ready={this.state.ready} rows={4}>
                <Head>
                    <title>{event.title}</title>
                    <link rel="canonical" href={url} />
                    <link rel="manifest" href="/static/manifest.json" />
                    <meta name="theme-color" content="#ff6600" />
                    <link rel="shortcut icon" href="/static/icon.png" />
                    <link rel="apple-touch-icon" href="/static/icon.png" />
                    <meta name="apple-mobile-web-app-title" content={event.title} />
                    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="description" content={cleanedDescription} />
                    <meta property="og:type" content="article"/>  
                    <meta property="og:url" content={url}/>
                    <meta property="og:image" content={event.banner_url}/>  
                    <meta property="og:title" content={event.title}/>  
                    <meta property="og:description" content={cleanedDescription}/>  
                    <meta name="twitter:card" content="summary"/>  
                    <meta name="twitter:image" content={event.banner_url}/>  
                    <meta name="twitter:title" content={event.title}/>  
                    <meta name="twitter:description" content={cleanedDescription}/>  
                </Head>
                
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar
                                aria-label="Recipe"
                                src={event.logo_url || "https://pbs.twimg.com/profile_images/930433054371434496/v8GNrusZ_400x400.jpg"}
                                className={classNames(classes.avatar, classes.bigAvatar)}
                            />
                        }
                        title={event.title}
                        subheader={eventDay+" "+eventTime}
                        className={classes.cardHeader}
                    />
                    {
                        event.banner_url &&
                        <CardMedia
                            className={classes.media}
                            image={event.banner_url}
                        />
                    }
                    <CardContent>
                        <div className={classes.badgesContainer}>
                            <div>
                                { event.address && (
                                    <CustomChip 
                                        classes={classes} 
                                        label={event.address}
                                        clickable={true}
                                        onClick={() => window.open("https://maps.google.com/maps?q="+event.address , "_blank")}
                                        icon={<DirectionsIcon />}
                                    />
                                    )
                                }
                                { event.capacity && (
                                    <CustomChip 
                                        classes={classes} 
                                        label={event.capacity}
                                        tooltipTitle="Capacity"
                                        icon={<GroupIcon/>}
                                    />
                                    )
                                }
                                { event.type && (
                                    <CustomChip 
                                        classes={classes} 
                                        label={event.type}
                                        tooltipTitle="Type"
                                        icon={<LabelIcon/>}
                                    />
                                    )
                                }
                                { event.city_slug && (
                                    <CustomChip 
                                        classes={classes} 
                                        label={event.city_slug.toUpperCase()}
                                        icon={<LocationCityIcon/>}
                                    />
                                    )
                                }
                                { event.invite_only === "1" && (
                                    <CustomChip 
                                        classes={classes} 
                                        label="Invitation required"
                                        tooltipTitle="Invitation Only"
                                        icon={<AnnouncementIcon/>}
                                    />
                                    )
                                }
                            </div>
                            <div className='rsvpContainer'>
                                <a href={event.url} style={{textDecoration: 'none'}}>
                                    <Button size="large" variant={"raised"} color="secondary" className={classNames(classes.button)}>
                                        RSVP
                                    </Button>
                                </a>
                            </div>
                        </div>
                        <div className={classes.eventContent}>
                            { description }
                        </div>
                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>
                        <IconButton aria-label="Facebook Share">
                            <FacebookShareButton 
                                url={url}> 
                                <FacebookIcon size={32} round />
                            </FacebookShareButton>
                        </IconButton>
                        <IconButton aria-label="Facebook Share">
                            <GooglePlusShareButton url={url}>
                                <GooglePlusIcon size={32} round />
                            </GooglePlusShareButton>
                        </IconButton>
                        <IconButton aria-label="Facebook Share">
                            <TwitterShareButton url={url}>
                                <TwitterIcon size={32} round />
                            </TwitterShareButton >
                        </IconButton>
                        <IconButton aria-label="Facebook Share">
                            <LinkedinShareButton url={url}>
                                <LinkedinIcon size={32} round />
                            </LinkedinShareButton >
                        </IconButton>
                        <IconButton aria-label="Facebook Share">
                            <TelegramShareButton url={url}>
                                <TelegramIcon size={32} round />
                            </TelegramShareButton >
                        </IconButton>
                        <IconButton aria-label="Facebook Share">
                            <WhatsappShareButton url={url}>
                                <WhatsappIcon size={32} round />
                            </WhatsappShareButton >
                        </IconButton>
                        {
                            event.banner_url &&
                            <IconButton aria-label="Facebook Share">
                                <PinterestShareButton url={url} media={event.banner_url}>
                                    <PinterestIcon size={32} round />
                                </PinterestShareButton >
                            </IconButton>
                        }
                        <IconButton aria-label="Facebook Share">
                            <RedditShareButton url={url}>
                                <RedditIcon size={32} round />
                            </RedditShareButton >
                        </IconButton>
                        <IconButton aria-label="Facebook Share">
                            <EmailShareButton url={url}>
                                <EmailIcon size={32} round />
                            </EmailShareButton >
                        </IconButton>
                    </CardActions>
                    <Button 
                        id="fabButton"
                        variant="fab" 
                        color="secondary" 
                        className={classNames(classes.button, classes.fab)} 
                        onClick={() => window.open(event.url,"_blank")}>
                        <Tooltip open={true} title="RSVP ➤ " placement="left">
                            <CheckIcon/>
                        </Tooltip>
                    </Button>
                </Card>
            </ReactPlaceholder>
        );
    }
}
export default withStyles(styles)(Event);

Event.propTypes = {
    classes: PropTypes.object.isRequired
};