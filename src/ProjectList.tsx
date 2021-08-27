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

interface Project {
  name: string
  coverUrl: string
  path: string
  description: string
  screenShotUrls?: string[]
}

const projects:Project[] = [
  {
    name: "Data-viz for renting v2", 
    coverUrl: housingInfoCoverUrl, 
    path: "/housing_info", 
    description: "Make renters find house easier. ", 
    screenShotUrls: [housingInfoSsUrl], 
  }, 
  {
    name:"Knowledge Exploration System for News", 
    coverUrl: newsSnorkelCoverUrl, 
    path: "/news_snorkel", 
    description: "Explore Knowledge visually in news. ", 
    screenShotUrls: [newsSnorkelSs0Url, newsSnorkelSs1Url, newsSnorkelSs2Url]
  }, 
  {
    name: "Scrape Helper", 
    coverUrl: scrapeHelperCoverUrl, 
    path: "/scrape_helper", 
    description: "Makes the construction of web scraper easier. ", 
    screenShotUrls: [scrapeHelperSs0Url, scrapeHelperSs1Url, scrapeHelperSs2Url]
  }, 
  {
    name:"Github timeline", 
    coverUrl: timelineCoverUrl, 
    path: "/timeline", 
    description: "This project visualized my github project timeline using bokeh. ",
    screenShotUrls: [timelineSsUrl]
  }, 
  {
    name: "Sentimental Analysis Visualization on Any Web Page", 
    coverUrl: newsVisCoverUrl, 
    path: "/news_vis", 
    description: "It's a chrome extension which visualize sentimental analysis results on web pages directly. "+
    "It can visualize sentimental analysis results of any web pages including "+
    "news, customer reviews and social media. "+
    "The views of visualization including highlight of text content based on "+
    "sentiment score and keyword network based on co-occurrence in sentence. ", 
    screenShotUrls: [newsVisSs0Url, newsVisSs1Url]
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
    <div className="text-center">
      <h2>Projects</h2>
      <Router>
        {projectsComp}
        <Switch>
          {projects.map((p)=>
            <Route key={p.name} path={p.path}>
              <ProjectDetail detail={p}/>
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
      <Link to={p.path}>
        <img src={p.coverUrl} className="img-thumbnail" alt={p.name}/>
      </Link>
    </div>
    
  )
}

function ProjectDetail(props:{detail:Project}) {
  const p = props.detail
  return (
    <div>
      <h3>{p.name}</h3>
      <p>{p.description}</p>
      <Carousel key={p.name} images={p.screenShotUrls.map(url=>({
        url: url, 
        name: p.name, 
        description: p.description, 
      }))}/>

    </div>
  )

}

export default ProjectList