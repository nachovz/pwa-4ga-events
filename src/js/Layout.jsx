import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./views/ScrollToTop.jsx";
import Dashboard from "./views/Dashboard.jsx";
import Navigationbar from './component/BootstrapNavbar.jsx';
import Loadable from 'react-loadable';
import CustomCircularProgress from './component/CustomCircularProgress.jsx';
import Moment from 'moment';

import {Provider} from './stores/AppContext.jsx';

const EventComponent = Loadable({
  loader: () => import("./views/Event.jsx"),
  loading: CustomCircularProgress
});

export default class Layout extends React.Component {
  
  constructor(){
    super();
    
    this.state = {
        "events":[],
        "courses":[],
        "locations": [],
        "loadApiData": () => {
            fetch('https://assets.breatheco.de/apis/event/all')
                .then( (response) => {
                    if (response.status !== 200) {
                        throw new Error(response.statusText);
                    }
                    return response.json();
                }).then( (data) => {
                    if (!Array.isArray(data)) {
                        throw new Error(data);//TO-DO: Documentation on error cases
                    }
                    data = data.filter( event => Moment(event.event_date).diff( Moment(), "d" ) > 0 );
                    this.setState({events: data});
              }).catch(error => {
                console.log(error);
            });
                  
            fetch('https://www.4geeksacademy.co/wp-json/4g/v1/courses')
                .then( (response) => {
                    if (response.status !== 200) {
                        throw new Error(response.statusText);
                    }
                    return response.json();
                }).then( (data) => {
                    if (!Array.isArray(data)) {
                        throw new Error(data);//TO-DO: Documentation on error cases
                    }
                    let now = Moment();
                    
                    let courses = data.map( (course) =>{
                        course["type"] = "course";
                        course["finished"] = true;
                        course["title"] = course.name;
                        course["description"] = course.short_description;
                        //let event_date 
                        course["event_date"] = Moment(course.date, "MMMM D, YYYY").isValid() ? Moment(course.date,"MMMM D, YYYY").format("YYYY-MM-DD HH:mm:ss") : now;
                        //course["event_date"] = event_date.format("YYYY-MM-DD HH:mm:ss");
                        course["lang"] = course.language.toLowerCase().substring(0,2);
                        course["location_slug"] = course.bc_location_slug;
                        course["banner_url"] = course.featured_image;
                        course["address"] = course.location;
                        course["url"] = "https://www.4geeksacademy.co/course/"+course.slug;
                        
                        return course;
                    });
                    this.setState({courses: courses});
                    
                }).catch(error => {
                console.log(error);
            });

            fetch('https://api.breatheco.de/locations/')
                .then( (response) => {
                    if (response.status !== 200) {
                        throw new Error(response.statusText);
                    }
                    return response.json();
                }).then( (data) => {
                    if (data.code !== 200) {
                        throw new Error(data);//TO-DO: Documentation on error cases
                    }
                    this.setState({locations: data.data});
                    
                }).catch(error => {
                console.log(error);
            });
            
        },
        "getAllEvents": () => { 
            return this.state.events.filter( event => Moment(event.event_date).diff( Moment(), "d" ) > 0 ).concat(this.state.courses).sort((a, b) => Moment(a.event_date).unix() - Moment(b.event_date).unix()); 
        },
        "getAllLocations": () => {
            return this.state.locations.map(locat => { 
                    locat["count"] = this.state.getAllEvents().filter(x => x.location_slug===locat.slug).length;
                    return locat;
            }).sort((a, b) => b.count - a.count);
        }
    };
  }
  
  componentDidMount() {
    this.state.loadApiData();
  }
  
  render() {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <Navigationbar />
                <Switch>
                    <Provider value={{state:this.state, actions: this.state}}>
                        <Route exact path="/" component={Dashboard} />
                        <Route
                            path="/event/:theid"
                            component={EventComponent}
                        />
                    </Provider>
                    <Route render={() => <h1>Not found!</h1>} />
                </Switch>
            </ScrollToTop>
        </BrowserRouter>
    );
  }
}
