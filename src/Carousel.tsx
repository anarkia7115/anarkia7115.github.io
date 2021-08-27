import classNames from "classnames"
import { useState } from "react"

function Carousel(props:{images: {url:string, name:string, description:string}[]}) {

  const [activeIdx, setActiveIdx] = useState(0)

  function handlePrev() {
    setActiveIdx(i=>{
      const newIdx = i-1
      if (newIdx >=0 && newIdx < props.images.length) {
        return newIdx
      }
      return props.images.length-1
    })
  }


  function handleNext() {
    setActiveIdx(i=>{
      const newIdx = i+1
      if (newIdx >=0 && newIdx < props.images.length) {
        return newIdx
      }
      return 0
    })
  }

  function handleIndicatorClick(idx:number) {
    setActiveIdx(idx)
  }

  const oneCarousel = (idx:number, url:string, title:string, description:string, isActive:boolean)=>
    <div 
      key={idx}
      className={classNames("carousel-item", isActive?"active":undefined)}
      // style={{width:"60%"}}
    >
      <img src={url} className="d-block w-100 border" alt={title}/>

      <div className="carousel-caption d-none d-md-block" 
        style={{background:"black", opacity:"0.7"}}>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>

  const oneCarouselIndicator = (idx:number, isActive:boolean) => 
    <button key={idx} type="button" data-bs-target="" 
      className={classNames(isActive?"active":undefined)}
      onClick={()=>handleIndicatorClick(idx)}
    ></button>

  return(
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {props.images.map((_, i)=>oneCarouselIndicator(i, i === activeIdx))}
      </div>
      <div className="carousel-inner">
        {props.images.map((p, i)=>oneCarousel(i, p.url, p.name, p.description, i === activeIdx))}
      </div>
      <button className="carousel-control-prev" data-bs-target="" type="button" onClick={handlePrev}
        style={{background:"grey"}}
      >
        <span className="carousel-control-prev-icon"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" data-bs-target="" type="button" onClick={handleNext}
        style={{background:"grey"}}
      >
        <span className="carousel-control-next-icon"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
export default Carousel