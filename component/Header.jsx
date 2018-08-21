import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default () => {
    return(
        <React.Fragment>
            <nav className={"navbar navbar-expand-lg navbar-dark bg-dark custom-4ga-navbar"}>
                
                <Link href="/">
                    <a className="navbar-brand">
                        <img
                            src="https://assets.breatheco.de/apis/img/images.php?blob&random&cat=logo&tags=4geeks,white,small"
                            width="100"
                            alt="4Geeks Logo"
                        />
                    </a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tooltip" data-placement="top" title="Discover why ours is the best program in the city" href="https://www.4geeksacademy.co/the-program/">The Program <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tooltip" data-placement="top" title="We offer the best possible pricing in town" href="https://www.4geeksacademy.co/pricing/">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tooltip" data-placement="top" title="The team & mentors, events, news, reviews and awards" href="https://www.4geeksacademy.co/the-academy/">
                            The Academy
                            </a>
                        </li>
                        <li className="nav-item active">
                            <Link href={"/"}>
                                <a className="nav-link" data-toggle="tooltip" data-placement="top" title="Get information about upcoming starting dates" >
                                Upcoming Dates
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    );
}