import React from "react";

// @ts-ignore
import housingInfoCoverUrl from "url:./screenshots/housing_info.png?width=200&height=200&as=webp";
// @ts-ignore
import newsSnorkelCoverUrl from "url:./screenshots/news_snorkel-entity-graph.png?width=200&height=200&as=webp";
// @ts-ignore
import scrapeHelperCoverUrl from "url:./screenshots/scrape_helper-news.png?width=200&height=200&as=webp";

// @ts-ignore
import housingInfoSsUrl from "url:./screenshots/housing_info.png?quality=20&as=webp"
// @ts-ignore
import newsSnorkelSs0Url from "url:./screenshots/news_snorkel-entity-graph.png?quality=20&as=webp"
// @ts-ignore
import newsSnorkelSs1Url from "url:./screenshots/news_snorkel-snorkel-label_function.png?quality=20&as=webp"
// @ts-ignore
import newsSnorkelSs2Url from "url:./screenshots/news_snorkel-span_query.png?quality=20&as=webp"
// @ts-ignore
import scrapeHelperSs0Url from "url:./screenshots/scrape_helper-news.png?quality=20&as=webp"
// @ts-ignore
import scrapeHelperSs1Url from "url:./screenshots/scrape_helper-selectors.png?quality=20&as=webp"
// @ts-ignore
import scrapeHelperSs2Url from "url:./screenshots/scrape_helper-spider.png?quality=20&as=webp"
// @ts-ignore
import timelineCoverUrl from "url:./screenshots/github_timeline.png?width=200&height=200&as=webp"
// @ts-ignore
import timelineSsUrl from "url:./screenshots/github_timeline.png?quality=20&as=webp"
// @ts-ignore
import newsVisCoverUrl from "url:./screenshots/news-vis-news.png?width=200&height=200&as=webp"
// @ts-ignore
import newsVisSs0Url from "url:./screenshots/news-vis-news.png?quality=20&as=webp"
// @ts-ignore
import newsVisSs1Url from "url:./screenshots/news-vis-customer-reviews.png?quality=20&as=webp"

import {
  Link, 
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Carousel from "./Carousel";

interface Screenshot {
  url: string
  description: string
}

interface Project {
  name: string
  coverUrl: string
  id: string
  description: string
  screenshots: Screenshot[]
}

const projects:Project[] = [
  {
    name: "Data-viz for renting v2", 
    coverUrl: housingInfoCoverUrl, 
    id: "housing_info", 
    description: "Make renters find house easier. ", 
    screenshots: [{
      url:housingInfoSsUrl, 
      description: "hexbin heatmap, "+
    "price histogram, "+
    "and house around mouse. ",

    }], 
  }, 
  {
    name:"Knowledge Exploration System for News", 
    coverUrl: newsSnorkelCoverUrl, 
    id: "news_snorkel", 
    description: "Explore Knowledge visually in news. ", 
    screenshots: [{
      url: newsSnorkelSs0Url, 
      description: "Visualization of entities in news as a network"
    }, 
    {
      url:newsSnorkelSs1Url, 
      description: "News filter(label function) and filter results. "
    },
    {
      url: newsSnorkelSs2Url, 
      description: "Span query and it's results. "
    }]
  }, 
  {
    name: "Scrape Helper", 
    coverUrl: scrapeHelperCoverUrl, 
    id: "scrape_helper", 
    description: "Makes the construction of web scraper easier. ", 
    screenshots: [{
      url:scrapeHelperSs0Url, 
      description: "Auto generated scrapy code on CNN news. "
    }, {
      url:scrapeHelperSs1Url, 
      description: "Create scrapper on imdb. "
    }, {
      url:scrapeHelperSs2Url, 
      description: "Extracted json on imdb. "
    }]
  }, 
  {
    name:"Github timeline", 
    coverUrl: timelineCoverUrl, 
    id: "timeline", 
    description: "This project visualized my github project timeline using bokeh. ",
    screenshots: [{
      url:timelineSsUrl, 
      description: "Visualization of my github project timeline using bokeh. "
    }]
  }, 
  {
    name: "Sentiment Analysis Visualization on Any Web Page", 
    coverUrl: newsVisCoverUrl, 
    id: "news_vis", 
    description: "It's a chrome extension which visualize sentiment analysis results on web pages directly. "+
    "It can visualize sentiment analysis results of any web pages including "+
    "news, customer reviews and social media. "+
    "The views of visualization including highlight of text content based on "+
    "sentiment score and keyword network based on co-occurrence in sentence. ", 
    screenshots: [{
      url:newsVisSs0Url, 
      description: "Sentiment analysis on cnn home page. "
    }, {
      url:newsVisSs1Url, 
      description: "Sentiment analysis on amazon product reviews. "
    }]
  }
]

function ProjectList() {
  const pInRow = 3
  const projectsComp = [...Array(Math.ceil(projects.length / pInRow)).keys()]
    .map(rowId=>{
      /* row of projects */
      console.log(`${rowId*pInRow}, ${rowId*(pInRow+1)}`)
      return <div key={rowId} className="d-flex justify-content-center">
        {projects.slice(rowId*pInRow, (rowId+1)*pInRow)
          .map((p, i)=>
            <ProjectThumbnail key={i}
              detail={p}/>
          )}
      </div>
    })
  return(
    <div className="mb-5">
      <h2 className="text-center">Projects</h2>
      <Router>
        {projectsComp}
        <Switch>
          {projects.map((p)=>
            <Route key={p.name} path={"/"+p.id}>
              <ProjectDetail id={p.id} detail={p}/>
            </Route>
          )}
        </Switch>
      </Router>
    </div>
  )
}

function ProjectThumbnail(props:{detail:Project}) {
  const p = props.detail
  return(
    <div 
      className="m-2"
    >
      <Link to={"/"+p.id+"#"+p.id}>
        <img src={p.coverUrl} className="img-thumbnail" alt={p.name}/>
      </Link>
    </div>
    
  )
}

function ProjectDetail(props:{id:string, detail:Project}) {
  const p = props.detail
  return (
    <div id={props.id}>
      <h3>{p.name}</h3>
      <p>{p.description}</p>
      <Carousel key={p.name} images={p.screenshots.map(ss=>({
        url: ss.url, 
        title: ss.description, 
      }))}/>

    </div>
  )

}

export default ProjectList