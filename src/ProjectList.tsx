import React from "react";

// @ts-ignore
import housingInfoCoverUrl from "url:./screenshots/housing_info.png?width=200&height=200";
// @ts-ignore
import newsSnorkelCoverUrl from "url:./screenshots/news_snorkel-entity-graph.png?width=200&height=200";
// @ts-ignore
import scrapeHelperCoverUrl from "url:./screenshots/scrape_helper-news.png?width=200&height=200";

// @ts-ignore
import housingInfoSsUrl from "url:./screenshots/housing_info.png"
// @ts-ignore
import newsSnorkelSs0Url from "url:./screenshots/news_snorkel-entity-graph.png"
// @ts-ignore
import newsSnorkelSs1Url from "url:./screenshots/news_snorkel-snorkel-label_function.png"
// @ts-ignore
import newsSnorkelSs2Url from "url:./screenshots/news_snorkel-span_query.png"
// @ts-ignore
import scrapeHelperSs0Url from "url:./screenshots/scrape_helper-news.png"
// @ts-ignore
import scrapeHelperSs1Url from "url:./screenshots/scrape_helper-selectors.png"
// @ts-ignore
import scrapeHelperSs2Url from "url:./screenshots/scrape_helper-spider.png"

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
    name: "Housing Info", 
    coverUrl: housingInfoCoverUrl, 
    path: "/housing_info", 
    description: "Make renters find house easier. ", 
    screenShotUrls: [housingInfoSsUrl], 
  }, 
  {
    name:"News Snorkel", 
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
          {projects.map(p=>
            <Route path={p.path}>
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